const array = [1, 2, 3, 4];

//is not pure function
function addElement(element) {
  array.push(element);
}
addElement(5);
console.log(array);

//is not pure function
function addElement2(a, element) {
  a.push(element);
}
addElement2(array, 6);
console.log(array);

//is pure function
function addElement3(a, element) {
  return [...a, element];
}
console.log(addElement3(array, 7));
console.log(array);

//is pure function
const TAXES = 1.07;
function addElement4(a, element) {
  return [...a, element, TAXES];
}
console.log(addElement4(array, 7));
console.log(array);

////////////////////////////////////////////////////
const person = {
  name: "Kyle",
  friends: ["John", "Sally"],
};
//not pure function
function addFriend(friendNmae) {
  person.friends.push(friendNmae);
}
addFriend("Joe");
console.log(person);

// function addFriend2(p, friendName) {
//   return { ...p, friends: [...p.friends, friendName] };
// }

// a pure function into another pur function => pure function
function addFriend2(p, friendName) {
  return { ...p, friends: addElement3(p.friends, friendName) };
}

console.log(addFriend2(person, "JOEY"));
console.log(person);
