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
          method: isFull,
          key: 'name',
          value: gallery.name,
        },
      ],
      detailedControl,
    );
  }
}
