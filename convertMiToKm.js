/*Ecrire une fonction convertMiToKm qui fait la conversion d'une distance exprimée en Milles, en Kilomètres. 1 Mille est à égal à 1.60934 Kilomètres.*/

const convertMiToKm = (distanceMiles) => {
  let distanceKm = distanceMiles * 1.60934
  return distanceKm
}

console.log(convertMiToKm(267.5))