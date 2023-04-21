array = [-10, -5, 0, 5, 10]

array.sort()

console.log(array)

const squares = array.map(item => {
 return item*item;
});

console.log(squares);