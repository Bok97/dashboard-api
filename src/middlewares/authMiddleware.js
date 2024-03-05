const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');
const { isTokenInvalidated } = require('../utils/tokenUtils');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  if (isTokenInvalidated(token)) return res.status(401).json({ message: 'Token has been invalidated' });

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate token' });

    req.userId = decoded.userId;
    next();
  });
};

module.exports = authenticate;
