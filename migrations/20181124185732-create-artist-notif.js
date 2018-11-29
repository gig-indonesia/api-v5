"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ArtistNotifs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gigName: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("approved", "rejected", "invited")
      },
      artistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Artists",
          key: "id"
        }
      },
      gigsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Gigs",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ArtistNotifs");
  }
};
