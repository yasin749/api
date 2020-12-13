const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    static associate(models) {
      models.UserType.hasMany(models.User);
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
  });
  return UserType;
};