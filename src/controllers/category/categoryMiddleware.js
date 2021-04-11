/* Validators */
const {categoryFormValidate} = require('./categoryValidator');

/* Response */
const validationResponse = require('../../common/response/validation/validationResponse');

module.exports = {
  addCategory: function (req, res, next) {
    const category = req.body;
    const categoryValidate = categoryFormValidate(category, true);

    if (!categoryValidate.valid) {
      validationResponse.error(res, categoryValidate.error);
    } else {
      next();
    }
  },
  editCategory: function (req, res, next) {
    const category = req.body;
    const categoryValidate = categoryFormValidate(category);

    if (!categoryValidate.valid) {
      validationResponse.error(res, categoryValidate.error);
    } else {
      next();
    }
  },
  deleteCategory: function (req, res, next) {
    next();
  },
}
