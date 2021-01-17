'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Evaluations', [
      {
        userId: 1,
        productId: 1,
        evaluationAttributeId: 1,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 1,
        evaluationAttributeId: 2,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 1,
        evaluationAttributeId: 3,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 1,
        evaluationAttributeId: 4,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userId: 2,
        productId: 1,
        evaluationAttributeId: 1,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 1,
        evaluationAttributeId: 2,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 1,
        evaluationAttributeId: 3,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 1,
        evaluationAttributeId: 4,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Evaluations', null);
  }
};
