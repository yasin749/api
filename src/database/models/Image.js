'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      this.belongsToMany(models.Gallery, {
        through: models.GalleryRelation,
        foreignKey: 'imageId',
        as: 'galleries',
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

  Image.init({
    path: {
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
    modelName: 'Image',
  });
  return Image;
};
