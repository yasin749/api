var express = require('express');
var router = express.Router();

// @todo should be auto import
require('../routes/home')(router);
require('../routes/user')(router);
require('../routes/category')(router);

module.exports = router;
