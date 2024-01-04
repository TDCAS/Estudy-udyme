"use strict";const bcryptjs = require('bcryptjs');
// seeds serve para insjetar inserts na base

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('users', [{
      nome: 'allan',
      email: 'allan@gmail.com',
      password_hash: await bcryptjs.hash('allan123456', 8),
      create_at: new Date(),
      update_at: new Date(),
    },
    {
      nome: 'ronaldo',
      email: 'ronaldo@hmail.com',
      password_hash: await bcryptjs.hash('ronaldo123456', 8),
      create_at: new Date(),
      update_at: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
