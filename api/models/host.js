"use strict";
module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define(
    "Host",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      company: {
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
      accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "Accounts",
          key: "id"
        }
      }
    },
    {}
  );
  Host.associate = function(models) {
    models.Host.hasMany(models.HostNotif, {
      foreignKey: "hostId",
      targetKey: "id"
    });

    models.Host.belongsTo(models.Account, {
      foreignKey: "accountId",
      targetKey: "id"
    });
    models.Host.hasMany(models.Gig, {
      foreignKey: "hostId",
      targetKey: "id"
    });
  };
  return Host;
};
