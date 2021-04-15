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
          control: isURL,
          options: {
            require_host: false,
            allow_underscores: true,
            allow_protocol_relative_urls: true,
          },
          value: image.path,
          errorMessage: 'Resim yolu url formatında olmalı',
        },
      ],
      detailedControl,
    );
  }
}
