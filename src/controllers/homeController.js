/* Databases */
var database = require("../database");

module.exports = {
    index: async function (req, res, next) {
        const userType = await database.models.UserType.findAll();
        res.json(userType);
    }
};
