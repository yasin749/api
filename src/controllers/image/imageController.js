/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./imageConstants');

/* Response */
const sequelizeResponse = require('../../common/response/sequelize/sequelizeResponse');

/* Utils */
const {imageFullPathUnifyer} = require('./imageUtils');

module.exports = {
  images: async function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const images = await database.models.Image.findAll({
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
      attributes: {
        include: [
          imageFullPathUnifyer(database),
        ],
      },
    });

    if (images.length) {
      sequelizeResponse.ok(res, images);
    } else {
      sequelizeResponse.error(res);
    }
  },
  imageDetail: async function (req, res) {
    const imageId = parseInt(req.params.imageId);

    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * CONSTANTS.PER_PAGE;

    const image = await database.models.Image.findOne({
      where: {id: imageId},
      offset: offset,
      limit: CONSTANTS.PER_PAGE,
      attributes: {
        include: [
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
      sequelizeResponse.ok(res, image);
    } else {
      sequelizeResponse.error(res);
    }
  }
};
