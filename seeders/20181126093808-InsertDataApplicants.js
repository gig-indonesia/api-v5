"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Applicants",
      [
        {
          status: "pending",
          artistId: 1,
          gigsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 2,
          gigsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "rejected",
          artistId: 3,
          gigsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 4,
          gigsId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "rejected",
          artistId: 5,
          gigsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "pending",
          artistId: 6,
          gigsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 7,
          gigsId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "rejected",
          artistId: 8,
          gigsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Applicants", null, {});
  }
};
