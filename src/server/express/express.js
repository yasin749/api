var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Constants */
var serverConstants = require('../serverConstants');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

/* Static */
app.use(express.static(path.join(__dirname, '../../../public')));

/* Routes */
app.use(serverConstants.API_PATH.V1, require('../../routes'));

module.exports = app;
