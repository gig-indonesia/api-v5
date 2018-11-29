"use strict";
module.exports = (sequelize, DataTypes) => {
  const HostNotif = sequelize.define("HostNotif", {
    artistName: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM("accepted", "applied", "rejected")
    },
    gigsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Gigs",
        key: "id"
      }
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Hosts",
        key: "id"
      }
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Artists",
        key: "id"
      }
    }
  });

  HostNotif.associate = function(models) {
    // associations can be defined here
    models.HostNotif.belongsTo(models.Host, {
      foreignKey: "hostId",
      targetKey: "id"
    });
  };
  return HostNotif;
};
