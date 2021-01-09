'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      models.Comment.belongsTo(models.Product, {
        onDelete: "CASCADE",
        foreignKey: 'productId',
        as: 'product',
      });
      models.Comment.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: 'userId',
        as: 'user',
      });
    }
  };
  Comment.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    glad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Comment',
    defaultScope: {
      where: {
        status: true,
      },
      order: [
        ['id', 'DESC'],
      ],
    },
  });
  return Comment;
};
