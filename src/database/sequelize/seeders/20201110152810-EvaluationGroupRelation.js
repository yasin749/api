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

      {
        evaluationGroupId: 2,
        evaluationAttributeId: 5,
      },
      {
        evaluationGroupId: 2,
        evaluationAttributeId: 6,
      },
      {
        evaluationGroupId: 2,
        evaluationAttributeId: 7,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EvaluationGroupRelations', null);
  }
};
