const numbers = [ 23,34,23,14,16,17,19];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23,99,65);
const maxInArray = Math.max(...numbers);
// console.log(max,maxInArray);

const numbers2 = [22,...numbers,88,44];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
