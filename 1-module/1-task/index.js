let f = 1;

function factorial(n) {
  if (n === 0 || n === 1) {
    f = 1;
  } else {
    while (n > 0) {
      f = f * n;
      n--;
    }
  }
  return f;
}
