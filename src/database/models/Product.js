'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      models.Product.belongsTo(models.Category, {
        onDelete: "CASCADE",
        foreignKey: 'categoryId',
        as: 'category',
      });
      models.Product.hasMany(models.Comment, {
        foreignKey: 'productId',
        as: 'comments',
      });
      models.Product.belongsTo(models.EvaluationGroup, {
        onDelete: "CASCADE",
        foreignKey: 'evaluationGroupId',
        as: 'evaluationGroup',
      });
    }
  };
  Product.init({
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
    modelName: 'Product',
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
  return Product;
};
