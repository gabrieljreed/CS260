let arrays = [[1, 2, 3], [4, 5], [6]];
const reducer = (iter, curr) => iter.concat(curr);

console.log(arrays.reduce(reducer));
// Your code here.
// → [1, 2, 3, 4, 5, 6]
