const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.belongsTo(models.UserType, {
        onDelete: "CASCADE",
        foreignKey: 'userTypeId',
        as: 'userType',
      });
      models.User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'comments',
      });
      models.User.hasMany(models.Evaluation, {
        foreignKey: 'userId',
        as: 'evaluations',
      });
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
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      where: {
        status: true,
      },
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt']
      },
      order: [
        ['id', 'DESC'],
      ],
    },
  });
  return User;
};
