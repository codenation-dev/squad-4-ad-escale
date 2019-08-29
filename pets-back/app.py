#!/usr/bin/env python
import os
from database import db_session, init_db
from flask import Flask
from schema import schema
from flask_graphql import GraphQLView
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.debug = True
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

example_query = """
{
  animals(species:dog){
    id
    name
  }
}

"""
example_create= """
mutation {
  createAnimal (input: {
    name: "Alexis ROLLAND"
  }) {
    animal {
      id
      name
    }
  }
}
"""

example_update = """"
mutation {
  updateAnimal (input: {
    id: 1,
    name: "Jack"
  }) {
    animal {
      id
      name
    }
  }
}
"""

app.add_url_rule(
    "/graphql", view_func=GraphQLView.as_view("graphql", schema=schema, graphiql=True)
)

@app.route('/')
def index():
	return "Go to /graphql"

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


if __name__ == "__main__":
    init_db()
    app.run()
