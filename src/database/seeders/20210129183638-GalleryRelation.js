'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GalleryRelations', [
      // Gallery 1
      {
        galleryId: 1,
        imageId: 1,
      },
      {
        galleryId: 1,
        imageId: 2,
      },
      {
        galleryId: 1,
        imageId: 3,
      },

      // Gallery 2
      {
        galleryId: 2,
        imageId: 4,
      },
      {
        galleryId: 2,
        imageId: 5,
      },
      {
        galleryId: 2,
        imageId: 6,
      },

      // Gallery 3
      {
        galleryId: 3,
        imageId: 7,
      },
      {
        galleryId: 3,
        imageId: 8,
      },
      {
        galleryId: 3,
        imageId: 9,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GalleryRelations', null);
  }
};
