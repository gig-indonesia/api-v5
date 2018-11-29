"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Accounts",
      [
        {
          username: "John Doe",
          email: "john@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe1",
          email: "john1@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe2",
          email: "john2@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe3",
          email: "john3@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe4",
          email: "john4@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe5",
          email: "john5@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe6",
          email: "john6@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe7",
          email: "john7@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe8",
          email: "john8@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe9",
          email: "john9@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe10",
          email: "john10@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe11",
          email: "john11@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe12",
          email: "john12@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "John Doe13",
          email: "john13@gmail.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Accounts", null, {});
  }
};
