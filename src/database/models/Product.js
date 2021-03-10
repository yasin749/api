'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        onDelete: 'CASCADE',
        foreignKey: 'categoryId',
        as: 'category',
      });
      this.belongsTo(models.Gallery, {
        onDelete: 'CASCADE',
        foreignKey: 'coverGalleryId',
        as: 'coverGallery',
      });
      this.belongsTo(models.Gallery, {
        onDelete: 'CASCADE',
        foreignKey: 'contentGalleryId',
        as: 'contentGallery',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'productId',
        as: 'comments',
      });
      this.belongsTo(models.EvaluationGroup, {
        onDelete: 'CASCADE',
        foreignKey: 'evaluationGroupId',
        as: 'evaluationGroup',
      });
      this.hasMany(models.Evaluation, {
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
  }
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
