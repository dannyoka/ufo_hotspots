const csv = require("csv-parser");
const fs = require("fs");
const axios = require("axios");
const results = [];
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ufo_sightings",
  password: "Cvid@019",
});

fs.createReadStream(process.argv.slice(2)[0])
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    const newResults = results.map((result) => {
      //this takes the siteLocationLatAndLng string and returns the object to contain a lat and lng key/value
      let regexpLatAndLng = /[0-9.-]+:[0-9.-]+/;
      let regexArr = result.site_location_lat_and_lng.match(regexpLatAndLng);
      let split = regexArr[0].split(":");
      let lat = Number(split[0]);
      let lng = Number(split[1]);

      return {
        ...result,
        lat,
        lng,
      };
    });
    const data = [];
    newResults.forEach(
      ({
        sighting_date_time,
        shape,
        duration_in_seconds,
        duration_in_hours_and_min,
        comments,
        site_location_lat_and_lng,
        lat,
        lng,
      }) => {
        data.push([
          sighting_date_time,
          shape,
          duration_in_seconds,
          duration_in_hours_and_min,
          comments,
          site_location_lat_and_lng,
          lat,
          lng,
        ]);
      }
    );
    console.log(data);

    const q =
      "INSERT INTO sightings (sighting_date_time,shape,duration_in_seconds,duration_in_hours_and_min,comments,site_location_lat_and_lng,lat,lng) VALUES ?";
    connection.query(q, [data], (err, result) => {
      console.log(err);
      console.log(result);
    });
    //single post request

    //too many requests, I think...

    // newResults.forEach((result) => {
    //   try {
    //     axios.post("http://localhost:5000/add", result);
    //   } catch (error) {
    //     if (error) throw error;
    //   }
    // });

    // newResults.forEach((result) => {
    //   console.log(result);
    //   axios.post("localhost:5000/add", result);
    // });
    // newResults.forEach((result) => {
    //   axios.post("locahost:5000", result);
    // });
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
