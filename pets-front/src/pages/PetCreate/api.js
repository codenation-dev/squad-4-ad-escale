import React from 'react';
import gql from 'graphql-tag';
import { createHttpLink } from "apollo-link-http";
import { Query, Mutation } from 'react-apollo';

const httpLink = createHttpLink({
    uri: "http://petcodes.herokuapp.com/graphql"
  });
