// Query resolvers
const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userApi.getUsers(input);
  return users;
};

const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userApi.getUser(id);
  return user;
};

// Mutation resolvers
const createUser = async (_, { data }, { dataSources }) => {
  return dataSources.userApi.createUser(data);
};

const updateUser = async (_, { userId, data }, { dataSources }) => {
  return dataSources.userApi.updateUser(userId, data);
};

const deleteUser = async (_, { userId }, { dataSources }) => {
  return dataSources.userApi.deleteUser(userId);
};

// Posts
const posts = ({ id }, _, { dataSources }) => {
  return dataSources.userApi.batchLoadByUserId(id);
};

export const userResolvers = {
  Query: { user, users },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
  User: { posts },
};
