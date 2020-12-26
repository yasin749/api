'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EvaluationGroup extends Model {
    static associate(models) {
      models.EvaluationGroup.belongsToMany(models.EvaluationAttribute, {
        timestamps: false,
        through: 'EvaluationGroupRelations',
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
  });
  return EvaluationGroup;
};
