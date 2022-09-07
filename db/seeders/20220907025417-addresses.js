"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("addresses", [
      {
        student_id: 1,
        address: "Seina One block 42",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 1,
        address: "Woodland Court flat b floor 12",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 2,
        address: "Singapore Marina!",
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
