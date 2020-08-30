const path = require('path');

const env = process.env.NODE_ENV;

const appConfig = require(path.join(__dirname, 'appConfig', env + '.conf'));
const databaseConfig = require(path.join(__dirname, 'databaseConfig', env + '.conf'));

module.exports = Object.assign({
    [env]: true,
    env: env,
    databaseConfig,
}, appConfig);
