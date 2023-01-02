function checkPart(part) {
  if (part === part.split("").reverse().join("")) {
    return true;
  }
  for (let i = 0; i <= part.length; i++) {
    let newPart = part.substring(0,i) +  part.substring(i+1,part.length);
    if (newPart === newPart.split("").reverse().join("")) {
      return true;
    }
  }

  return false;
}

console.log("uwu" === "uwu".split("").reverse().join(""));

console.log(checkPart("miidim"));

console.log(checkPart("zzzoonzzz"));
