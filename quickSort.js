const arr = [
  -1, 10, 6, 8, 9, 1, 4, 86, 33, 11, 19, 27, 31, 1, 12, -1, 10, 6, 8, 9, 1, 4,
  86, 33, 11, 19, 27, 31, 1, 12, -1, 10, 6, 8, 9, 1, 4, 86, 33, 11, 19, 27, 31,
  1, 12, -1, 10, 6, 8, 9, 1, 4, 86, 33, 11, 19, 27, 31, 1, 12, 81, 6667, 99, 55,
  88, 1010, 101111, 11111, 5666,
];

const quickSort = (array = []) => {
  if (array.length <= 1) return array;

  const greater = [];
  const smaller = [];
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (array[i] > pivot) {
      greater.push(array[i]);
    } else {
      smaller.push(array[i]);
    }
  }
  return [...quickSort(smaller), pivot, ...quickSort(greater)];
};

const before = new Date().getMilliseconds();
const sorted = quickSort(arr);
console.log(sorted);
const after = new Date().getMilliseconds();
console.log(`Time: ${after - before} ms`);

