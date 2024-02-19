const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// const array3 = array1.concat(array2, [7, 8, 9], 'Luis');
const array3 = [...array1, 'João', ...array2, ...[7, 8, 9]];
console.log(array3);