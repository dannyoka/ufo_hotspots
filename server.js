const express = require("express");
const app = express();
const mysql = require("mysql2");
const dateConverter = require("./dateConverter")
const PORT = 5000;
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("mydb", "user", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cvid@019",
  database: "ufo_sightings",
});
const connect = async () => {
  try {
    await connection.connect();
    console.log("Connected to MySQL");
  } catch (error) {
    console.log(error);
  }
};

connect();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  connection.query(
    `SELECT * FROM sightings LIMIT 1`,
    (err, results, fields) => {
      if (err) throw err;
      let result = results[0];
      res.render("home", { lat: result.lat, lng: result.lng });
      console.log(result);
    }
  );
});

app.post("/add", async (req, res) => {
  let {
    sighting_date_time,
    shape,
    duration_in_seconds,
    duration_in_hours_and_min,
    comments,
    site_location_lat_and_lng,
  } = req.body;

  let regexpLatAndLng = /[0-9.-]+:[0-9.-]+/;
  let regexArr = site_location_lat_and_lng.match(regexpLatAndLng);
  let split = regexArr[0].split(":");
  let lat = Number(split[0]);
  let lng = Number(split[1]);
  let sighting = {
    sighting_date_time:dateConverter(sighting_date_time),
    shape,
    duration_in_seconds,
    duration_in_hours_and_min,
    comments,
    site_location_lat_and_lng,
    lat,
    lng,
  };
  connection.query("INSERT INTO sightings SET ?", sighting, (err, result) => {
    if (err) throw err;
    res.send("Sighting added successfully");
  });
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// connection.end();
