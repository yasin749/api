/* Validators */
const {
  isFull,
  isBoolean,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  galleryFormValidate: function (gallery, checkOnlyExisting) {
    return validateItems([
        {
          method: isFull,
          key: 'name',
          value: gallery.name,
          required: true,
        },
        {
          method: isBoolean,
          key: 'status',
          value: gallery.status,
        },
        {
          method: isBoolean,
          key: 'deleted',
          value: gallery.deleted,
        },
      ],
      checkOnlyExisting,
    );
  }
}
