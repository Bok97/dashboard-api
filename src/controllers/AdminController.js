const AuthService = require('../services/AuthService');
const { invalidateToken } = require('../utils/tokenUtils');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/responseHandlers');

class AdminController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const token = await AuthService.login(username, password);
      sendSuccessResponse(res, { username, token });
    } catch (error) {
      sendErrorResponse(res, error.message, 401);
    }
  }

  static logout(req, res) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return sendErrorResponse(res, 'No token provided', 400);
    }
    invalidateToken(token);
    sendSuccessResponse(res, { message: 'Logout successful' }, 200);
  }
}

module.exports = AdminController;
