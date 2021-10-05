function greet(firstName = "Kyle", lastName) {
  lastName = lastName || "John";
  console.log(`${firstName}, ${lastName}`);
}

// show: mary, John
greet("mary", "");
greet("mary", null);
greet("mary", undefined);
greet("mary");
greet("mary", 0);

// show: mary, may
greet("mary", "may");

////////////////////////////////////////////////////

function greet2(firstName = "Kyle", lastName) {
  lastName = lastName ?? "smith";
  console.log(`${firstName}, ${lastName}`);
}

//just when use null and undefined replace with smith
greet2("mary", null);
greet2("mary", undefined);
greet2("mary");
//
greet2("mary", "");
greet2("mary", 0);
