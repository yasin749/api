'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.Product, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
        as: 'product',
      });
      this.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
        as: 'user',
      });
    }

    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          deleted: false,
          // status: true,
        },
        attributes: {
          exclude: ['deleted'],
        },
        order: [
          // ['id', 'DESC'],
        ],
      });
    }
  }

  Comment.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    glad: {
      type: DataTypes.BOOLEAN,
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
    modelName: 'Comment',
  });
  return Comment;
};
