"use strict";
module.exports = (sequelize, DataTypes) => {
  const Applicant = sequelize.define("Applicant", {
    status: {
      type: DataTypes.ENUM("pending", "approve", "reject"),
      allowNull: false
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
        model: "Gigs",
        key: "id"
      }
    }
  });

  return Applicant;
};
