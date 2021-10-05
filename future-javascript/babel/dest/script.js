"use strict";

var _console, _person$address;

var a = [1, 2, 3];

(_console = console).log.apply(_console, a);

var person = {
  address: {
    street: "1234"
  }
};
console.log(person === null || person === void 0 ? void 0 : (_person$address = person.address) === null || _person$address === void 0 ? void 0 : _person$address.street);