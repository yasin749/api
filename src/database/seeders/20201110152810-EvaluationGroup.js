'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EvaluationGroups', [
      {
        name: 'Akıllı Telefon(EG)',
      },
      {
        name: 'Beyaz Eşya(EG)',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EvaluationGroups', null);
  }
};
