const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream(process.argv.slice(2)[0])
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    const newResults = results.map((result) => {
      //this takes the siteLocationLatAndLng string and returns the object to contain a lat and lng key/value
      let regexpLatAndLng = /[0-9.-]+:[0-9.-]+/;
      let regexArr = result.siteLocationLatAndLng.match(regexpLatAndLng);
      let split = regexArr[0].split(":");
      let lat = Number(split[0]);
      let lng = Number(split[1]);

      return {
        ...result,
        lat,
        lng,
      };
    });
    console.log(newResults[0]);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
