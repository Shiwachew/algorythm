// console.log(sugarHigh([33, 20, 12, 19, 29], 33))
// console.log(sugarHigh([62, 67, 100], 8))
// console.log(sugarHigh([16, 39, 67, 16, 38, 71], 17))
// console.log(sugarHigh([13, 3, 14, 17, 11], 99))

function sugarHigh(candies = [], threshold) {
  if ( !candies.length ) {
    return [];
  }

  if ( candies.every(x => x > threshold) ) {
    return [];
  }

  const lowestSugar = Math.min(...candies);
  const lowestSugarIndex = candies.findIndex(element => element === lowestSugar);

  const candiesIndexes = [];
  candiesIndexes.push(lowestSugarIndex)

  let tempSugar = 0;

  candies.forEach((element, index) => {
    if ( tempSugar <= threshold ) {
      if (element + lowestSugar <= threshold && index !== lowestSugarIndex ) {
        if ( tempSugar + element <= threshold ) {
          tempSugar = tempSugar + element + lowestSugar;
          candiesIndexes.push(index);
        } else {
          tempSugar = element + lowestSugar;
          candiesIndexes.push(index);
        }
      }
    }
  })

  let candiesIndexesValues = [];
  let candiesIndexesSum = 0;

  candiesIndexes.forEach(element => {
    candiesIndexesValues.push(candies[element])
    candiesIndexesSum = candiesIndexesSum + candies[element]
  })

  if (candiesIndexesSum > threshold) {
    const maxSugar = Math.max(...candiesIndexesValues);

    const maxSugarCandyIndex = candies.findIndex(element => element === maxSugar);
    const indexToRemove = candiesIndexes.findIndex(element => element === maxSugarCandyIndex);
    candiesIndexes.splice(indexToRemove, 1);
  }

  return candiesIndexes.sort();
}
