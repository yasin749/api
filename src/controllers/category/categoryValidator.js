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
          control: isFull,
          value: category.name,
          errorMessage: 'Kategori adı boş olmamalı',
        },
      ],
      detailedControl,
    );
  }
}
