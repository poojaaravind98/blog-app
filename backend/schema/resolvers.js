const Post = require('../models/Post');

const resolvers = {
  Query: {
    posts: async () => {
      // Most recent posts first
      return Post.find().sort({ createdAt: -1 });
    },
    post: async (_parent, { id }) => {
      return Post.findById(id);
    },
  },

  Mutation: {
    addPost: async (_parent, { title, content }) => {
      if (!title.trim() || !content.trim()) {
        throw new Error('Title and content must not be empty');
      }
      const post = new Post({ title, content });
      await post.save();
      return post;
    },

    deletePost: async (_parent, { id }) => {
      const result = await Post.findByIdAndDelete(id);
      return !!result;
    },
  },

  Post: {
    id: (parent) => parent.id || parent._id.toString(),
    createdAt: (parent) => new Date(parent.createdAt).toISOString(),
    updatedAt: (parent) => new Date(parent.updatedAt).toISOString(),
  },
};

module.exports = resolvers;
