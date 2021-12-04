export default function isValid(letter) {
 let flag = false;
  for (let index = 0; index < letter.length; index++) {
    if (letter[index] === '(') {
      flag = true;
    }
    if (flag && '[]{}'.includes(letter[index])) {
      return false;
    }
    if (letter[index] === ')') {
      flag = false;
      if (letter[index - 1] === '(') {
        return false;
      }
    }
  }
  return flag ? false : true;
}
