const Post = require("../models/Post");


const resolvers = {

    Query: {

        posts: async () => {
            return await Post.find().sort({
                createdAt: -1
            });
        }

    },


    Mutation: {

        addPost: async (_, args) => {

            const post = new Post({
                title: args.title,
                content: args.content
            });

            await post.save();

            return post;
        }

    }

};


module.exports = resolvers;