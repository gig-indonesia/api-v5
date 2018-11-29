"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Gigs",
      [
        {
          title: "John Doe9",
          budget: 4000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-2829820,829280",
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe10",
          budget: 3000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28210820,8210280",
          hostId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe11",
          budget: 7000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28211820,8211280",
          hostId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe12",
          budget: 340000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28212820,8212280",
          hostId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe13",
          budget: 900000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28213820,8213280",
          hostId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe14",
          budget: 230005000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28214820,8214280",
          hostId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe15",
          budget: 655000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28215820,8215280",
          hostId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe16",
          budget: 76000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28215820,8215280",
          hostId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Gigs", null, {});
  }
};
