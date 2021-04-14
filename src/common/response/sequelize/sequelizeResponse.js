const STATUS_CODES = require('http-status-codes');

const response = {
  // @todo delete ok function
  ok: (res, json) => {
    res.status(STATUS_CODES.OK).json(json || {
      success: true,
    });
  },
  error: (res, error) => {
    const errorObject = error.errors;
    const responseJson = {
      success: false,
      message: errorObject[0].message,
      value: errorObject[0].value,
    }
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(responseJson);
  }
}

module.exports = response;
