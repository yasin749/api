'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        productId: 1,
        body: 'Iphone 12 harika bir telefon',
        glad: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 1,
        body: 'Iphone 12 nin şarj ı çok uzun süre dayanıyor',
        glad: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 3,
        body: 'Galaxy S20 çok ince, cepte belli bile olmuyor',
        glad: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 3,
        body: 'Galaxy S20 uçok büyük, tableti andırıyor',
        glad: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        productId: 5,
        body: 'Xiaomi T10 un ekran kalitesi müthiş',
        glad: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        productId: 5,
        body: 'Xiaomi T10 çok büyük',
        glad: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null);
  }
};
