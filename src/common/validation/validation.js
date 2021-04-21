const validator = require('validator');

function isEmpty(string) {
  string = validator.trim(string);
  return validator.isEmpty(string);
}

function isFull(string) {
  string = validator.trim(string);
  return !validator.isEmpty(string);
}

function isAlpha(string) {
  return validator.isAlpha(string);
}

function isAlphanumeric(string) {
  return validator.isAlphanumeric(string);
}

function isNumeric(string) {
  return validator.isAlphanumeric(string);
}

function isBoolean(string) {
  return validator.isBoolean(string);
}

function isLength(string, options) {
  const {
    min,
    max,
  } = options;

  const handledOptions = {
    min,
    max,
  };
  string = validator.trim(string);
  return validator.isLength(string, handledOptions);
}

function isEmail(string) {
  return validator.isEmail(string);
}

function isURL(string, options) {
  const {
    allowRelative
  } = options;

  const handledOptions = {
    ...(allowRelative && {
      require_host: false,
      allow_underscores: true,
      allow_protocol_relative_urls: true,
    }),
  };
  return validator.isURL(string, handledOptions);
}

module.exports = {
  isEmpty,
  isFull,
  isAlpha,
  isAlphanumeric,
  isNumeric,
  isBoolean,
  isLength,
  isEmail,
  isURL,
}
