var express = require('express');
var path = require('path');
var pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

/* App */
var app = require('../../express/express');

/* Config */
var config = require('../../../config');

/* Constants */
var swaggerConstants = require('./swaggerConstants');

if (!config.production) {
    app.use(swaggerConstants.SWAGGER_PATH, express.static(path.join(__dirname, './static')));
    app.use(swaggerConstants.SWAGGER_PATH, express.static(pathToSwaggerUi));
}
