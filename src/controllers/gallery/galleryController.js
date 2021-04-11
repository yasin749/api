/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./galleryConstants');

/* Response */
const sequelizeResponse = require('../../common/response/sequelize/sequelizeResponse');

/* Utils */
const {imageFullPathUnifyer} = require('./../image/imageUtils');

module.exports = {
  galleries: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const galleries = await database.models.Gallery.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
    });

    if (galleries.length) {
      sequelizeResponse.ok(res, galleries);
    } else {
      sequelizeResponse.error(res);
    }
  },
  galleryDetail: async function (req, res) {
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
          },
          attributes: {
            include: [
              imageFullPathUnifyer(database),
            ],
          },
        },
      ],
    });

    if (gallery) {
      sequelizeResponse.ok(res, gallery);
    } else {
      sequelizeResponse.error(res);
    }
  }
};
