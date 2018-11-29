"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Hosts",
      [
        {
          name: "John Doe Host1",
          company: "John Company1",
          email: "john1@gmail.com",
          accountId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host2",
          company: "John Company2",
          email: "john2@gmail.com",
          accountId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host3",
          company: "John Company3",
          email: "john3@gmail.com",
          accountId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host4",
          company: "John Company4",
          email: "john4@gmail.com",
          accountId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host5",
          company: "John Company5",
          email: "john5@gmail.com",
          accountId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host6",
          company: "John Company6",
          email: "john6@gmail.com",
          accountId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host7",
          company: "John Company7",
          email: "john7@gmail.com",
          accountId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host8",
          company: "John Company8",
          email: "john8@gmail.com",
          accountId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hosts", null, {});
  }
};
