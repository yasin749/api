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
  string = validator.trim(string);
  return validator.isLength(string, options);
}

function isEmail(string) {
  return validator.isEmail(string);
}

function isURL(string, options) {
  return validator.isURL(string, options);
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
