'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        categoryId: 1,
        name: 'Iphone 12',
        evaluationGroupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Iphone 12 Mini',
        evaluationGroupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        name: 'Galaxy S20',
        evaluationGroupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        name: 'Galaxy Node10',
        evaluationGroupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'Xiaomi T10',
        evaluationGroupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 4,
        name: 'KGN56VIF0N A++ Enerji Sınıfı 559L No-Frost Buzdolabı',
        evaluationGroupId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null);
  }
};
