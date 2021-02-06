/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./imageConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    images: async function (req, res, next) {
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const images = await database.models.Image.findAll({
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
        });

        if (images.length) {
            response.ok(res, images);
        } else {
            response.error(res);
        }
    },
    imageDetail: async function (req, res, next) {
        const imageId = parseInt(req.params.imageId);

        const image = await database.models.Image.findOne({
            where: {id: imageId},
            include: [
                {
                    model: database.models.Gallery,
                    as: 'galleries',
                    through: {
                        attributes: []
                    }
                },
            ],
        });

        if (image) {
            response.ok(res, image);
        } else {
            response.error(res);
        }
    }
};
