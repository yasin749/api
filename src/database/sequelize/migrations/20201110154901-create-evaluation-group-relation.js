'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EvaluationGroupRelations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      evaluationGroupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EvaluationGroups',
          key: 'id',
        },
      },
      evaluationAttributeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EvaluationAttributes',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EvaluationGroupRelations');
  }
};
