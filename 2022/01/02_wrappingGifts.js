function wrapping(gifts) {
  return gifts.map((gift) => {
    const paper = "*".repeat(gift.length + 2) + "\n*";
    return paper + gift + [...paper].reverse().join("");
  });
}

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
