'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Evaluations', [
      // USER 1 PRODUCT 1
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
      // USER 1 PRODUCT 2
      {
        userId: 1,
        productId: 2,
        evaluationAttributeId: 1,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // USER 2 PRODUCT 1
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
      // USER 2 PRODUCT 2
      {
        userId: 2,
        productId: 2,
        evaluationAttributeId: 1,
        evaluation: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // USER 3 PRODUCT 1
      {
        userId: 3,
        productId: 1,
        evaluationAttributeId: 1,
        evaluation: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 1,
        evaluationAttributeId: 2,
        evaluation: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // USER 3 PRODUCT 2
      {
        userId: 3,
        productId: 2,
        evaluationAttributeId: 1,
        evaluation: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Evaluations', null);
  }
};
