const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.UserType, {
        onDelete: 'CASCADE',
        foreignKey: 'userTypeId',
        as: 'userType',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'comments',
      });
      this.hasMany(models.Evaluation, {
        foreignKey: 'userId',
        as: 'evaluations',
      });
    }

    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          status: true,
        },
        include: [
          {
            model: models.UserType,
            as: 'userType',
          }
        ],
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        order: [
          ['id', 'DESC'],
        ],
      });
    }
  }

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
  });
  return User;
};
