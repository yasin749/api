/* Databases */
const database = require('../../database');

/* Constants */
const CONSTANTS = require('./userConstants');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  users: async function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const users = await database.models.User.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (users.length) {
      response.ok(res, users);
    } else {
      response.error(res);
    }
  },
  userDetail: async function (req, res, next) {
    const userId = parseInt(req.params.userId);

    const user = await database.models.User.findOne({
      where: {id: userId},
    });

    if (user) {
      response.ok(res, user);
    } else {
      response.error(res);
    }
  },

  addUser: async function (req, res, next) {
    //@todo userTypeId
    await database.models.User.create({
      ...req.body,
      userTypeId: 2,
    }).then(user => {
      // @todo should be sequelizeResponse.ok(), sequelizeResponse.error()
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  editUser: async function (req, res, next) {
    const userId = parseInt(req.params.userId);

    await database.models.User.update({
      ...req.body,
      userTypeId: 2,
    }, {
      where: {id: userId},
    }).then(user => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  deleteUser: async function (req, res, next) {
    const userId = parseInt(req.params.userId);

    // @todo should be soft delete
    await database.models.User.destroy({
      where: {id: userId},
    }).then(user => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },

};
