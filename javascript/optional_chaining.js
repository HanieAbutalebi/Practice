const kyle = {
  name: "kyle",
  age: 25,
  address: {
    street: "123",
  },
  sayHi() {
    console.log("hi");
  },
  hobbies: ["bowling", "weight lifting"],
};
function printstreet(person) {
  if (person && person.address) {
    console.log(person.address.street);
  }
  // console.log(person && person.address && person.address.street);
}
printstreet(kyle);
// printstreet(undefined);

function callSayHi(person) {
  person?.sayHi?.();
}
callSayHi(kyle);

function hobbiesOne(person) {
  console.log(person?.hobbies?.[0]);
}
hobbiesOne(kyle);
