from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base, DeferredReflection
from sqlalchemy.orm import scoped_session, sessionmaker
import os

if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

engine = create_engine(os.getenv("DATABASE_URL"))
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    from models import AnimalModel as Animal
    from models import BreedModel as Breed
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    # Create the fixtures
    tracy = Animal(name='tracy', species='dog', breed='collie')
    db_session.add(tracy)
    oliver = Animal(name='oliver', species='dog', breed='shitzu')
    db_session.add(oliver)
    duquesa = Animal(name='duquesa', species='cat')
    db_session.add(duquesa)
    garfield = Animal(name='garfield', species='cat')
    db_session.add(garfield)
    breed1 = Breed(specie='dog',name='Vira-Lata')
    db_session.add(breed1)
    db_session.commit()
