from database import Base
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, func, Enum
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
    breed =  Column(String)
    gender = Column(Enum('female', 'male', name='gender'))
    size = Column(String)
    species = Column(Enum('dog', 'cat', name='specie'))
    city = Column(String)
    state = Column(String)
    postalcode = Column(String)
