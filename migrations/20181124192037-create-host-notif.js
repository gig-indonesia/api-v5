"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("HostNotifs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artistName: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("accepted", "applied", "rejected")
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Hosts",
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
      artistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Artists",
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
    return queryInterface.dropTable("HostNotifs");
  }
};
