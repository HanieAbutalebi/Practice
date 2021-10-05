if (Math.double == null) {
  Math.double = function (number) {
    return number * 2;
  };
}

if (Math.max == null) {
  Math.max = function (...numbers) {
    return numbers[0];
  };
}
