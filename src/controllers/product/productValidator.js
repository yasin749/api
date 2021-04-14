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
          control: isFull,
          value: product.name,
          errorMessage: 'İsim alanı boş geçilemez',
        },
      ],
      detailedControl,
    );
  }
}
