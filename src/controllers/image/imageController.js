/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./imageConstants');

/* Response */
const response = require('../../common/response/response');

/* Utils */
const {imageFullPathUnifyer} = require('./imageUtils');
const {
  resolve,
  resolveWithChain,
} = require('../../common/promise/promiseUtils');

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
      response.ok(res, images);
    } else {
      response.error(res);
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
      response.ok(res, image);
    } else {
      response.error(res);
    }
  },
  addImage: async function (req, res) {
    const image = req.body;

    await database.models.Image.create(image).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  editImage: async function (req, res) {
    const imageId = parseInt(req.params.imageId);
    const image = req.body;
    delete image.path;

    await database.models.Image.update(image, {
      where: {id: imageId},
    }).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  deleteImage: async function (req, res) {
    const imageId = parseInt(req.params.imageId);

    await database.models.Image.update({
      deleted: true,
    }, {
      where: {id: imageId},
    }).then(() => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
};
