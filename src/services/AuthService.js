const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');
const UserModel = require('../models/UserModel');

class AuthService {
  static async login(username, password) {
    const user = await UserModel.findOne({ where: { username } });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Incorrect password');

    const token = jwt.sign({ username: user.username }, jwtSecret, { expiresIn: '1h' });
    return token;
  }
}

module.exports = AuthService;
