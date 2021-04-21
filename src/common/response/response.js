const STATUS_CODES = require('http-status-codes');

const DEFAULT_SUCCESS_RESPONSE = {
  success: true,
};

const DEFAULT_ERROR_RESPONSE = {
  success: false,
};

const response = {
  ok: (res, json) => {
    const responseJson = {
      ...DEFAULT_SUCCESS_RESPONSE,
      result: json,
    };
    res.status(STATUS_CODES.OK).json(responseJson);
  },
  error: (res, json) => {
    console.error('error ', json);

    const responseJson = {
      ...DEFAULT_ERROR_RESPONSE,
      errors: json,
    };
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(responseJson);
  },
  validationError: (res, json) => {
    console.error('validationError ', json);

    let responseJson;
    try {
      const errors = json.map(error => {
        const {
          method,
          options,
          key,
          value,
        } = error;
        return {
          method: method,
          options: options,
          key: key,
          value: value || null,
        }
      });

      responseJson = {
        ...DEFAULT_ERROR_RESPONSE,
        errors,
      }
    } catch (e) {
      // empty
    }
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(responseJson || DEFAULT_ERROR_RESPONSE);
  },
  sequelizeError: (res, json) => {
    console.error('sequelizeError ', json);

    let responseJson;
    try {
      const errors = json.errors.map(error => {
        const {
          validatorKey,
          path,
          value,
        } = error;
        return {
          method: validatorKey,
          key: path,
          value: value || null,
        }
      });

      responseJson = {
        ...DEFAULT_ERROR_RESPONSE,
        errors,
      }
    } catch (e) {
      // empty
    }
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(responseJson || DEFAULT_ERROR_RESPONSE);
  }
}

module.exports = response;
