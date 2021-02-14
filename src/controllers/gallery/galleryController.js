/* Databases */
var database = require("../../database");

/* Constants */
var CONSTANTS = require('./galleryConstants');

/* Response */
var response = require('../../response/response');

module.exports = {
    galleries: async function (req, res, next) {
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const galleries = await database.models.Gallery.findAll({
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
        });

        if (galleries.length) {
            response.ok(res, galleries);
        } else {
            response.error(res);
        }
    },
    galleryDetail: async function (req, res, next) {
        const galleryId = parseInt(req.params.galleryId);

        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const gallery = await database.models.Gallery.findOne({
            where: {id: galleryId},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            include: [
                {
                    model: database.models.Image,
                    as: 'images',
                    through: {
                        attributes: []
                    }
                },
            ],
        });

        if (gallery) {
            response.ok(res, gallery);
        } else {
            response.error(res);
        }
    }
};
