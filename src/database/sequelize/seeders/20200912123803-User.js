'use strict';
const bcrypt = require('bcrypt')

const saltRounds = 10;
const password = 'yasiN_749';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'Yasin UYSAL(A)',
        email: 'yasin_749@hotmail.com',
        password: hashedPassword,
        userTypeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Yasin UYSAL(M)',
        email: 'yasinuysal.749@gmail.com',
        password: hashedPassword,
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Ali',
        email: 'ali.749@gmail.com',
        password: hashedPassword,
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Ahmet',
        email: 'ahmet.749@gmail.com',
        password: hashedPassword,
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Mehmet',
        email: 'mehmet.749@gmail.com',
        password: hashedPassword,
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Veli',
        email: 'veli.749@gmail.com',
        password: hashedPassword,
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Gökhan',
        email: 'gokhan.749@gmail.com',
        password: hashedPassword,
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Hakan',
        email: 'hakan.749@gmail.com',
        password: hashedPassword,
        userTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
