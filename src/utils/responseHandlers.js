function sendSuccessResponse(res, data, statusCode = 200) {
    res.status(statusCode).json({
      success: true,
      data
    });
  }
  
function sendErrorResponse(res, errorMessage, statusCode = 400) {
  res.status(statusCode).json({
    success: false,
    error: errorMessage
  });
}

module.exports = {
  sendSuccessResponse,
  sendErrorResponse
};
  