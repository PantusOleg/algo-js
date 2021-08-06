const arr = [-1, 10, 6, 8, 9, 1, 4, 86, 33, 11, 19, 27, 31, 1, 12];

let count = 0;

const sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k + 1] < array[k]) {
        [array[k + 1], array[k]] = [array[k], array[k + 1]];
      }
      count++;
    }
  }
  return array;
};

console.log(sort(arr));
console.log(count);
