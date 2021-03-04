const biggest = (tab) => {
  let nb = 0
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > nb) {
      nb = tab[i]
    }
  }
  return nb
}
console.log(biggest([99, 100, 101, 1]))


const sortAscend = (tab) => {
  let tab2 = tab
  return tab2.sort((a, b) => a - b)
}
console.log(sortAscend([99, 100, 101, 1]))


const makeUnique = (nbTab) => {
  let nbTab2 = [...nbTab]
  let newNbTab = []
  for (i = 0; i < nbTab2.length; i++) {
    if (!newNbTab.includes(nbTab2[i])) {
      newNbTab.push(nbTab2[i])
    }
  }
  sortAscend(newNbTab)
  return newNbTab
}

console.log(makeUnique([7, 2, 4, 3, 2, 3, 5, 7, 50, 1]))
