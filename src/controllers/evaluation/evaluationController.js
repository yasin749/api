/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./evaluationConstants');

/* Response */
const sequelizeResponse = require('../../common/response/sequelize/sequelizeResponse');

module.exports = {
  evaluations: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const evaluations = await database.models.Evaluation.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (evaluations.length) {
      sequelizeResponse.ok(res, evaluations);
    } else {
      sequelizeResponse.error(res);
    }
  },
  evaluationsBelongToUser: async function (req, res) {
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
      sequelizeResponse.ok(res, evaluations);
    } else {
      sequelizeResponse.error(res);
    }
  },
  evaluationsBelongToProduct: async function (req, res) {
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
      sequelizeResponse.ok(res, evaluations);
    } else {
      sequelizeResponse.error(res);
    }
  },
  evaluationDetail: async function (req, res) {
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
      sequelizeResponse.ok(res, evaluation);
    } else {
      sequelizeResponse.error(res);
    }
  },
};
