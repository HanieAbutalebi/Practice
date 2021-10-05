const map = new Map([
  [1, "A"],
  [2, "B"],
  [3, "C"],
  [4, "D"],
]);
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

map.forEach((key, value) => {
  console.log(key, value);
});
console.log(map.size);

console.log(map.get(1));

map.set(5, "E");
console.log(map.get(5));
console.log(map.has(6));
console.log(map.has(1));

map.delete(1);
console.log(map);

map.clear();
console.log(map);
///////////////////////////////////////////
const items = [
  {
    id: 1,
    name: "Test",
    description: "Desc",
  },
  {
    id: 2,
    name: "Test 2",
    description: "Desc 2",
  },
  {
    id: 3,
    name: "Test 3",
    description: "Desc 3",
  },
];
function getitem(id) {
  return items.find((item) => item.id === id);
}
console.log(getitem(2));

///////////////////do with map instead of array///////////////////////////
const items2 = new Map([
  [
    1,
    {
      id: 1,
      name: "Test",
      description: "Desc",
    },
  ],
  [
    2,
    {
      id: 2,
      name: "Test 2",
      description: "Desc 2",
    },
  ],
  [
    3,
    {
      id: 3,
      name: "Test 3",
      description: "Desc 3",
    },
  ],
]);
function getItem2(id) {
  return items2.get(id);
}
console.log(getItem2(2));
items2.set(4, {
  id: 4,
  name: "Test 4",
  description: "Desc 4",
});
console.log(items2);
console.log(items2.get(4));
console.log(items2.has(4));
