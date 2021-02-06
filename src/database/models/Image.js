'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      models.Image.belongsToMany(models.Gallery, {
        through: models.GalleryRelation,
        foreignKey: 'imageId',
        as: 'galleries',
      });
    }
  };
  Image.init({
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Image',
    defaultScope: {
      where: {
        status: true,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      order: [
        ['id', 'DESC'],
      ],
    },
  });
  return Image;
};
