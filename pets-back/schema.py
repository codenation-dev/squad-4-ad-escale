from graphene import ObjectType, InputObjectType, Schema, Mutation, \
                     Field, String, ID, Int, Boolean, List
from graphene_sqlalchemy import SQLAlchemyConnectionField, \
                                SQLAlchemyObjectType
from database import db_session
from models import AnimalModel
from models import UserModel
from sqlalchemy import desc


class Users(SQLAlchemyObjectType):
    class Meta:
        model = UserModel


class Animal(SQLAlchemyObjectType):
    class Meta: 
        model = AnimalModel


class AnimalAttributes(object):
    id = ID(required=False)
    name = String(required=False)
    species = String(required=False)
    insertDate = String(required=False)
    gender = String(required=False)
    size = String(required=False)
    city = String(required=False)
    imageURL = String(required=False)
    detail = String(required=False)
    category = String(required=False)
    userId = Int(required=False)


class UserAttributes(object):
    id = ID(required=False)    
    name = String(required=False)
    username = String(required=False)
    email = String(required=False)
    password = String(required=False)
    phone = String(required=False)
    city = String(required=False)
    validation_question = String(required=False)
    validation_answer = String(required=False)
    url_picture = String(required=False)


class CreateUserInput(InputObjectType, UserAttributes):
    """Arguments to create a user."""
    exclude_fields = ['id']   


class UpdateUserInput(InputObjectType, UserAttributes):
    """Arguments to update a user."""
    pass 


class CreateAnimalInput(InputObjectType, AnimalAttributes):
    """Arguments to create a animal."""
    exclude_fields = ['id']


class UpdateAnimalInput(InputObjectType, AnimalAttributes):
    """Arguments to update a animal."""
    pass


class CreateUser(Mutation):
    user = Field(Users, description="User created by this mutation.")
    
    class Arguments:
        input = CreateUserInput(required=True)

    @staticmethod
    def mutate(root, info, input):
        users = UserModel(**input)
        db_session.add(users)
        db_session.commit()
        return CreateUser(user=users)


class UpdateUser(Mutation):
    user = Field(Users, description="User updated by this mutation.")
    
    class Arguments:
        input = UpdateUserInput(required=True)

    @staticmethod
    def mutate(root, info, input):
        query = UserModel.query.filter_by(id=input['id'])
        update = query.update(input)
        db_session.commit()
        return UpdateUser(user=query.first())


class CreateAnimal(Mutation):
    animal = Field(Animal, description="Animal created by this mutation.")
    
    class Arguments:
        input = CreateAnimalInput(required=True)

    @staticmethod
    def mutate(root, info, input):
        animal = AnimalModel(**input)
        db_session.add(animal)
        db_session.commit()
        return CreateAnimal(animal=animal)


class UpdateAnimal(Mutation):
    animal = Field(Animal, description="Animal updated by this mutation.")
    
    class Arguments:
        input = UpdateAnimalInput(required=True)

    @staticmethod
    def mutate(root, info, input):
        query = AnimalModel.query.filter_by(id=input['id'])
        update = query.update(input)
        db_session.commit()
        return UpdateAnimal(animal=query.first())

class Query(ObjectType):   
    model_fields_user = dict((name, getattr(UserAttributes, name)) for name in dir(UserAttributes) if not name.startswith('__'))    
    model_fields = dict((name, getattr(AnimalAttributes, name)) for name in dir(AnimalAttributes) if not name.startswith('__'))    
    general = {
        'maxItems':String(required=False, description='Max number of items'),
        'orderByDesc':String(required=False, description='Descendent order by given field name')
    }
    animals = List(Animal, **general, **model_fields, description='Return registered animals')
    users = List(Users, **general, **model_fields_user, description='Return registered users')    
    
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

    def resolve_users(self, info, **kwargs):        
        query = UserModel.query
        maxItems = 1000
        for attr,value in kwargs.items():            
            if attr == 'maxItems':
                maxItems = int(value)
            elif attr == 'orderByDesc':
                query = query.order_by(desc(value))
            else:            
                query = query.filter( getattr(UserModel,attr)==value)            
        return query.limit(maxItems).all()   


class Mutation(ObjectType):
    createAnimal = CreateAnimal.Field()
    updateAnimal = UpdateAnimal.Field()
    create_user = CreateUser.Field()
    updateUser = UpdateUser.Field()

schema = Schema(query=Query, mutation=Mutation)
