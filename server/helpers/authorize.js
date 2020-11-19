const { AuthenticationError } = require('apollo-server');
const jsonWebToken = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

module.exports = {
  authorize: (context) => {
    const authHeader = context.req.headers.authorization
    if(authHeader) {
      const token = authHeader.split('Bearer ')[1]
      if(token) {
        try {
          const user = jsonWebToken.verify(token, SECRET_KEY)
          return user
        } catch(error) {
          throw new AuthenticationError('Invalid/Expired token')
        }
      }
      throw new AuthenticationError('Authentication token must be \'Bearer [token]')
    }
    throw new AuthenticationError('Authorization header must be provided')
  }
}