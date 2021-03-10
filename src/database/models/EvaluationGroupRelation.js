'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EvaluationGroupRelation extends Model {
    static associate(models) {}
  }
  EvaluationGroupRelation.init({}, {
    sequelize,
    modelName: 'EvaluationGroupRelation',
    timestamps: false,
  });
  return EvaluationGroupRelation;
};
