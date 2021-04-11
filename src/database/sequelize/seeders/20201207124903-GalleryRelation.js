'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GalleryRelations', [
      // Iphone 12 Cover Gallery
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

      // Iphone 12 Content Gallery
      {
        galleryId: 2,
        imageId: 1,
      },
      {
        galleryId: 2,
        imageId: 2,
      },
      {
        galleryId: 2,
        imageId: 3,
      },

      // Iphone 12 Mini Cover Gallery
      {
        galleryId: 3,
        imageId: 4,
      },
      {
        galleryId: 3,
        imageId: 5,
      },
      {
        galleryId: 3,
        imageId: 6,
      },

      // Iphone 12 Mini Content Gallery
      {
        galleryId: 4,
        imageId: 4,
      },
      {
        galleryId: 4,
        imageId: 5,
      },
      {
        galleryId: 4,
        imageId: 6,
      },

      // Galaxy S20 Cover Gallery
      {
        galleryId: 5,
        imageId: 7,
      },
      {
        galleryId: 5,
        imageId: 8,
      },
      {
        galleryId: 5,
        imageId: 9,
      },

      // Galaxy S20 Content Gallery
      {
        galleryId: 6,
        imageId: 7,
      },
      {
        galleryId: 6,
        imageId: 8,
      },
      {
        galleryId: 6,
        imageId: 9,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GalleryRelations', null);
  }
};
