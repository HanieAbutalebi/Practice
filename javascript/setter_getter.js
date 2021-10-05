const person = {
  _username: "web dev simplified",
  firstName: "Kyle",
  lastName: "Cook",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },

  //////////////
  get username() {
    return this._username;
  },
  set username(value) {
    if (value.length > 5) {
      this._username = value;
    }
  },
};
person.fullName = "Sally Smith";
console.log(person.fullName);

person.fullName;

person.username = "Johnny";
console.log(person.username);
///////////////////////////////////////////

const birth = {
  age: 25,
  get birthYear() {
    const date = new Date();
    return date.getFullYear() - this.age;
  },
};
console.log(birth.birthYear);
