'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        productId: 1,
        body: 'Iphone 12 harika bir telefon',
        glad: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 1,
        body: 'Iphone 12 nin şarj ı çok uzun süre dayanıyor',
        glad: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 3,
        body: 'Galaxy Node10 un kalemi harika',
        glad: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 3,
        body: 'Galaxy Node10 uçok büyük, tableti andırıyor',
        glad: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null);
  }
};
