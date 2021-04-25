/* Validators */
const {
  isNumeric,
  isLength,
  isFull,
  isBoolean,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  commentFormValidate: function (comment, checkOnlyExisting) {
    return validateItems([
        {
          method: isNumeric,
          key: 'productId',
          value: comment.productId,
          required: true,
        },
        {
          method: isNumeric,
          key: 'userId',
          value: comment.userId,
          required: true,
        },
        {
          method: isLength,
          options: {
            min: 5,
          },
          key: 'body',
          value: comment.body,
          required: true,
        },
        {
          method: isFull,
          key: 'glad',
          value: comment.glad,
          required: true,
        },
        {
          method: isBoolean,
          key: 'status',
          value: comment.status,
        },
        {
          method: isBoolean,
          key: 'deleted',
          value: comment.deleted,
        },
      ],
      checkOnlyExisting,
    );
  }
}
