const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    static associate(models) {
      // define association here
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
