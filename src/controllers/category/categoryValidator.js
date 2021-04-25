/* Validators */
const {
  isFull,
  isNumeric,
  isBoolean,
} = require('../../common/validation/validation');

/* Utils */
const {
  validateItems,
} = require('../../common/validation/validationUtils');

module.exports = {
  categoryFormValidate: function (category, checkOnlyExisting) {
    return validateItems([
        {
          method: isNumeric,
          key: 'parentId',
          value: category.parentId,
        },
        {
          method: isFull,
          key: 'name',
          value: category.name,
          required: true,
        },
        {
          method: isNumeric,
          key: 'sort',
          value: category.sort,
        },
        {
          method: isBoolean,
          key: 'status',
          value: category.status,
        },
        {
          method: isBoolean,
          key: 'deleted',
          value: category.deleted,
        },
      ],
      checkOnlyExisting,
    );
  }
}
