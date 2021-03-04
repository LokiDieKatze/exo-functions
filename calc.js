//1
const add = (Str1, Str2) => {
  return Str1 + Str2
}

console.log(add('hello', 'world'))

//2
const sub = (Money, Shopping) => {
  return Shopping - Money
}

console.log(sub(150, 149))

//3
const mul = (Nb1, Nb2) => {
  return Nb1 * Nb2
}

console.log(mul(7, 7))

//4
const div = (number1, number2) => {
  return number1 / number2
}

console.log(div(98, 6))

//5
const calc = (op, Num1, Num2) => {
  if (op === "+") {
    return add(Num1, Num2)
  } else if (op === "-") {
    return sub(Num1, Num2)
  } else if (op === "*") {
    return mul(Num1, Num2)
  } else if (op === "/") {
    return div(Num1, Num2)
  }
}
console.log(calc('/', 49, 7))