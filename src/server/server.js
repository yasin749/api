var http = require('http');

/* App */
var app = require('./express/express');

/* Utils */
const {
    onError,
    onListening
} = require('./serverUtils');

/* Config */
const config = require('../config');

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(config.port);

// Listen server events
server.on('error', function (error) {
    onError(error);
});
server.on('listening', function () {
    onListening(server);
});
