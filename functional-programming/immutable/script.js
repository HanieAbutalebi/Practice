const person = {
  name: "Kyle",
};
Object.freeze(person);
person.name = "John";
console.log(person);
///////////////////////////////////////

const person2 = deepFreeze({
  name: "Kyle",
  friends: ["John", "Lusi"],
  address: {
    street: "1234",
  },
});
// can not change
person2.address.street = "1";
console.log(person2);

const newPerson = deepFreeze({
  ...person2,
  address: { ...person2.address, street: "1" },
});
console.log(newPerson);
// nested freeze function
function deepFreeze(object) {
  Object.values(object).forEach((value) => {
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  });
  return Object.freeze(object);
}
