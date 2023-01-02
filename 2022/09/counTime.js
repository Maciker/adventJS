/*function countTime(leds) {
  if (!leds.includes(0)) {
    return 0;
  }
  return (Math.trunc(leds.filter( led => led === 0).length / leds.filter( led => led === 1).length) )
}*/

function countTime(leds) {
  return leds.join('').repeat(2).split('1').sort().pop().length * 7
}

console.log(countTime([0, 1, 1, 0, 1]));

console.log(countTime([0, 0, 0, 1]));

console.log(countTime([0, 0, 1, 0, 0]));

console.log(countTime([1, 1, 1, 1, 1]));

console.log(countTime([1, 1, 0, 0, 0]));

console.log(countTime([1, 0, 0, 1, 0, 0])); //14

console.log(countTime([1, 1, 0, 0, 0, 0])); //28

console.log(countTime([0, 1, 1, 0, 1])); //7

console.log([0, 1, 1, 0, 1].filter(x => x==1).length);

console.log([0, 1, 1, 0, 1].length);

/*
(
    leds
      .sort((led1, led2) => {
        return led1 - led2;
      })
      .indexOf(1) * 7
  );

   (
    leds.map( (led, index) => {
      if (index === 0 && leds[leds.length - 1] === 0 && leds[index + 1] === 0) {
          return led
      }
      if (index === leds.length - 1 && leds[index - 1] === 0 && leds[0] === 0) {
        return led
      }
      if (leds[index - 1] === 0 && leds[0] === 0) {
        return led
      }
    })
  );

    let maxZeros = 0
  let followedZeros = 0
  leds.map( (led) => {
    if (led === 0) {
      followedZeros += 1
      maxZeros = followedZeros
    } else {
      maxZeros = followedZeros
      followedZeros = 0
    }
  })
  return maxZeros * 7

     (
    (leds.map( (led, index) => {
      if (index === 0 && leds[leds.length - 1] === 0 && leds[index + 1] === 0) {
          return led
      }
      if (index === leds.length - 1 && leds[index - 1] === 0 && leds[0] === 0) {
        return led
      }
      if (leds[index - 1] === 0 && leds[index] === 0) {
        return led
      }
    }).filter( led => led === 0).length + 1) * 7
  );
*/