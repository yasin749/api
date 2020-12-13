/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./categoryConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    index: async function (req, res, next) {
        const page = parseInt(req.params.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const users = await database.models.Category.findAll({
            where: {status: 1},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            order: [
                ['sort', 'DESC'],
                ['id', 'DESC'],
            ],
        });

        if (users.length) {
            response.ok(res, users);
        } else {
            response.error(res);
        }
    }
};
