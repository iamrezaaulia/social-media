const bcrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const User = require('../../models/User');
const { SECRET_KEY } = require('../../config');
const { validateRegisterInput, validateLoginInput } = require('../../helpers/validated');

function generateToken(user) {
  return jsonWebToken.sign({
    id: user.id,
    email: user.email,
    username: user.username,
  }, SECRET_KEY, { expiresIn: '1h' });
}

module.exports = {
  Mutation: {
    async login(_, { loginInput: { username, password }}) {
      const { errors, valid } = validateLoginInput(username, password);
      if(!valid) {
        throw new UserInputError('Errors', { errors }); 
      }
      
      const user = await User.findOne({ username });
      if(!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }
  
      const matchPasswordWithDB = await bcrypt.compare(password, user.password);
      if(!matchPasswordWithDB) {
        errors.general = 'Wrong credential';
        throw new UserInputError('Wrong credential', { errors });
      }
  
      const token = generateToken(user);
  
      return {
        ...user._doc,
        id: user._id,
        token
      }
    },

    async register(
      _, 
      {
        registerInput: {
          username,
          email,
          password,
          confirmPassword
        }
      }
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
        created: new Date().toUTCString();
      })

      const result = await newUser.save();

      const token = generateToken(result);

      return {
        ...result._doc,
        id: result._id,
        token
      }
    }
  }
}