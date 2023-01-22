import { gql } from 'apollo-server';
import { apiFilterTypeDefs } from './api-filters/typedefs';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedefs';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';
import { apiFiltersResolvers } from './api-filters/resolvers';
import { loginTypeDefs } from './login/typedefs';
import { loginResolvers } from './login/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
  type Mutation {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFilterTypeDefs,
  loginTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
  loginResolvers,
];
