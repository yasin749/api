/* Validators */
const {
  isFull,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  productFormValidate: function (product, detailedControl) {
    return validateItems([
        {
          method: isFull,
          key: 'name',
          value: product.name,
        },
      ],
      detailedControl,
    );
  }
}
