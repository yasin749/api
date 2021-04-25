/* Validators */
const {
  isURL,
  isBoolean,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  imageFormValidate: function (image, checkOnlyExisting) {
    return validateItems([
        {
          method: isURL,
          options: {
            allowRelative: true,
          },
          key: 'path',
          value: image.path,
          required: true,
        },
        {
          method: isBoolean,
          key: 'status',
          value: image.status,
        },
        {
          method: isBoolean,
          key: 'deleted',
          value: image.deleted,
        },
      ],
      checkOnlyExisting,
    );
  }
}
