/* Databases */
const database = require('../../database');

/* Constants */
const CONSTANTS = require('./evaluationGroupConstants');

/* Response */
const sequelizeResponse = require('../../common/response/sequelize/sequelizeResponse');

module.exports = {
  evaluationGroups: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const evaluationGroups = await database.models.EvaluationGroup.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (evaluationGroups.length) {
      sequelizeResponse.ok(res, evaluationGroups);
    } else {
      sequelizeResponse.error(res);
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
      sequelizeResponse.ok(res, evaluationGroup);
    } else {
      sequelizeResponse.error(res);
    }
  },
};
