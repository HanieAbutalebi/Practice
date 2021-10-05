// import { person } from "./module.js";

const sym1 = Symbol("Name");
const sym2 = Symbol("Name");
console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);

const person = {
  age: 25,
  [sym1]: "Kyle",
};
console.log(person);

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
console.log(JSON.stringify(person));
console.log(Object.getOwnPropertySymbols(person));
