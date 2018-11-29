"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Artists",
      [
        {
          name: "John Doe",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni@gmail.com",
          phone: "0829183901",
          accountId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe18",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni2@gmail.com",
          phone: "0829183901",
          accountId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe19",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni3@gmail.com",
          phone: "0829183901",
          accountId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe20",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni4@gmail.com",
          phone: "0829203901",
          accountId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe21",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni5@gmail.com",
          phone: "0829183901",
          accountId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe22",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni6@gmail.com",
          phone: "0829223901",
          accountId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe22",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni7@gmail.com",
          phone: "0829223901",
          accountId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe22",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni8@gmail.com",
          phone: "0829223901",
          accountId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artists", null, {});
  }
};
