'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    static associate(models) {
      this.belongsToMany(models.Image, {
        through: models.GalleryRelation,
        foreignKey: 'galleryId',
        as: 'images',
      });
    }

    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          deleted: false,
          // status: true,
        },
        attributes: {
          // exclude: ['createdAt', 'updatedAt']
          exclude: ['deleted'],
        },
        order: [
          // ['id', 'DESC'],
        ],
      });
    }
  }

  Gallery.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Gallery',
  });
  return Gallery;
};
