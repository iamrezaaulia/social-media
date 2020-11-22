const { AuthenticationError, UserInputError } = require('apollo-server');

const Post = require('../../models/Post');
const { authorize } = require('../../helpers/authorize');

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find().sort({ created: -1 });
        return posts;
      } catch(error) {
        throw new Error(error);
      }
    },

    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if(post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
      } catch(error) {
        throw new Error(error);
      }
    }
  },

  Mutation: {
    async createPost(_, { body }, context) {
      const user = authorize(context);

      if(body.trim() === ''){
        throw new Error('Post body must not be empty')
      }

      const newPost = Post({
        body,
        user: user.id,
        username: user.username,
        created: new Date().toUTCString()
      });

      const post = await newPost.save();

      return post;
    },

    async deletePost(_, { postId }, context) {
      const user = authorize(context);

      try {
        const post = await Post.findById(postId);
        if (user.username === post.username) {
          await post.delete();
          return 'Post deleted successfully';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    async likePost(_, { postId }, context) {
      const user = authorize(context)
      const post = await Post.findById(postId);

      if(post) {
        if(post.likes.find(like => like.username === user.username)) {
          post.likes = post.likes.filter((like) => like.username !== user.username)
        } else {
          post.likes.push({
            username: user.username,
            created: new Date().toUTCString()
          })
        }

        await post.save();
        return post;
      } else {
        throw new UserInputError('Post not found');
      }
    }
  }
}