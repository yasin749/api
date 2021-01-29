'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Galleries', [
      {
        name: 'Iphone 12 cover',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iphone 12 Mini cover',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Galaxy S20 cover',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Galleries', null);
  }
};
