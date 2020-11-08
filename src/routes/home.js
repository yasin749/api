/* Databases */
var database = require("../database");

/* Controllers */
const homeController = require('../controllers/homeController');

module.exports = function (router) {
    router.all('/', homeController.index);
};
