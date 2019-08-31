from database import Base
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, func, Enum, Text
from sqlalchemy.orm import backref, relationship
from sqlalchemy_utils import ChoiceType
import graphene

# GENDER_CHOICES = [
#     (u'female', u'Fêmea'),
#     (u'male', u'Macho')
# ]

# SPECIES_CHOICES = [
#     (u'dog', u'Cão'),
#     (u'cat', u'Gato'),
#     (u'bird', u'Ave'),
#     (u'rodent', u'Roedor'),
#     (u'fish', u'Peixe'),
#     (u'reptile', u'Réptil')
# ]

class AnimalModel(Base):
    __tablename__ = 'animals'
    id = Column(Integer, primary_key=True)
    insertDate = Column(DateTime, default=func.now())
    name =  Column(String)
    gender = Column(Enum('female', 'male', name='gender'))
    size = Column(Enum('small', 'medium', 'large', name='size'))
    species = Column(Enum('dog', 'cat', 'bird', 'rodent', 'fish', 'reptile', name='specie'))
    city = Column(String)
    category = Column(Enum('found', 'lost', 'foster', name='category'))
    imageURL = Column(String)
    detail = Column(Text)
    userId = Column(Integer)


class BreedModel(Base):
    __tablename__ = 'breeds'
    id = Column(Integer, primary_key=True)
    name =  Column(String)
    specie = Column(String)

class UserModel(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(256), nullable=False)
    username = Column(String(80), unique=True, nullable=False)
    password = Column(String(80), unique=False, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    phone = Column(String(9), unique=True, nullable=False)
    url_picture = Column(String)
    validation_question = Column(String, nullable=False)
    validation_answer= Column(String, nullable=False)
    city = Column(String)

    def __repr__(self):
        return '<User %r>' % self.name
