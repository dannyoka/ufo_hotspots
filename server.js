const express = require("express");
const app = express();
const mysql = require("mysql2");
const PORT = 5000;
const { Sequelize } = require("sequelize");
const Sighting = require("./Model.js");

const sequelize = new Sequelize("mydb", "user", "password", {
  host: "167.99.151.158",
  dialect: "mysql",
});

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cvid@019",
  database: "ig_clone",
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

// const auth = async () => {
//   try {
//     sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// auth();

connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) {
    throw err;
  }
  console.log(fields);
});

app.get("/add", async (req, res) => {
  // let {
  //   sightingDateTime,
  //   shape,
  //   durationInSeconds,
  //   durationInHoursAndMin,
  //   comments,
  //   siteLocationLatAndLng,
  // } = req.body;
  // let regexpLatAndLng = /[0-9.-]+:[0-9.-]+/;
  // let regexArr = siteLocationLatAndLng.match(regexpLatAndLng);
  // let split = regexArr[0].split(":");
  // let lat = Number(split[0]);
  // let lng = Number(split[1]);
  // // let sighting = await Sighting.create({
  // //   sightingDateTime,
  // //   shape,
  // //   durationInSeconds,
  // //   durationInHoursAndMin,
  // //   comments,
  // //   siteLocationLatAndLng,
  // //   lat,
  // //   lng,
  // // });
  // connection
  //   .execute
  //   // `INSERT INTO SIGHTINGS (sightingDateTime, shape, durationInSeconds, durationInHoursAndMin, comments, siteLocationLatAndLng, lat, lng)
  //   // VALUES (${sightingDateTime}, ${shape}, ${durationInSeconds}, ${durationInHoursAndMin}, ${comments}, ${siteLocationLatAndLng}, ${lat}, ${lng});`
  //   ();
  // console.log(req.body);
  // // console.log(sighting instanceof Sighting);
  // // console.log("sighting added!");
  // // res.send(`Recorded sighting: ${sighting}`);
  const users = connection.query("SELECT * FROM users");
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// connection.end();
