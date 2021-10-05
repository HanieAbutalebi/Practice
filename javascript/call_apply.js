function sum(a, b) {
  return a + b;
}
console.log(sum.bind(null, 2)(3));
console.log(sum.bind(null, 2, 3)());

console.log(sum.apply(null, [2, 3]));
console.log(sum.call(null, 2, 3));

const numberToAdd = [1, 2, 3, 4, 5];

function sum2(...numbers) {
  return numbers.reduce((count, n) => count + n);
}
console.log(sum2(1, 2, 3, 4));

newarray = [1, 2, 3, 4, 5, 6];
console.log(sum2(...newarray));
console.log(sum2.bind(null, ...newarray)());
console.log(sum2.call(null, ...newarray));

console.log(sum2.apply(null, newarray));
