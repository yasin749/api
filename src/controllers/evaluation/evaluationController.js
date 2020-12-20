/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./evaluationConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    evaluationGroups: async function (req, res, next) {
        const page = parseInt(req.params.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const evaluationGroups = await database.models.EvaluationGroup.findAll({
            where: {status: 1, id:1},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            order: [
                ['id', 'DESC'],
            ],
        });

        if (evaluationGroups.length) {
            response.ok(res, evaluationGroups);
        } else {
            response.error(res);
        }
    }
};
