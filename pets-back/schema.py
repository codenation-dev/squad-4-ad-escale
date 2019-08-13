import graphene
from graphene import relay, ObjectType, Field, String, ID
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType, converter

from database import db_session
from models import AnimalModel
from sqlalchemy import desc


class Animal(SQLAlchemyObjectType):
    class Meta: 
        model = AnimalModel

class AnimalAttributes(object):
    id = ID(required=False)
    name = String(required=False)
    species = String(required=False)
    insert_date = String(required=False)
    breed =  String(required=False)
    gender = String(required=False)
    size = String(required=False)
    city = String(required=False)
    state = String(required=False)
    postalcode = String(required=False)

  
class CreateAnimalInput(graphene.InputObjectType, AnimalAttributes):
    """Arguments to create a animal."""
    exclude_fields = ['id']


class UpdateAnimalInput(graphene.InputObjectType, AnimalAttributes):
    """Arguments to update a animal."""
    # id = ID(required=True)
    pass


class CreateAnimal(graphene.Mutation):
    animal = graphene.Field(Animal, description="Animal created by this mutation.")
    
    class Arguments:
        input = CreateAnimalInput(required=True)

    @staticmethod
    def mutate(root, info, input):
        animal = AnimalModel(**input)
        db_session.add(animal)
        db_session.commit()
        return CreateAnimal(animal=animal)


class UpdateAnimal(graphene.Mutation):
    animal = graphene.Field(Animal, description="Animal updated by this mutation.")
    
    class Arguments:
        input = UpdateAnimalInput(required=True)

    @staticmethod
    def mutate(root, info, input):
        query = AnimalModel.query.filter_by(id=input['id'])
        update = query.update(input)
        db_session.commit()
        return UpdateAnimal(animal=query.first())

class Query(ObjectType):
    model_fields = dict((name, getattr(AnimalAttributes, name)) for name in dir(AnimalAttributes) if not name.startswith('__'))
    general = {
        'maxItems':String(required=False, description='Max number of items'),
        'orderByDesc':String(required=False, description='Descendent order by given field name')
    }
    animals = graphene.List(Animal, **general, **model_fields, description='Return registered animals')
    def resolve_animals(self, info, **kwargs):
        query = AnimalModel.query
        maxItems = 1000
        for attr,value in kwargs.items():
            if attr == 'maxItems':
                maxItems = int(value)
            elif attr == 'orderByDesc':
                query = query.order_by(desc(value))
            else:
                value = value.lower()
                query = query.filter( getattr(AnimalModel,attr)==value)
        return query.limit(maxItems).all()

class Mutation(graphene.ObjectType):
    createAnimal = CreateAnimal.Field()
    updateAnimal = UpdateAnimal.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
