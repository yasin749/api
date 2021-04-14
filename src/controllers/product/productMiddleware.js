/* Validators */
const {productFormValidate} = require('./productValidator');

/* Response */
const validationResponse = require('../../common/response/validation/validationResponse');

module.exports = {
  addProduct: function (req, res, next) {
    const product = req.body;
    const productValidate = productFormValidate(product, true);

    if (!productValidate.valid) {
      validationResponse.error(res, productValidate.error);
    } else {
      next();
    }
  },
  editProduct: function (req, res, next) {
    const product = req.body;
    const productValidate = productFormValidate(product);

    if (!productValidate.valid) {
      validationResponse.error(res, productValidate.error);
    } else {
      next();
    }
  },
  deleteProduct: function (req, res, next) {
    next();
  },
}
