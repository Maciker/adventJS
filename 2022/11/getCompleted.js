function getCompleted(part, total) {
  const [partHours, partMinutes, partSeconds] = part.split(":");
  const [totalHours, totalMinutes, totalSeconds] = total.split(":");

  const partNumber =
    Number(partHours) * 60 * 60 +
    Number(partMinutes) * 60 +
    Number(partSeconds);

  const totalNumber =
    Number(totalHours) * 60 * 60 +
    Number(totalMinutes) * 60 +
    Number(totalSeconds);

  const greatestCommonDivisor = function (partNumber, totalNumber) {
    if (!totalNumber) {
      return partNumber;
    }
    return greatestCommonDivisor(totalNumber, partNumber % totalNumber);
  };

  const gcd = greatestCommonDivisor(partNumber, totalNumber);

  return (partNumber / gcd).toString() + "/" + (totalNumber / gcd).toString();
}

console.log(getCompleted("01:00:00", "03:00:00")); // '1/3'
console.log(getCompleted("02:00:00", "04:00:00")); // '1/2'
console.log(getCompleted("01:00:00", "01:00:00")); // '1/1'
console.log(getCompleted("00:10:00", "01:00:00")); // '1/6'
console.log(getCompleted("01:10:10", "03:30:30")); // '1/3'
console.log(getCompleted("03:30:30", "05:50:50")); // '3/5'