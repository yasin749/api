'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        path: '/20210129/image1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image4.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image6.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image7.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image8.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/20210129/image9.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null);
  }
};
