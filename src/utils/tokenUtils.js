const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

let invalidatedTokens = [];

exports.generateToken = (user) => {
  return jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
};

exports.invalidateToken = (token) => {
  const decoded = jwt.verify(token, jwtSecret);
  invalidatedTokens.push({ token, expiry: decoded.exp });
};

exports.isTokenInvalidated = (token) => {
  return invalidatedTokens.some((invalidToken) => invalidToken.token === token);
};
