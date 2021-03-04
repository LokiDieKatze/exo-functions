const showStars = (nbBase, reverse, character) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += character.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += character.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}
let str = showStars(13, true, 'A')
console.log(str)