'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EvaluationAttribute extends Model {
    static associate(models) {
      this.belongsToMany(models.EvaluationGroup, {
        through: models.EvaluationGroupRelation,
        foreignKey: 'evaluationAttributeId',
        as: 'evaluationGroups',
      });
      this.hasMany(models.Evaluation, {
        foreignKey: 'evaluationAttributeId',
        as: 'evaluations',
      });
    }
    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          status: true,
        },
        order: [
          ['id', 'DESC'],
        ],
      });
    }
  };
  EvaluationAttribute.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'EvaluationAttribute',
    timestamps: false,
  });
  return EvaluationAttribute;
};
