/* Databases */
const database = require('../../database/sequelize');

/* Constants */
const CONSTANTS = require('./galleryConstants');

/* Response */
const response = require('../../common/response/response');

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
      response.ok(res, galleries);
    } else {
      response.error(res);
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
      response.ok(res, gallery);
    } else {
      response.error(res);
    }
  },
  addGallery: async function (req, res) {
    await database.models.Gallery.create({
      ...req.body,
    }).then(gallery => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  editGallery: async function (req, res) {
    const galleryId = parseInt(req.params.galleryId);

    await database.models.Gallery.update({
      ...req.body,
    }, {
      where: {id: galleryId},
    }).then(gallery => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
  deleteGallery: async function (req, res) {
    const galleryId = parseInt(req.params.galleryId);

    await database.models.Gallery.update({
      deleted: true,
    }, {
      where: {id: galleryId},
    }).then(gallery => {
      response.ok(res);
    }).catch(e => {
      response.sequelizeError(res, e);
    });
  },
};
