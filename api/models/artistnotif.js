"use strict";
module.exports = (sequelize, DataTypes) => {
  const ArtistNotif = sequelize.define("ArtistNotif", {
    gigName: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM("approved", "rejected", "invited")
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Artists",
        key: "id"
      }
    },
    gigsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "CreateGigs",
        key: "id"
      }
    }
  });

  ArtistNotif.associate = function(models) {
    // associations can be defined here
    models.ArtistNotif.belongsTo(models.Artist, {
      foreignKey: "artistId",
      targetKey: "id"
    });
  };
  return ArtistNotif;
};
