/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./userConstants');

/* Response */
const response = require('../../common/response/response');

/* Utils */
const {
  resolve,
  resolveWithChain,
} = require('../../common/promise/promiseUtils');

module.exports = {
  users: async function (req, res) {
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
  userDetail: async function (req, res) {
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
  addUser: async function (req, res) {
    const user = {
      ...req.body,
      userTypeId: 2,
    };

    await database.models.User.create(user).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  editUser: async function (req, res) {
    const userId = parseInt(req.params.userId);
    const user = {
      ...req.body,
      userTypeId: 2,
    };

    await database.models.User.update(user, {
      where: {id: userId},
    }).then(user => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  deleteUser: async function (req, res) {
    const userId = parseInt(req.params.userId);

    await database.models.User.update({
      deleted: true,
    }, {
      where: {id: userId},
    }).then(user => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
};
