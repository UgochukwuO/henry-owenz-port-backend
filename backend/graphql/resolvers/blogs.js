const { AuthenticationError } = require("apollo-server");

const Blog = require("../../models/Blog");

module.exports = {
  Query: {
    async getBlogs() {
      try {
        const blogs = await Blog.find().sort({ Date_Created: -1 });
        return blogs;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getBlog(_, { blogId }) {
      try {
        const blog = await Blog.findById(blogId);
        if (blog) {
          return blog;
        } else {
          throw new Error("Blogs not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createBlog(_, { Title, Content }, context) {
      if (Title.trim() === "") {
        throw new Error("Blogs Title must not be empty");
      }

      const newBlog = new Blog({
        Title,
        Content,
        Date_Created: new Date().toISOString(),
        Author: "Henry Owenz"
      });

      const blog = await newBlog.save();

      return blog;
    },

    async deleteBlog(_, { blogId }) {
      try {
        const blog = await Blog.findById(blogId);
        if (blogId) {
          await blog.delete();
          return "Blog deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
