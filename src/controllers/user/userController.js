/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./userConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    index: async function (req, res, next) {
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const users = await database.models.User.findAll({
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            include: [
                {
                    model: database.models.UserType,
                    as: 'userType',
                }
            ],
        });

        if (users.length) {
            response.ok(res, users);
        } else {
            response.error(res);
        }
    },
    userDetail: async function (req, res, next) {
        const userId = parseInt(req.params.userId);

        const user = await database.models.User.findOne({
            where: {id: userId},
            include: [
                {
                    model: database.models.UserType,
                    as: 'userType',
                },
                {
                    model: database.models.Comment,
                    as: 'comments',
                    required: false,
                }
            ],
        });

        if (user) {
            response.ok(res, user);
        } else {
            response.error(res);
        }
    }
};
