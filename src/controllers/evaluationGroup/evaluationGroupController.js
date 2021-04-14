/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./evaluationGroupConstants');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  evaluationGroups: async function (req, res) {
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
  evaluationGroupDetail: async function (req, res) {
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
      ],
    });

    if (evaluationGroup) {
      response.ok(res, evaluationGroup);
    } else {
      response.error(res);
    }
  },
};
