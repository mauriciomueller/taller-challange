function getMinimumChange(coins) {
  coins.sort((a, b) => a - b);
  let minimumChange = 1;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minimumChange) {
      return minimumChange;
    }
    minimumChange += coins[i];
  }

  return minimumChange;
}

console.log(minimumUncreatableValue([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(minimumUncreatableValue([1, 1, 1, 1, 1])); // 6
console.log(minimumUncreatableValue([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55