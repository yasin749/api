/* Databases */
var database = require("../../database");

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
                        attributes: {
                            include: [
                                [
                                    database.literal(
                                        `COUNT(case "evaluationGroup->evaluationAttributes->evaluations"."evaluation" when 1 then 1 else null end)`
                                    ),
                                    'upVote'
                                ],
                                [
                                    database.literal(
                                        `COUNT(case "evaluationGroup->evaluationAttributes->evaluations"."evaluation" when 0 then 1 else null end)`
                                    ),
                                    'downVote'
                                ],
                            ]
                        },
                        through: {
                            attributes: []
                        },
                        include: {
                            model: database.models.Evaluation,
                            as: 'evaluations',
                            where: {productId: productId},
                            attributes: [],
                            required: false,
                        },
                    }
                },
            ],
            group: [
                'Product.id',
                'category.id',
                'evaluationGroup.id',
                'evaluationGroup->evaluationAttributes.id'
            ],
        });

        if (product) {
            response.ok(res, product);
        } else {
            response.error(res);
        }
    },
};
