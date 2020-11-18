const bcrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const User = require('../../models/User');
const { SECRET_KEY } = require('../../config');
const { validateRegisterInput } = require('../../helpers/validated');

module.exports = {
  Mutation: {
    async register(
      _, 
      {
        registerInput: {
          username,
          email,
          password,
          confirmPassword
        }
      }, 
      context, 
      info
    ) {
      // Validate user data
      const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword);
      if(!valid) {
        throw new UserInputError('Errors', { errors }); 
      }

      // Make sure user does not already exist
      const user = await User.findOne({ username })
      if(user) {
        throw new UserInputError('Username is already exist', {
          errors: { username: 'This username is already exist' }
        })
      }

      // Hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        created: new Date().toISOString()
      })

      const result = await newUser.save();

      const token = jsonWebToken.sign({
        id: result.id,
        email: result.email,
        username: result.username,
      }, SECRET_KEY, { expiresIn: '1h' });

      return {
        ...result._doc,
        id: result._id,
        token
      }
    }
  }
}