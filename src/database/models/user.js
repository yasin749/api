const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.belongsTo(models.UserType, {
        onDelete: "CASCADE",
        foreignKey: 'userTypeId',
      });
      models.User.hasMany(models.Comment);
    }
  };
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // @todo bcrypt
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
