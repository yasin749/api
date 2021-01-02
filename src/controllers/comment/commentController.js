/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./commentConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    commentProducts: async function (req, res, next) {
        const page = parseInt(req.params.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const productId = parseInt(req.params.productId) || 1;

        const comments = await database.models.Comment.findAll({
            where: {productId: productId},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            order: [
                ['id', 'DESC'],
            ],
        });

        if (comments.length) {
            response.ok(res, comments);
        } else {
            response.error(res);
        }
    }
};
