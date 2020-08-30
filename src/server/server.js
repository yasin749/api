var express = require('./express/express');
var http = require('http');

/* Utils */
const {
    onError,
    onListening
} = require('./serverUtils');

/* Config */
const config = require('../config');

/**
 * Set app port
 */
express.set('port', config.port);

/**
 * Create HTTP server.
 */
var server = http.createServer(express);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(config.port);

/**
 * Listen server events
 */
server.on('error', function () {
    onError();
});
server.on('listening', function () {
    onListening(server);
});
