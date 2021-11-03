const blogsResolvers = require("./blogs");


module.exports = {
  Query: {
    ...blogsResolvers.Query,

  },
  Mutation: {
    ...blogsResolvers.Mutation,

  },
};
