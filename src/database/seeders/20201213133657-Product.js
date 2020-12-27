'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        categoryId: 1,
        name: 'Iphone 12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Iphone 12 Mini',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        name: 'Galaxy S20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        name: 'Galaxy Node10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'Xiaomi T10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'Xiaomi POCO X3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null);
  }
};
