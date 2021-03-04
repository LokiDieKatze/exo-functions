/* Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, 
sinon la fonction retournera false.*/

const isOdd = (nb) => {
  if (nb % 2 === 0) {
    return false
  } else {
    return true
  }
}
//ou return nb %2 !==0 ? true : false
console.log(isOdd(8))

const isEven = (nb) => {
  if (isOdd(nb)) {
    return false
  } else {
    return true
  }
}
//ou return !isOdd(nb)
console.log(isEven(8))