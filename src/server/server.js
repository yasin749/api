const http = require('http');

/* App */
const app = require('./express/express');

/* Swagger */
require('./tools/swagger/swagger');

/* Utils */
const {
  onError,
  onListening
} = require('./serverUtils');

/* Config */
const config = require('../config');

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(config.port);

// Listen server events
server.on('error', function (error) {
  onError(error);
});
server.on('listening', function () {
  onListening(server);
});
