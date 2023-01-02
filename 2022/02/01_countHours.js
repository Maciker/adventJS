function countHours(year, holidays) {
  const extraHours = holidays.filter((day) => {
    const freeDay = new Date(day + "/" + year);
    if (freeDay.getDay() != 0 && freeDay.getDay() != 6) {
      return freeDay;
    }
  });

  return extraHours.length * 2;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

console.log(countHours(year, holidays));

const freeDay = new Date("12/03/2022");

console.log(freeDay.getDay());

console.log("01/06" + year);
