"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "HostNotifs",
      [
        {
          artistName: "The Bagindo",
          status: "accepted",
          hostId: 1,
          gigsId: 1,
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: "sule",
          status: "applied",
          hostId: 2,
          gigsId: 1,
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: "Black magic",
          status: "rejected",
          hostId: 3,
          gigsId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: "Green Day",
          status: "accepted",
          hostId: 4,
          gigsId: 2,
          artistId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: "Dangdut Pantura",
          status: "applied",
          hostId: 5,
          gigsId: 3,
          artistId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: "The groove",
          status: "rejected",
          hostId: 6,
          gigsId: 4,
          artistId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: "The brandals",
          status: "accepted",
          hostId: 7,
          gigsId: 5,
          artistId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: "The kop",
          status: "applied",
          hostId: 8,
          gigsId: 6,
          artistId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("HostNotifs", null, {});
  }
};
