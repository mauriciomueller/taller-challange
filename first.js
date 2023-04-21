const coins = [5, 7, 1, 1, 2, 3, 22]

function getMinimalChange(coins) {
  coins.sort((a, b) => a - b)
  console.log(coins);

  let minimalChange = 1
  //[1, 1, 2, 3, 5, 7, 22]
  for (i = 0; i < coins.lenght; i++) {
    if (coins[i] >= minimalChange) {
      minimalChange += coins[i]
    } else {
      break
    }
  }

  return minimalChange
}

console.log(getMinimalChange(coins))