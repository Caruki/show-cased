const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function verifyToken(request, response, next) {
  const token = request.cookies.access_token;

  if (!token) return response.status(401).send('Access denied!');

  try {
    const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    request.user = user;
    next();
  } catch (error) {
    response.status(400).send('Invalid token');
  }
};
