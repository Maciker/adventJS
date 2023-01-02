function boxVolume(box){
    return box.l * box.w * box.h
}


function fitsInOneBox(boxes) {
  const sortedBoxes = (boxes.sort((box1, box2) => {
    return boxVolume(box1) - boxVolume(box2)
    }))
  let result = []
  for(let i = 0;  i < sortedBoxes.length - 1; i++){
    result.push(sortedBoxes[i].l < sortedBoxes[i + 1].l && sortedBoxes[i].w < sortedBoxes[i + 1].w && sortedBoxes[i].h < sortedBoxes[i + 1].h)
  }
  return result
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2}
]

console.log(fitsInOneBox(boxes));