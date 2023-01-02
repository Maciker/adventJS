function dryNumber(dry, numbers) {
  let result = [];  
  if (dry < 0 || dry > 9) {
    return []
  }
  for (let number = 1; number <= numbers; number++) {
    if (number.toString().includes(dry.toString())) {
        result.push(number)
    }
  }
  return result;
}

console.log(dryNumber(2, 20)); // [2, 12, 20]

console.log(dryNumber(1, 15)); // [1, 10, 11, 12, 13, 14, 15]
