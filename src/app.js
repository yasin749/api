/* Prepare env */
const isProduction = process.argv.includes('--release');
const env = isProduction ? 'production' : (process.env.NODE_ENV || 'local');
process.env.NODE_ENV = env;

/* Include server */
require('./server/server');
