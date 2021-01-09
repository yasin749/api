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

        const evaluationGroups = await database.models.EvaluationGroup.findAll({
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

        if (evaluationGroups.length) {
            response.ok(res, evaluationGroups);
        } else {
            response.error(res);
        }
    }
};
