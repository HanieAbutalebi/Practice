function person(name, age) {
  this.name = name;
  this.age = age;
  this.printName = function () {
    console.log(this.name);
  };
}

const persons = new person("kyle", 25);
const person2 = Object.create(persons);
person2.name = "John";
console.log(person2);
console.log(persons);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(persons)));
persons.printName();

//doesn't have any prototype
console.log(Object.create(null));

//has protot ype
console.log({});

console.log(Object.getPrototypeOf(person2) === persons);

function secondperson(name, age) {
  this.name = name;
  this.age = age;
}
secondperson.prototype.printName = function () {
  console.log(this.name);
};
secondperson1 = new secondperson("name", 22);
console.log(secondperson1);
console.log(secondperson);
secondperson1.printName();

secondperson.printHi = function () {
  console.log("hi");
};
secondperson.printHi();
