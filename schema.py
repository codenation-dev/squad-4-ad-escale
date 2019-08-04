from models import Animal as AnimalModel
# from models import Employee as EmployeeModel
# from models import Role as RoleModel

import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType


class Animal(SQLAlchemyObjectType):
    class Meta:
        model = AnimalModel
        interfaces = (relay.Node, )


# class Employee(SQLAlchemyObjectType):
#     class Meta:
#         model = EmployeeModel
#         interfaces = (relay.Node, )


# class Role(SQLAlchemyObjectType):
#     class Meta:
#         model = RoleModel
#         interfaces = (relay.Node, )


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    # Allow only single column sorting
    # all_employees = SQLAlchemyConnectionField(
    #     Employee, sort=Employee.sort_argument())
    # Allows sorting over multiple columns, by default over the primary key
    # all_roles = SQLAlchemyConnectionField(Role)
    # Disable sorting over this field
    all_animals = SQLAlchemyConnectionField(Animal, sort=None)

# class Mutations(graphene.ObjectType):
#     class Arguments:
#         name = graphene.String()

#     ok = graphene.Boolean()
#     person = graphene.Field(lambda: Animal)

#     def mutate(root, info, name):
#         person = Animal(name=name)
#         ok = True
#         return CreatePerson(person=person, ok=ok)

schema = graphene.Schema(query=Query, types=[Animal])
