const countWheels = (Nb1, Nb2, Nb3, Nb4) => {
  let sum1 = Nb1
  let sum2 = Nb2 * 2
  let sum3 = Nb3 * 4
  let sum4 = Nb4 * 6
  let Count = sum1 + sum2 + sum3 + sum4
  return Count
}
console.log(countWheels(9, 3, 7, 2))