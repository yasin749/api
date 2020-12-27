/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./userConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    index: async function (req, res, next) {
        const page = parseInt(req.params.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const users = await database.models.User.findAll({
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            include: {
                model: database.models.UserType,
            },
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
