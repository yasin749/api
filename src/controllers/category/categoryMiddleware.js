/* Validators */
const {categoryFormValidate} = require('./categoryValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addCategory: function (req, res, next) {
    const category = req.body;
    const categoryValidate = categoryFormValidate(category, true);

    if (!categoryValidate.valid) {
      response.validationError(res, categoryValidate.error);
    } else {
      next();
    }
  },
  editCategory: function (req, res, next) {
    const category = req.body;
    const categoryValidate = categoryFormValidate(category);

    if (!categoryValidate.valid) {
      response.validationError(res, categoryValidate.error);
    } else {
      next();
    }
  },
  deleteCategory: function (req, res, next) {
    next();
  },
}
