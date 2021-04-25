/* Validators */
const {productFormValidate} = require('./productValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addProduct: function (req, res, next) {
    const product = req.body;
    const formValidationErrors = productFormValidate(product);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  editProduct: function (req, res, next) {
    const product = req.body;
    const formValidationErrors = productFormValidate(product, true);

    if (formValidationErrors.length) {
      response.validationError(res, formValidationErrors);
    } else {
      next();
    }
  },
  deleteProduct: function (req, res, next) {
    next();
  },
}
