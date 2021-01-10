/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./evaluationConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    evaluationGroups: async function (req, res, next) {
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const evaluationGroups = await database.models.EvaluationGroup.findAll({
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
        });

        if (evaluationGroups.length) {
            response.ok(res, evaluationGroups);
        } else {
            response.error(res);
        }
    },
    evaluationGroupDetail: async function (req, res, next) {
        const groupId = parseInt(req.params.groupId);

        const evaluationGroup = await database.models.EvaluationGroup.findOne({
            where: {id: groupId},
            include: [
                {
                    model: database.models.EvaluationAttribute,
                    as: 'evaluationAttributes',
                    through: {
                        attributes: []
                    }
                },
                /*{
                    model: database.models.Product,
                    as: 'products',
                }*/
            ],
        });

        if (evaluationGroup) {
            response.ok(res, evaluationGroup);
        } else {
            response.error(res);
        }
    },

    evaluations: async function (req, res, next) {
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const evaluations = await database.models.Evaluation.findAll({
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
        });

        if (evaluations.length) {
            response.ok(res, evaluations);
        } else {
            response.error(res);
        }
    },
    evaluationsBelongToUser: async function (req, res, next) {
        const userId = parseInt(req.params.userId);

        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const evaluations = await database.models.Evaluation.findAll({
            where: {userId: userId},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            include: [
                {
                    model: database.models.Product,
                    as: 'product',
                },
                {
                    model: database.models.EvaluationAttribute,
                    as: 'evaluationAttribute',
                },
            ],
        });

        if (evaluations.length) {
            response.ok(res, evaluations);
        } else {
            response.error(res);
        }
    },
    evaluationsBelongToProduct: async function (req, res, next) {
        const productId = parseInt(req.params.productId);

        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const evaluations = await database.models.Evaluation.findAll({
            where: {productId: productId},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            include: [
                {
                    model: database.models.User,
                    as: 'user',
                },
                {
                    model: database.models.EvaluationAttribute,
                    as: 'evaluationAttribute',
                },
            ],
        });

        if (evaluations.length) {
            response.ok(res, evaluations);
        } else {
            response.error(res);
        }
    },
    evaluationDetail: async function (req, res, next) {
        const evaluationId = parseInt(req.params.evaluationId);

        const evaluation = await database.models.Evaluation.findOne({
            where: {id: evaluationId},
            include: [
                {
                    model: database.models.User,
                    as: 'user',
                },
                {
                    model: database.models.Product,
                    as: 'product',
                },
                {
                    model: database.models.EvaluationAttribute,
                    as: 'evaluationAttribute',
                },
            ],
        });

        if (evaluation) {
            response.ok(res, evaluation);
        } else {
            response.error(res);
        }
    },
};
