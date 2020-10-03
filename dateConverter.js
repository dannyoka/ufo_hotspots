// let date = "2/2/10 20:30";
const dateConverter = (date) => {
  let splitDateTime = date.split(" ");
  let splitDate = splitDateTime[0].split("/");
  for (let i = 0; i < splitDate.length - 1; i++) {
    if (splitDate[i].length < 2) {
      splitDate[i] = `0${splitDate[i]}`;
    }
  }
  if (splitDate.length < 3) {
    return "2000/01/01 12:00";
  }
  if (splitDate[2] < 22) {
    splitDate[2] = `20${splitDate[2]}`;
  } else {
    splitDate[2] = `19${splitDate[2]}`;
  }
  //   console.log(splitDate.length);
  //   console.log(splitDateTime.length);
  return splitDate.length === 3
    ? `${splitDate[2]}/${splitDate[0]}/${splitDate[1]} ${splitDateTime[1]}`
    : null;
};

module.exports = dateConverter;

// let date1 = "10/1/19";
// let date2 = "07/30/99";
// let date3 = "39002";
// console.log(dateConverter(date));
// console.log(dateConverter(date1));
// console.log(dateConverter(date2));
// console.log(dateConverter(date3));
