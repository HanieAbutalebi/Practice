const propertyName = "name";
const firstName = "Kyle";
const index = 1;
const age = 25;
const person = {
  [propertyName]: firstName,
  [`age${index}`]: age,
  sayHi() {
    console.log("Hi");
  },
};

person[propertyName] = firstName;
console.log(person);
