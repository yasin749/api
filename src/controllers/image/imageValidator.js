/* Validators */
const {
  isURL,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  imageFormValidate: function (image, detailedControl) {
    return validateItems([
        {
          method: isURL,
          options: {
            allowRelative: true,
          },
          key: 'path',
          value: image.path,
        },
      ],
      detailedControl,
    );
  }
}
