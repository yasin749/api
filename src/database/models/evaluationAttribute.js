'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EvaluationAttribute extends Model {
    static associate(models) {
      models.EvaluationAttribute.belongsToMany(models.EvaluationGroup, {
        through: 'EvaluationGroupRelations',
      });
    }
  };
  EvaluationAttribute.init({
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
    modelName: 'EvaluationAttribute',
    timestamps: false,
  });
  return EvaluationAttribute;
};
