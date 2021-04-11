/* Databases */
const database = require('../../database');

/* Constants */
const CONSTANTS = require('./userConstants');

/* Response */
const sequelizeResponse = require('../../common/response/sequelize/sequelizeResponse');

module.exports = {
  users: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const users = await database.models.User.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (users.length) {
      sequelizeResponse.ok(res, users);
    } else {
      sequelizeResponse.error(res);
    }
  },
  userDetail: async function (req, res) {
    const userId = parseInt(req.params.userId);

    const user = await database.models.User.findOne({
      where: {id: userId},
    });

    if (user) {
      sequelizeResponse.ok(res, user);
    } else {
      sequelizeResponse.error(res);
    }
  },

  addUser: async function (req, res) {
    await database.models.User.create({
      ...req.body,
      userTypeId: 2,
    }).then(user => {
      sequelizeResponse.ok(res);
    }).catch(e => {
      sequelizeResponse.error(res, e);
    });
  },
  editUser: async function (req, res) {
    const userId = parseInt(req.params.userId);

    await database.models.User.update({
      ...req.body,
      userTypeId: 2,
    }, {
      where: {id: userId},
    }).then(user => {
      sequelizeResponse.ok(res);
    }).catch(e => {
      sequelizeResponse.error(res, e);
    });
  },
  deleteUser: async function (req, res) {
    const userId = parseInt(req.params.userId);

    await database.models.User.update({
      deleted: true,
    }, {
      where: {id: userId},
    }).then(user => {
      sequelizeResponse.ok(res);
    }).catch(e => {
      sequelizeResponse.error(res, e);
    });
  },

};
