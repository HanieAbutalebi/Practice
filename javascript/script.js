const array = ["A", "B", "C", "D", ["E", "F"]];
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

// const {
//   age,
//   name,
//   favoritrFood,
//   address: { street },
// } = address;

const [first, second, third, fourth, [fifth, sixth], seventh = "363548732"] =
  array;
console.log(fifth, sixth, seventh);
// const newone = person;
// console.log(newone);

// const firstName = person.name;
// const age = person.age;
// console.log(firstName, age);

// const { name, age } = person;
// console.log(name, age);

// const { name: firstName, age } = person;
// console.log(firstName);
// console.log(age);

// const { address } = person;
// const { street } = address;
// console.log(address);
// console.log(street);

const {
  address: { street, city, zipcode = "12345" },
} = person;
console.log(street);
console.log(city);
console.log(zipcode);

// make a object that contain most of variable of another object is not true
// function addAndMultiply(a, b) {
//   return { sum: a + b, product: a * b };
// }
// const { sum, product } = addAndMultiply(2, 3);
// console.log(sum);
// console.log(product);

function nameToFirstAndLast(fullname) {
  // return az an array
  // return fullname.split(" ");

  // return az an object
  const [firstName, lastName] = fullname.split(" ");
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
// related to return array function
// const [firstName, lastName] = nameToFirstAndLast("Kyle Cook");
// console.log(firstName);
// console.log(lastName);

//  related to return object function
const { firstName, lastName } = nameToFirstAndLast("Kyle Cook");
console.log(firstName);
console.log(lastName);

// return az an array
// function addAndMultiple(options) {
//   const a = options.a;
//   const b = options.b;
//   return [a + b, a * b];
// }
// const result = addAndMultiple({ a: 2, b: 3 });
// console.log(result);

// const [sum, product] = addAndMultiple({ a: 2, b: 3 });
// console.log(sum, product);

function addAndMultiple({ a, b = 4 }) {
  return [a + b, a * b];
}
const [sum, product] = addAndMultiple({ a: 2 });
console.log(sum, product);
