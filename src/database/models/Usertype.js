const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: 'userTypeId',
        as: 'users',
      });
    }

    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          // status: true,
        },
        attributes: {
          // exclude: ['createdAt', 'updatedAt'],
        },
      });
    }
  }

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
