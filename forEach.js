/*const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element)); */
const add = (nb) => {
  return nb + 7
}

const forEach = (fn, array) => {
  let array2 = []
  for (i = 0; i < array.length; i++) {
    array2[i] = fn(array[i])
  }
  return array2
}
console.log(forEach(add, [10, 11, 12, 13]))
