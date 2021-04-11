/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./commentConstants');

/* Response */
const sequelizeResponse = require('../../common/response/sequelize/sequelizeResponse');

module.exports = {
  comments: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const comments = await database.models.Comment.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (comments.length) {
      sequelizeResponse.ok(res, comments);
    } else {
      sequelizeResponse.error(res);
    }
  },
  commentsBlongToUser: async function (req, res) {
    const userId = parseInt(req.params.userId);

    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const comments = await database.models.Comment.findAll({
      where: {userId: userId},
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (comments.length) {
      sequelizeResponse.ok(res, comments);
    } else {
      sequelizeResponse.error(res);
    }
  },
  commentsBlongToProduct: async function (req, res) {
    const productId = parseInt(req.params.productId);

    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const comments = await database.models.Comment.findAll({
      where: {productId: productId},
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (comments.length) {
      sequelizeResponse.ok(res, comments);
    } else {
      sequelizeResponse.error(res);
    }
  },
  commentDetail: async function (req, res) {
    const commentId = parseInt(req.params.commentId);

    const comment = await database.models.Comment.findOne({
      where: {id: commentId},
      include: [
        {
          model: database.models.Product,
          as: 'product',
        },
        {
          model: database.models.User,
          as: 'user',
        }
      ]
    });

    if (comment) {
      sequelizeResponse.ok(res, comment);
    } else {
      sequelizeResponse.error(res);
    }
  },
};
