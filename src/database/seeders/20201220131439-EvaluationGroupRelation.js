'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EvaluationGroupRelations', [
      {
        evaluationGroupId: 1,
        evaluationAttributeId: 1,
      },
      {
        evaluationGroupId: 1,
        evaluationAttributeId: 2,
      },
      {
        evaluationGroupId: 1,
        evaluationAttributeId: 3,
      },
      {
        evaluationGroupId: 1,
        evaluationAttributeId: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EvaluationGroupRelations', null);
  }
};
