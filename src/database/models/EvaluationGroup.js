'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EvaluationGroup extends Model {
    static associate(models) {
      this.belongsToMany(models.EvaluationAttribute, {
        through: models.EvaluationGroupRelation,
        foreignKey: 'evaluationGroupId',
        as: 'evaluationAttributes',
      });
      this.hasMany(models.Product, {
        foreignKey: 'evaluationGroupId',
        as: 'products',
      });
    }

    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          // status: true,
        },
        order: [
          // ['id', 'DESC'],
        ],
      });
    }
  }

  EvaluationGroup.init({
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
    modelName: 'EvaluationGroup',
    timestamps: false,
  });
  return EvaluationGroup;
};
