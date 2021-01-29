'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    static associate(models) {

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
  return Gallery;
};
