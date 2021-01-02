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
            where: {categoryId: categoryId},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            include: [
                {
                    model: database.models.Category,
                    as: 'category',
                },
                {
                    model: database.models.Comment,
                    as: 'comments',
                    required: false,
                },
                {
                    model: database.models.EvaluationGroup,
                    as: 'evaluationGroup',
                    include: {
                        model: database.models.EvaluationAttribute,
                        as: 'evaluationAttributes',
                        through: {
                            attributes: []
                        }
                    }
                },
            ],
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
