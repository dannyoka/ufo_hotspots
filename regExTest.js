const myString = "san marcos tx (29.8830556:-97.9411111)";
const regexpLatAndLng = /[0-9.-]+:[0-9.-]+/;
const latAndLng = myString.match(regexpLatAndLng);
const split = latAndLng[0].split(":");
const lat = split[0];
const lang = split[1];
console.log(lat, lang);
