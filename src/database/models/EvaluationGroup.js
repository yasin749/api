'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EvaluationGroup extends Model {
    static associate(models) {
      models.EvaluationGroup.belongsToMany(models.EvaluationAttribute, {
        through: models.EvaluationGroupRelation,
        foreignKey: 'evaluationGroupId',
        as: 'evaluationAttributes',
      });
      models.EvaluationGroup.hasMany(models.Product, {
        foreignKey: 'evaluationGroupId',
        as: 'products',
      });
    }
  };
  EvaluationGroup.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    sequelize,
    modelName: 'EvaluationGroup',
    timestamps: false,
    defaultScope: {
      where: {
        status: 1,
      },
      order: [
        ['id', 'DESC'],
      ],
    },
  });
  return EvaluationGroup;
};
