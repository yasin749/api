'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      coverGalleryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Galleries',
          key: 'id',
        },
      },
      contentGalleryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Galleries',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      evaluationGroupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EvaluationGroups',
          key: 'id',
        },
      },
      sort: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
