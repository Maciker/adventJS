function fitsInOneBox(boxes) {
  return boxes
    .sort((box1, box2) => {
      return box1.l * box1.w * box1.h - box2.l * box2.w * box2.h;
    })
    .every((box, item) => {
      if (item === 0) {
        return true;
      }
      return (
        box.l > boxes[item - 1].l &&
        box.w > boxes[item - 1].w &&
        box.h > boxes[item - 1].h
      );
    });
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 },
];

console.log(fitsInOneBox(boxes));
