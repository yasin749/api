var express = require('express');
var router = express.Router();

require('../routes/home')(router);

module.exports = router;
