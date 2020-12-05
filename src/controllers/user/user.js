/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./constants');

/* Response */
var response = require('../../response/response');

module.exports = {
    index: async function (req, res, next) {
        const page = parseInt(req.params.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const users = await database.models.User.findAll({
            attributes: ['id', 'fullName', 'userTypeId'],
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            order: [
                ['id', 'DESC'],
            ],
        });

        if(users.length){
            response.ok(res, users);
        }
        else{
            response.error(res);
        }
    }
};
