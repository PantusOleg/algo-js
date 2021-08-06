const input1 = [1, 2, 2, 1];
const input2 = [2, 2];
// output [2, 2]
const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];

/* const intersect = (arr1 = [], arr2 = []) => {
  const output = [];
  for (const item of arr1) {
    const i = arr2.findIndex((i) => i === item);
    if (arr2[i]) {
      output.push(arr2[i]);
      arr2[i] = undefined;
    }
  }
  return output;
}; */

const intersect = (arr1 = [], arr2 = []) => {
  const res = [];

  const map = arr1.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {});

  for (const num of arr2) {
    if (map[num]) {
      res.push(num);
      map[num] -= 1;
    }
  }

  return res;
};

console.log(intersect(input1, input2));
console.log(intersect(input3, input4));
