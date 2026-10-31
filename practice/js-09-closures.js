// Closures practice
function makeCounter(start = 0) {
  let count = start;
  return {
    inc: () => ++count,
    dec: () => --count,
    value: () => count,
  };
}

const counter = makeCounter(5);
counter.inc();
counter.inc();
counter.dec();
console.log(counter.value()); // 6

const multiplyBy = (n) => (x) => x * n;
console.log([1, 2, 3].map(multiplyBy(3))); // [3, 6, 9]
