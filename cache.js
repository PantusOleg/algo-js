// cache fn with one arg
const cacheFn = (fn) => {
  const cache = new Map();
  return (arg) => {
    const cached = cache.get(arg);
    if (cached) return cached;
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
};

const factorial = (n) => {
  let result = 1;
  while (n !== 1) {
    result *= n;
    n--;
  }
  return result;
};

const fn = cacheFn(factorial);

fn(5);
fn(4);
fn(5);
fn(4);
