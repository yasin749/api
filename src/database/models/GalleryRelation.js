'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GalleryRelation extends Model {
    static associate(models) {}
  };
  GalleryRelation.init({}, {
    sequelize,
    modelName: 'GalleryRelation',
    timestamps: false,
  });
  return GalleryRelation;
};
