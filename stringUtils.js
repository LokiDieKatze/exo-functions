/* Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé.
Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH' */

const reverseStr = (rainCover) => {
  rainCover = rainCover.split('').reverse().join('')
  return rainCover
}
reverseStr('umbrella')
console.log(reverseStr('umbrella'))

const isPalindrome = (Str) => {
  if (Str === reverseStr(Str)) {
    return true
  } else {
    return false
  }
}

isPalindrome('rever')
console.log(isPalindrome('rever'))


/*Ajouter au fichier précédent une fonction isPalindrome qui prend une string en paramètre et qui retourne true si la string est un palindrome,
sinon la fonction devra retourner false. Vous devrez utiliser la fonction reverseStr pour effectuer cette vérification.*/