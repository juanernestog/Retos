describe("Transform function", () => {
  test("it should return an array of the returns of the in fun", () => {
    const input = [[1, 2, 3], duplicate];

    const output = [2, 4, 6];
    const input2 = [[1, 2, 3], increase];

    const output2 = [11, 12, 13];
    expect(transform(...input)).toEqual(output);
    expect(transform(...input2)).toEqual(output2);
  });
});

const transform = function (arr, fun) {
  const copyItems = [];
  arr.forEach((arr) => {
    copyItems.push(fun(arr));
  });
  return copyItems;
};
function transform2(arr, func) {
  return arr.map(func);
}
const transform3 = (arr, func) => arr.map((x) => func(x));
var duplicate = function (i) {
  return i * 2;
};
transform([1, 2, 3], duplicate); // => [2, 4, 6]

var increase = function (i) {
  return i + 10;
};
transform([1, 2, 3], increase); // => [11, 12, 13]

const filter = function (arr, fun) {
  const copyItems = [];
  arr.forEach((arr) => {
    if (fun(arr)) {
      copyItems.push(fun(arr));
    }
  });
  return copyItems;
};

var even = function (i) {
  return i % 2 === 0;
};
let print1 = filter([1, 2, 3, 4], even); // => [2, 4]

var none = function (i) {
  return false;
};
let print2 = filter([1, 2, 3, 4], none); // => []
console.log(print1, print2);
