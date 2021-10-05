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

  // private variable
  #internalOnlyVariable = true;
  #cleaningProductCount = 10;

  //protected variable
  _cleaningProductCount2 = 11;

  set cleaningProductCounts(value) {
    if (value > 5) {
      this.#cleaningProductCount = value;
    }
    if (value < 5) {
      this._cleaningProductCount2 = value;
    }
  }

  clean() {
    this.#helperFunction();
    if (this.#internalOnlyVariable === true) {
      console.log("hi");
    }
    if (this._internalOnlyVariable2 === true) {
      console.log("hi2");
    }
    console.log(
      `clean with ${this.numberOfMops} Mops and ${
        this.#cleaningProductCount
      } cleaning products`
    );
    console.log(
      `clean with ${this.numberOfMops} Mops and ${this._cleaningProductCount2} cleaning products`
    );
  }
  //private method
  #helperFunction() {
    console.log("help");
  }
}
//can't use it because the variable is private
class Suoerjanitor extends Janitor {
  #cleaningProductCount = 100;
  _cleaningProductCount2 = 1;
}
const superj = new Suoerjanitor("Kyle", 10);
console.log(superj._cleaningProductCount2);

const janitor = new Janitor("Jerry", 5);
janitor.cleaningProductCounts = 7;
janitor._cleaningProductCounts = 3;
console.log(janitor.internalOnlyVariable);
console.log(janitor.clean());
