const arrayNumber = [2, 3, 5, 7, 0, 5];
const divs = document.querySelectorAll("div");
// const divs = [...document.querySelectorAll("div")];
const array = ["A", "B", "C", "D"];
const person = {
  name: "Kyle",
  age: 25,
  favoriteFood: "Rice",
  address: {
    street: "123 Main St",
    city: "Somewhere",
    zipcode: "55555",
  },
};
function sum(multiplier, ...numbers) {
  console.log(multiplier);
  console.log(numbers);
  return numbers.reduce((sum, number) => sum + number, 0);
}
sum(2, 3, 4);
sum(...arrayNumber);

function concatName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
const names = ["Kyle", "Cook"];
// concatName("Kyle", "Cook");
// concatName(...names);

const newArray = [...arrayNumber];
arrayNumber.push(5);
console.log(newArray);
console.log(arrayNumber);

[...divs].map((div) => console.log(div));

const [first, second, ...rest] = array;
console.log(first, second, rest);

const { name, age, ...rests } = person;
console.log(name, age, rests);

const person2 = { ...person };
person.name = "nick;";
console.log(person);
console.log(person2);

const details = {
  name: "Sally",
  age: 32,
};
const person3 = { ...person, ...details };
console.log(person3);
const person4 = { ...details, ...person };
console.log(person4);
