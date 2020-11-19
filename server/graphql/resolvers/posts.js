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
      console.log(user)

      const newPost = Post({
        body,
        user: user.id,
        username: user.username,
        created: new Date().toUTCString()
      });

      const post = await newPost.save();

      return post;
    }
  }
}