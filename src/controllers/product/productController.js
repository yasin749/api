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
                                    database.literal(`COUNT(case "evaluationGroup->evaluationAttributes->evaluations"."evaluation" when 1 then 1 else null end)`),
                                    'upVote'
                                ],
                                [
                                    database.literal(`COUNT(case "evaluationGroup->evaluationAttributes->evaluations"."evaluation" when 0 then 1 else null end)`),
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
            group: ['Product.id', 'category.id', 'evaluationGroup.id', 'evaluationGroup->evaluationAttributes.id']
        });

        if (product) {
            response.ok(res, product);
        } else {
            response.error(res);
        }
    },

    // @todo delete this
    testFunc: async function (req, res, next) {
        const groupId = 1;
        const productId = 1;

        const product = await database.models.EvaluationGroup.findOne({
            where: {id: groupId},
            include: {
                model: database.models.EvaluationAttribute,
                as: 'evaluationAttributes',
                attributes: {
                    include: [
                        /*[
                            database.fn(
                                "COUNT",
                                database.col("evaluationAttributes.evaluations.evaluation")
                            ),
                            "evu"
                        ],*/
                        [
                            database.literal(`COUNT(case "evaluationAttributes->evaluations"."evaluation" when 1 then 1 else null end)`),
                            'upVote'
                        ],
                        [
                            database.literal(`COUNT(case "evaluationAttributes->evaluations"."evaluation" when 0 then 1 else null end)`),
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
            },
            group: ['EvaluationGroup.id', 'evaluationAttributes.id']
        });

        if (product) {
            response.ok(res, product);
        } else {
            response.error(res);
        }
    }
};
