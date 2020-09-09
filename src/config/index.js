const env = process.env.NODE_ENV;

const appConfig = require('./appConfig');
const databaseConfig = require('./databaseConfig');

module.exports = Object.assign({
    [env]: true,
    env: env,
    databaseConfig,
}, appConfig);
