/* Response */
var response = require('../../response/response');

module.exports = {
    index: async function (req, res, next) {
        response.ok(res);
    }
};
