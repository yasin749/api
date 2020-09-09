const path = require('path');

const env = process.env.NODE_ENV;

module.exports = require(path.join(__dirname, './', env + '.conf'));
