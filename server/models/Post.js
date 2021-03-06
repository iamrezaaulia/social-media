const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  username: String,
  body: String,
  created: String,
  likes: [
    {
      username: String,
      created: String
    }
  ],
  comments: [
    {
      body: String,
      username: String,
      created: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = model('Post', postSchema);