"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("students", [
      {
        name: "Sam",
        email: "sam@sam.com",
        age: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Foong",
        email: "foong@foong.com",
        age: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bryan",
        email: "bryan@bryan.com",
        age: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("students", null, {});
  },
};
