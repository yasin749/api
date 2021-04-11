const STATUS_CODES = require('http-status-codes');

const applicationResponse = {
  ok: (res, json) => {
    res.status(STATUS_CODES.OK).json(json || {
      success: true,
    });
  },
  error: (res, json) => {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(json || {
      success: false,
    });
  },
}

module.exports = applicationResponse;
