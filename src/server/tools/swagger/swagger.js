const express = require('express');
const path = require('path');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

/* App */
const app = require('../../express/express');

/* Config */
const config = require('../../../config');

/* Constants */
const swaggerConstants = require('./swaggerConstants');

if (!config.production) {
  app.use(swaggerConstants.SWAGGER_PATH, express.static(path.join(__dirname, './static')));
  app.use(swaggerConstants.SWAGGER_PATH, express.static(pathToSwaggerUi));
}
