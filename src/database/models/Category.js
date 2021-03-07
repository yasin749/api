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
    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          status: true,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        order: [
          ['sort', 'DESC'],
          ['id', 'DESC'],
        ],
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
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
