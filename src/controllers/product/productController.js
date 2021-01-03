/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./productConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    productDetail: async function (req, res, next) {
        const productId = parseInt(req.params.productId);

        const product = await database.models.Product.findOne({
            where: {id: productId},
            include: [
                {
                    model: database.models.Category,
                    as: 'category',
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
            ]
        });

        if (product) {
            response.ok(res, product);
        } else {
            response.error(res);
        }
    }
};
