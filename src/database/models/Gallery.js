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
          status: true,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        order: [
          ['id', 'DESC'],
        ],
      });
    }
  };
  Gallery.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Gallery',
  });
  return Gallery;
};
