'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EvaluationAttributes', [
      {
        name: 'Batarya',
      },
      {
        name: 'Ekran',
      },
      {
        name: 'Hız',
      },
      {
        name: 'Ergonomi',
      },

      {
        name: 'Boyut',
      },
      {
        name: 'Soğutma',
      },
      {
        name: 'Enerji Tasarrufu',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EvaluationAttributes', null);
  }
};
