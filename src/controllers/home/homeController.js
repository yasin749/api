/* Response */
const applicationResponse = require('../../common/response/application/applicationResponse');

module.exports = {
  home: async function (req, res) {
    applicationResponse.ok(res);
  },
  status: async function (req, res) {
    applicationResponse.ok(res);
  }
};
