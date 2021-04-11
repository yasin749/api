/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./categoryConstants');

/* Response */
const sequelizeResponse = require('../../common/response/sequelize/sequelizeResponse');

module.exports = {
  categories: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const categories = await database.models.Category.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (categories.length) {
      sequelizeResponse.ok(res, categories);
    } else {
      sequelizeResponse.error(res);
    }
  },
  categoryDetail: async function (req, res) {
    const categoryId = parseInt(req.params.categoryId);

    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const category = await database.models.Category.findOne({
      where: {id: categoryId},
      include: {
        model: database.models.Product,
        as: 'products',
        required: false,
        offset: offset,
        limit: CONSTANTS.PER_PAGE,
      }
    });

    if (category) {
      sequelizeResponse.ok(res, category);
    } else {
      sequelizeResponse.error(res);
    }
  },
  addCategory: async function (req, res) {
    await database.models.Category.create({
      ...req.body,
    }).then(category => {
      sequelizeResponse.ok(res);
    }).catch(e => {
      sequelizeResponse.error(res, e);
    });
  },
  editCategory: async function (req, res) {
    const categoryId = parseInt(req.params.categoryId);

    await database.models.Category.update({
      ...req.body,
    }, {
      where: {id: categoryId},
    }).then(category => {
      sequelizeResponse.ok(res);
    }).catch(e => {
      sequelizeResponse.error(res, e);
    });
  },
  deleteCategory: async function (req, res) {
    const categoryId = parseInt(req.params.categoryId);

    await database.models.Category.update({
      deleted: true,
    }, {
      where: {id: categoryId},
    }).then(category => {
      sequelizeResponse.ok(res);
    }).catch(e => {
      sequelizeResponse.error(res, e);
    });
  },
};
