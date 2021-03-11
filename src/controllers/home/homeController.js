/* Response */
const response = require('../../response/response');

module.exports = {
  home: async function (req, res, next) {
    response.ok(res);
  },
  status: async function (req, res, next) {
    response.ok(res);
  }
};
