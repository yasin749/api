const STATUS_CODES = require('http-status-codes');

const DEFAULT_SUCCESS_RESPONSE = {
  success: true,
};

const DEFAULT_ERROR_RESPONSE = {
  success: false,
};

const response = {
  ok: (res, json) => {
    res.status(STATUS_CODES.OK).json(json || DEFAULT_SUCCESS_RESPONSE);
  },
  error: (res, json) => {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(json || DEFAULT_ERROR_RESPONSE);
  },
  validationError: (res, json) => {
    console.error('validationError ', json);
    let responseJson;
    try {
      responseJson = {
        success: false,
        message: json.message,
        value: json.value,
      }
    } catch (e) {
      // empty
    }
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(responseJson || DEFAULT_ERROR_RESPONSE);
  },
  sequelizeError: (res, error) => {
    console.error('sequelizeError ', error);
    let responseJson;
    try {
      const errorObject = error.errors;
      responseJson = {
        success: false,
        message: errorObject[0].message,
        value: errorObject[0].value,
      }
    } catch (e) {
      // empty
    }
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(responseJson || DEFAULT_ERROR_RESPONSE);
  }
}

module.exports = response;
