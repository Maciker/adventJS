function selectSleigh(distance, sleighs) {
  const exceedWatios = sleighs.find( (sleigh, index) => {
    if (sleigh.consumption * distance > 20)  {
        return sleighs[index - 1]
    }
  });
  if ( exceedWatios && exceedWatios.name) {
    return sleighs[sleighs.findIndex( sleigh => sleigh.name === exceedWatios.name) - 1].name || null
  }
  return null
}


const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs));


console.log(sleighs.findIndex(sleigh => sleigh.name === "Rudolph"));