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
      models.Product.belongsTo(models.Gallery, {
        onDelete: "CASCADE",
        foreignKey: 'coverGalleryId',
        as: 'coverGallery',
      });
      models.Product.belongsTo(models.Gallery, {
        onDelete: "CASCADE",
        foreignKey: 'contentGalleryId',
        as: 'contentGallery',
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
      models.Product.hasMany(models.Evaluation, {
        foreignKey: 'productId',
        as: 'evaluations',
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
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
