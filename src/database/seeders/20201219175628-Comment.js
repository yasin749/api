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
        userId: 3,
        productId: 3,
        body: 'Galaxy S20 çok ince, cepte belli bile olmuyor',
        glad: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 3,
        body: 'Galaxy S20 uçok büyük, tableti andırıyor',
        glad: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        productId: 5,
        body: 'Xiaomi T10 un ekran kalitesi müthiş',
        glad: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        productId: 5,
        body: 'Xiaomi T10 çok büyük',
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
