'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    static associate(models) {
      models.Evaluation.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: 'userId',
        as: 'user',
      });
      models.Evaluation.belongsTo(models.Product, {
        onDelete: "CASCADE",
        foreignKey: 'productId',
        as: 'product',
      });
      models.Evaluation.belongsTo(models.EvaluationAttribute, {
        onDelete: "CASCADE",
        foreignKey: 'evaluationAttributeId',
        as: 'evaluationAttribute',
      });
    }
  };
  Evaluation.init({
    evaluation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Evaluation',
    defaultScope: {
      where: {
        status: true,
      },
      order: [
        ['id', 'DESC'],
      ],
    },
  });
  return Evaluation;
};
