const { gql } = require("apollo-server");

module.exports = gql`
  type Blog {
    Date_Created: String
    Author: String
    Title: String
    Content: String
  }

  type Query { 
    getBlogs: [Blog]
    getBlog(blogId: ID!): Blog
  }

  type Mutation {
    createBlog(Title: String!, Content: String!): Blog
    deleteBlog(blogId: ID!): Blog
  }
`;
// Each query and mutation creates an api endpoint with each specific name