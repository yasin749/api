'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      models.Category.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'products',
      });
    }
  };
  Category.init({
    parentId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sort: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
  }, {
    sequelize,
    modelName: 'Category',
    defaultScope: {
      where: {
        status: 1,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      order: [
        ['sort', 'DESC'],
        ['id', 'DESC'],
      ],
    },
  });
  return Category;
};
