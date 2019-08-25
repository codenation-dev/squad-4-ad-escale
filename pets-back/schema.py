import graphene
from graphene import relay, ObjectType, Field, String, ID
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType, converter

from database import db_session
from models import AnimalModel
from models import BreedModel
from models import UserModel
from sqlalchemy import desc

class Users(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (relay.Node, )


class UsersConnection(relay.Connection):
    class Meta:
        node = Users


class CreateUser(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        username = graphene.String()
        email = graphene.String()
        password = graphene.String()
        phone = graphene.String()


    new_user = graphene.Field(lambda: Users)

    def mutate(root, info, name, username, email, password, phone):
        new_user = Users(name=name, username=username, email=email, password=password, phone=phone)
        return CreateUser(new_user=new_user)


class User(graphene.ObjectType):
    name = graphene.String()
    username = graphene.String()
    email = graphene.String()
    password = graphene.String()
    phone = graphene.String()
    city = graphene.String()
    validation_question = graphene.String()
    validation_answer = graphene.String()
    url_picture = graphene.String()
    

class Animal(SQLAlchemyObjectType):
    class Meta: 
        model = AnimalModel

class Breed(SQLAlchemyObjectType):
    class Meta: 
        model = BreedModel

class Users(SQLAlchemyObjectType):
    class Meta: 
        model = UserModel

class AnimalAttributes(object):
    id = ID(required=False)
    name = String(required=False)
    species = String(required=False)
    insertDate = String(required=False)
    breed =  String(required=False)
    gender = String(required=False)
    size = String(required=False)
    city = String(required=False)
    state = String(required=False)
    postalcode = String(required=False)

class BreedAttributes(object):
    id = ID(required=False)
    name = String(required=False)
    specie = String(required=False)

class UserAttributes(object):
    id = ID(required=False)
    ## add outros

class CreateBreedInput(graphene.InputObjectType, BreedAttributes):
    """Arguments to create a breed."""
    exclude_fields = ['id']

class CreateAnimalInput(graphene.InputObjectType, AnimalAttributes):
    """Arguments to create a animal."""
    exclude_fields = ['id']


class UpdateAnimalInput(graphene.InputObjectType, AnimalAttributes):
    """Arguments to update a animal."""
    # id = ID(required=True)
    pass

class CreateBreed(graphene.Mutation):
    breed = graphene.Field(Breed, description="Breed created by this mutation.")

    class Arguments:
        input = CreateBreedInput(required=True)

    @staticmethod
    def mutate(root, info, input):
        breed = BreedModel(**input)
        db_session.add(breed)
        db_session.commit()
        return CreateBreed(breed=breed)


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
    user = graphene.Field(User)
    model_fields = dict((name, getattr(AnimalAttributes, name)) for name in dir(AnimalAttributes) if not name.startswith('__'))
    model_fields_breed = dict((name, getattr(BreedAttributes, name)) for name in dir(BreedAttributes) if not name.startswith('__'))

    general = {
        'maxItems':String(required=False, description='Max number of items'),
        'orderByDesc':String(required=False, description='Descendent order by given field name')
    }
    animals = graphene.List(Animal, **general, **model_fields, description='Return registered animals')
    breeds = graphene.List(Breed, **general, **model_fields_breed, description='Return registered breeds')
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
    
    def resolve_breeds(self, info, **kwargs):
        query = BreedModel.query
        maxItems = 1000
        for attr,value in kwargs.items():
            if attr == 'maxItems':
                maxItems = int(value)
            elif attr == 'orderByDesc':
                query = query.order_by(desc(value))
            else:
                value = value.lower()
                query = query.filter( getattr(BreedModel,attr)==value)
        return query.limit(maxItems).all()

class Mutation(graphene.ObjectType):
    createAnimal = CreateAnimal.Field()
    updateAnimal = UpdateAnimal.Field()
    createBreed = CreateBreed.Field()
    create_user = CreateUser.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
