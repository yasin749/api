const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    static associate(models) {
      models.UserType.hasMany(models.User, {
        foreignKey: 'id',
        as: 'users',
      });
    }
  };
  UserType.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'UserType',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  return UserType;
};
