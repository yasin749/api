/* Validators */
const {productFormValidate} = require('./productValidator');

/* Response */
const response = require('../../common/response/response');

module.exports = {
  addProduct: function (req, res, next) {
    const product = req.body;
    const productValidate = productFormValidate(product, true);

    if (!productValidate.valid) {
      response.validationError(res, productValidate.error);
    } else {
      next();
    }
  },
  editProduct: function (req, res, next) {
    const product = req.body;
    const productValidate = productFormValidate(product);

    if (!productValidate.valid) {
      response.validationError(res, productValidate.error);
    } else {
      next();
    }
  },
  deleteProduct: function (req, res, next) {
    next();
  },
}
