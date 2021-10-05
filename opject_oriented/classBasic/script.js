// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// person.prototype.printName = function () {
//   console.log(this.name);
// };

// secondperson.printHi = function () {
//   console.log("hi");
// };
// person.goodName = "Kyle";

// console.log(person.goodName);
// secondperson.printHi();

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(this.name);
  }
  static printHi() {
    console.log("hi");
  }
  static goodName = "Smith";
}
//static just use in this class and can't call them by other class

const persons = new person("Kyle", 23);
console.log(persons);

console.log(person.goodName);

console.log(person.printHi());

//error because the function is static
// console.log(persons.printHi());
///////////////////////////////////////////////////////
function createUser(email, password, language) {
  return {
    email,
    password,
    language,
    printPassword() {
      console.log(this.password);
    },
  };
}

console.log(createUser("test@test.com", "password", "English"));

//create user by prototype
function User(email, password, language) {
  this.email = email;
  this.password = password;
  this.language = language;
}
User.prototype.printPassword = function () {
  console.log(this.password);
};
const user = new User("test@test.com", "password", "English");
console.log(user);

//create class
class User2 {
  constructor(email, password, language) {
    this.email = email;
    this.password = password;
    this.language = language;
  }
  get name() {
    return this.email.split("@")[0];
  }
  set name(value) {
    const [, suffix] = this.email.split("@");
    this.email = value + "@" + suffix;
  }
  printPassword2() {
    console.log(this.password);
  }
}
const user2 = new User2("test@test.com", "password", "English");
user2.name = "Kyle";
console.log(user2);
