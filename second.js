function sortedSquaredArray(array) {
  const squares = array.map(item => item ** 2);
  squares.sort((a, b) => a - b);
  
  return squares;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])); // [1, 4, 9, 25, 36, 64, 81]
console.log(sortedSquaredArray([-2, -1])); // [1, 4]
console.log(sortedSquaredArray([-10, -5, 0, 5, 10])); //  [0, 25, 25, 100, 100]