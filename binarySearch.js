const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const search = (array, item) => {
  let middle;
  const check = (start, end) => {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      return middle;
    }
    if (item > array[middle]) {
      return check(middle + 1, end);
    } else {
      return check(start, middle - 1);
    }
  };
  return check(0, array.length);
};
