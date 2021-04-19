//giving an integer rope length, find the max product of the  smaller integers gotten from dividing the rope's length into smaller portion
let number = 2;

function maxProduct(n) {
  const t0 = performance.now();
  let maxProduct = 1;
  //10 =  5 * 5
  //20 = 5 * 5 * 5 * 5
  //12 = 2 * 2 * 2 * 3
  //15 = 7 * 2 * 2* 2 * 2

  maxProduct = recursion(n);
  const t1 = performance.now();
  console.log(`RAn for ${t1 - t0}`);
  return maxProduct;
}

function recursion(n) {
  let max = n;

  if (isPrime(n)) return max;
  let { a, b } = getAValue(n);

  return (max = recursion(a) * recursion(b));
}
function getAValue(n) {
  if (n % 2 === 0) {
    a = b = n / 2;
  } else {
    a = Math.floor(n / 2);
    b = a + 1;
  }
  return { a, b };
}

function isPrime(n) {
  let i = 2;
  if (n === 1 || n === 2) return true;
  while (++i <= n / 2) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(maxProduct(number));
