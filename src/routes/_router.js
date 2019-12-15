var express = require('express');
var router = express.Router();

require('./home')(router);

module.exports = router;
