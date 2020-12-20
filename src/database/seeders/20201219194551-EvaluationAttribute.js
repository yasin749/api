'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EvaluationAttributes', [
      {
        name: 'Batarya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ekran',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hız',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ergonomi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EvaluationAttributes', null);
  }
};
