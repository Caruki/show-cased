const jwt = require('jsonwebtoken');

function verify(request, response, next) {
  const token = request.header('auth-token');
  if (!token) return response.status(401).send('Access denied!');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    request.user = verified;
    next();
  } catch (error) {
    response.status(401).send('Invalid Token!');
  }
}

module.exports = { verify };
