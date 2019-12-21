// const models = require('../database/models');
const homeController = require('../controllers/homeController');

module.exports = function (router) {
    router.get('/', homeController.index);
};