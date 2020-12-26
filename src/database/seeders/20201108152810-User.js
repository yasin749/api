'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'Yasin UYSAL(A)',
        email: 'yasin_749@hotmail.com',
        password: 'yasiN_749',
        userTypeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Yasin UYSAL(M)',
        email: 'yasinuysal.749@gmail.com',
        password: 'yasiN_749',
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
