/* Response */
const response = require('../../common/response/response');

module.exports = {
  home: async function (req, res) {
    response.ok(res);
  },
  status: async function (req, res) {
    response.ok(res);
  }
};
