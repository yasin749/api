function generateValidationError(item) {
  const {
    method,
    options,
    key,
    value,
  } = item;

  return {
    method: method.name,
    options,
    key,
    value,
  };
}

function validate(item) {
  const {
    method,
    options,
    value,
  } = item;

  return method(value, options);
}

function validateItems(toBeVerifyItems, checkOnlyExisting) {
  const errors = [];
  for (let i = 0; i < toBeVerifyItems.length; i++) {
    const item = toBeVerifyItems[i];
    const {value, required} = item;

    const existValue = value !== undefined;
    const checkRequired = required && !checkOnlyExisting;
    const isValidatable = existValue || checkRequired;

    if (isValidatable && !validate(item)) {
      errors.push(generateValidationError(item));
    }
  }
  return errors;
}

module.exports = {
  generateValidationError,
  validate,
  validateItems,
};
