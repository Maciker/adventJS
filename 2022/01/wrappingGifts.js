function paperGift(gift){
  return Array(gift.length + 3).join('*')
}


function wrapping(gifts) {
  return gifts.map( (gift) => {
      return paperGift(gift) + '\n*' + gift + '*\n' + paperGift(gift)
  })
}

  
const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)