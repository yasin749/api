const STATUS_CODES = require('http-status-codes');

const response = {
  error: (res, json) => {
    const responseJson = {
      success: false,
      message: json.message,
      value: json.value,
    }
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(responseJson);
  },
}

module.exports = response;
