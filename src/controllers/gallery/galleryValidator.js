/* Validators */
const {
  isFull
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  galleryFormValidate: function (gallery, detailedControl) {
    return validateItems([
        {
          control: isFull,
          value: gallery.name,
          errorMessage: 'Galerinin bir ismi olmalı',
        },
      ],
      detailedControl,
    );
  }
}
