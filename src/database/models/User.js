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
          deleted: false,
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
          exclude: ['password', 'deleted'],
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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, passwordSaltRounds));
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
