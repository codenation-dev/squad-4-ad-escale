from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base, DeferredReflection
from sqlalchemy.orm import scoped_session, sessionmaker

connection_string = 'postgresql://localhost/name_of_database'
engine = create_engine(connection_string)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    from models import Animal
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    # Create the fixtures
    tracy = Animal(name='Tracy', species='Dog', breed='Collie')
    db_session.add(tracy)
    oliver = Animal(name='Oliver', species='Dog', breed='Shitzu')
    db_session.add(oliver)
    duquesa = Animal(name='Duquesa', species='Cat')
    db_session.add(duquesa)
    garfield = Animal(name='Garfield', species='Cat')
    db_session.add(garfield)
    db_session.commit()
