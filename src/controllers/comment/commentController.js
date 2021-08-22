/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./commentConstants');

/* Response */
const response = require('../../common/response/response');

/* Utils */
const {
  resolve,
  resolveWithChain,
} = require('../../common/promise/promiseUtils');

module.exports = {
  comments: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const comments = await database.models.Comment.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (comments.length) {
      response.ok(res, comments);
    } else {
      response.error(res);
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
      response.ok(res, comments);
    } else {
      response.error(res);
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
      response.ok(res, comments);
    } else {
      response.error(res);
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
      response.ok(res, comment);
    } else {
      response.error(res);
    }
  },
  addComment: async function (req, res) {
    const comment = req.body;

    await database.models.Comment.create(comment).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  editComment: async function (req, res) {
    const commentId = parseInt(req.params.commentId);
    const comment = req.body;
    delete comment.productId;
    delete comment.userId;

    await database.models.Comment.update(comment, {
      where: {id: commentId},
    }).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  deleteComment: async function (req, res) {
    const commentId = parseInt(req.params.commentId);

    await database.models.Comment.update({
      deleted: true,
    }, {
      where: {id: commentId},
    }).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
};
