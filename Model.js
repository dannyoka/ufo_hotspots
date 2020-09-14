const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql://localhost");

const Sighting = sequelize.define("Sighting", {
  sightingDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  shape: {
    type: DataTypes.STRING,
  },
  durationInSeconds: {
    type: DataTypes.INTEGER,
  },
  durationInHoursAndMinutes: {
    type: DataTypes.STRING,
  },
  comments: {
    type: DataTypes.STRING,
  },
  siteLocationLatAndLng: {
    type: DataTypes.STRING,
  },
  lat: {
    type: DataTypes.DECIMAL,
  },
  lng: {
    type: DataTypes.DECIMAL,
  },
});

module.exports = Sighting;
