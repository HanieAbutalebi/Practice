class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`I am ${this.name}`);
  }
}
class Dog extends Animal {
  constructor(name, owner) {
    super(name);
    this.owner = owner;
  }
}

class Cat extends Animal {
  // the constructor of Cat and Animal are the same so we can remove the constructor in Cat
  // constructor(name) {
  //   super(name);
  // }

  speak() {
    console.log("Meow");
  }
}

const dog = new Dog("Fuffy", "Kyle");
const cat = new Cat("cat");
console.log(dog);
console.log(cat.speak());
///////////////////////////////////////////////////////////
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Janitor extends Person {
  constructor(name, numberOfMops) {
    super(name);
    this.numberOfMops = numberOfMops;
  }
  clean() {
    console.log(`clean with ${this.numberOfMops} Mops`);
  }
}
const janitor = new Janitor("Jerry", 5);
console.log(janitor.clean());
