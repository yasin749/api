/* Models */
var models = require("../database/models");

/* Controllers */
const homeController = require('../controllers/homeController');

module.exports = function (router) {
    router.all('/', homeController.index);
};
