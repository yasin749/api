/* Validators */
const {
  isFull,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  categoryFormValidate: function (category, detailedControl) {
    return validateItems([
        {
          method: isFull,
          key: 'name',
          value: category.name,
        },
      ],
      detailedControl,
    );
  }
}
