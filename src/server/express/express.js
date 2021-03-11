const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/* Constants */
const serverConstants = require('../serverConstants');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

/* Static */
app.use(express.static(path.join(__dirname, '../../../public')));

/* Routes */
app.use(serverConstants.API_PATH.V1, require('../../routes'));

module.exports = app;
