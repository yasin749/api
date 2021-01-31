var express = require('express');
var router = express.Router();

// @todo should be auto import
require('../routes/home')(router);
require('../routes/user')(router);
require('../routes/image')(router);
require('../routes/gallery')(router);
require('../routes/category')(router);
require('../routes/product')(router);
require('../routes/comment')(router);
require('../routes/evaluationGroup')(router);
require('../routes/evaluation')(router);

module.exports = router;
