const {Model} = require('sequelize');
const bcrypt = require('bcrypt');

const passwordSaltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.UserType, {
        onDelete: 'CASCADE',
        foreignKey: 'userTypeId',
        as: 'userType',
      });
      this.hasMany(models.Comment, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
        as: 'comments',
      });
      this.hasMany(models.Evaluation, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
        as: 'evaluations',
      });
    }

    static scope(models) {
      this.addScope('defaultScope', {
        where: {
          // status: true,
        },
        include: [
          {
            model: models.UserType,
            as: 'userType',
          }
        ],
        attributes: {
          // exclude: ['password', 'createdAt', 'updatedAt']
          exclude: ['password']
        },
        order: [
          // ['id', 'DESC'],
        ],
      });
    }
  }

  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 30],
      },
      set(value) {
        this.setDataValue('fullName', value.trim());
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      set(value) {
        this.setDataValue('email', value.trim());
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, passwordSaltRounds));
      }
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
