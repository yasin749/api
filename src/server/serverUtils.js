const debug = require('debug')('project:server');

/* Configs */
const config = require('../config');

module.exports = {
  onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof config.port === 'string'
      ? 'Pipe ' + config.port
      : 'Port ' + config.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  },
  onListening(server) {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
}
