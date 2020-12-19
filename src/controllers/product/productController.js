/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./productConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    categoryProducts: async function (req, res, next) {
        const page = parseInt(req.params.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const categoryId = parseInt(req.params.categoryId) || 1;

        const products = await database.models.Product.findAll({
            where: {status: 1, categoryId: categoryId},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            order: [
                ['sort', 'DESC'],
                ['id', 'DESC'],
            ],
        });

        if (products.length) {
            response.ok(res, products);
        } else {
            response.error(res);
        }
    }
};