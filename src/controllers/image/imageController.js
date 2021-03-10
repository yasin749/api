/* Databases */
var database = require('../../database');

/* Constants */
var CONSTANTS = require('./imageConstants');

/* Response */
var response = require('../../response/response');

/* Utils */
var {imageFullPathUnifyer} = require('./imageUtils');

module.exports = {
    images: async function (req, res, next) {
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const images = await database.models.Image.findAll({
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            attributes: {
                include:[
                    imageFullPathUnifyer(database),
                ],
            },
        });

        if (images.length) {
            response.ok(res, images);
        } else {
            response.error(res);
        }
    },
    imageDetail: async function (req, res, next) {
        const imageId = parseInt(req.params.imageId);

        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * CONSTANTS.PER_PAGE;

        const image = await database.models.Image.findOne({
            where: {id: imageId},
            offset: offset,
            limit: CONSTANTS.PER_PAGE,
            attributes: {
                include:[
                    imageFullPathUnifyer(database),
                ],
            },
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
