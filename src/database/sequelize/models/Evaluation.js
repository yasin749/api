'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
        as: 'user',
      });
      this.belongsTo(models.Product, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
        as: 'product',
      });
      this.belongsTo(models.EvaluationAttribute, {
        onDelete: 'CASCADE',
        foreignKey: 'evaluationAttributeId',
        as: 'evaluationAttribute',
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

  Evaluation.init({
    evaluation: {
      type: DataTypes.INTEGER,
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
    modelName: 'Evaluation',
  });
  return Evaluation;
};
