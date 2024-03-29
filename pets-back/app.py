#!/usr/bin/env python
import os
from database import db_session
from flask import Flask
from schema import schema
from flask_graphql import GraphQLView
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.debug = True
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

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
    app.run()
