function distributeGifts(packOfGifts, reindeers) {
  const giftsWeight = packOfGifts.reduce(
    (weight, gift) => weight + gift.length,
    0
  );

  const maxWeight = reindeers.reduce(
    (weight, reindeer) => weight + reindeer.length * 2,
    0
  );

  return Math.trunc(maxWeight / giftsWeight);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

console.log(distributeGifts(packOfGifts, reindeers));
