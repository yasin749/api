'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Apple',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Xiaomi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beyaz Eşya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null);
  }
};
