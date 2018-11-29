"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ArtistNotifs",
      [
        {
          gigName: "John Doe1",
          status: "approved",
          artistId: 1,
          gigsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigName: "John Doe2",
          status: "rejected",
          artistId: 2,
          gigsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigName: "John Doe3",
          status: "invited",
          artistId: 3,
          gigsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigName: "John Doe4",
          status: "approved",
          artistId: 4,
          gigsId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigName: "John Doe5",
          status: "approved",
          artistId: 5,
          gigsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigName: "John Doe6",
          status: "approved",
          artistId: 6,
          gigsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigName: "John Doe7",
          status: "approved",
          artistId: 7,
          gigsId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigName: "John Doe8",
          status: "approved",
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
    return queryInterface.bulkDelete("ArtistNotifs", null, {});
  }
};
