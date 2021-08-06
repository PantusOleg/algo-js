const arr = [-1, 10, 6, 8, 9, 1, 4, 86, 33, 11, 19, 27, 31, 1, 12];

let count = 0;

const sort = (array) => {
  let minIndex;
  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    for (let k = i + 1; k < array.length; k++) {
      if (array[k] < array[minIndex]) minIndex = k;
      count++;
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
  return array;
};

console.log(sort(arr));
console.log(count);
