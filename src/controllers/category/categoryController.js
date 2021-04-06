/* Databases */
const database = require('../../database');

/* Constants */
const CONSTANTS = require('./categoryConstants');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  categories: async function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const categories = await database.models.Category.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (categories.length) {
      response.ok(res, categories);
    } else {
      response.error(res);
    }
  },
  categoryDetail: async function (req, res, next) {
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
      response.ok(res, category);
    } else {
      response.error(res);
    }
  }
};
