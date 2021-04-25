/* Validators */
const {categoryFormValidate} = require('./categoryValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addCategory: function (req, res, next) {
    const category = req.body;
    const formValidationErrors = categoryFormValidate(category);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  editCategory: function (req, res, next) {
    const category = req.body;
    const formValidationErrors = categoryFormValidate(category, true);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  deleteCategory: function (req, res, next) {
    next();
  },
}
