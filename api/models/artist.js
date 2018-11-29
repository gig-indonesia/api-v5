"use strict";
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define("Artist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("solo", "group"),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING
    },
    video: {
      type: DataTypes.STRING
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Accounts",
        key: "id"
      }
    }
  });
  Artist.associate = function(models) {
    // associations can be defined here
    models.Artist.belongsTo(models.Account, {
      foreignKey: "accountId"
    });

    models.Artist.belongsToMany(models.Gig, {
      through: { model: "Applicants" },
      foreignKey: "artistId",
      otherKey: "gigsId"
    });
    // models.Artist.belongsToMany(models.Gig, {
    //   through: { model: "HostNotifs" },
    //   foreignKey: "artistId",
    //   otherKey: "gigsId"
    // });
    models.Artist.hasMany(models.ArtistNotif, {
      foreignKey: "artistId",
      targetKey: "id",
      as: "GigsApplied"
    });
  };

  return Artist;
};
