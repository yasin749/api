/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./categoryConstants');

/* Response */
const response = require('../../common/response/response');

/* Utils */
const {
  resolve,
  resolveWithChain,
} = require('../../common/promise/promiseUtils');

module.exports = {
  categories: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const categories = await resolve(database.models.Category.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    }));

    if (categories.length) {
      response.ok(res, categories);
    } else {
      response.error(res);
    }
  },
  categoryDetail: async function (req, res) {
    const categoryId = parseInt(req.params.categoryId);

    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    await resolve(database.models.Category.findOne({
      where: {id: categoryId},
      include: {
        model: database.models.Product,
        as: 'products',
        required: false,
        offset: offset,
        limit: CONSTANTS.PER_PAGE,
      }
    })).then(category => {
      if (!category) {
        throw new Error();
      }
      response.ok(res, category);
    }).catch(() => {
      response.error(res);
    });
  },
  addCategory: async function (req, res) {
    const category = req.body;

    await resolveWithChain(database.models.Category.create(category).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    }));
  },
  editCategory: async function (req, res) {
    const categoryId = parseInt(req.params.categoryId);
    const category = req.body;

    await resolveWithChain(database.models.Category.update(category, {
      where: {id: categoryId},
    }).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    }));
  },
  deleteCategory: async function (req, res) {
    const categoryId = parseInt(req.params.categoryId);

    await resolveWithChain(database.models.Category.update({
      deleted: true,
    }, {
      where: {id: categoryId},
    }).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    }));
  },
};
