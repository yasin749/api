/* Prepare env */
// @todo refactor release key
const isProduction = process.env.npm_config_release;
const env = isProduction ? 'production' : (process.env.NODE_ENV || 'local');
process.env.NODE_ENV = env;

/* Include server */
require('./server/server');
