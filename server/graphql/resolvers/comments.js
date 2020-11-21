const { UserInputError, AuthenticationError } = require('apollo-server');

const Post = require('../../models/Post');
const { authorize } = require('../../helpers/authorize');


module.exports = {
  Mutation: {
    async createComment(_, { postId, body }, context) {
      const user = authorize(context);

      if(body.trim() === '') {
        throw new UserInputError('Empty comment', { 
          errors: { 
            body: 'Comment body must not empty' 
          } 
        })
      }

      const post = await Post.findById(postId);

      if(post) {
        post.comments.unshift({
          body,
          username: user.username,
          created: new Date().toUTCString()
        })
        await post.save();
        return post;
      } else {
        throw new UserInputError('Post not found');
      }
    },
    
    async deleteComment(_, { postId, commentId }, context) {
      const { username } = authorize(context);

      const post = await Post.findById(postId);

      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);

        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } else {
        throw new UserInputError('Post not found');
      }
    }
  }
};