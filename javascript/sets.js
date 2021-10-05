const uniqueArray = [1, 2, 3, 4, 5];
const newNumber = 4;
if (!uniqueArray.includes(newNumber)) {
  uniqueArray.add(newNumber);
}
console.log(uniqueArray);

////use set ////
const set = new Set([1, 2, 3, 4, 5, 4]);
set.add(6);
set.add(3);
console.log(set);

// console.log(set[0]); //false => set,array nist
// console.log(set.get(2)); //false => tabe get() nadarad

console.log(set.has(2)); //true => tabe has() darad

//Access to the value of set
set.forEach((values) => {
  console.log(values);
});
set.delete(2);
console.log(set);

console.log(set.size);

set.clear();
console.log(set);

function removeDups(array) {
  return [...new Set(array)];
}
console.log(removeDups([2, 3, 4, 5, 2, 3, 4, 5]));
