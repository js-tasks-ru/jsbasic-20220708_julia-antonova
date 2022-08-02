function camelize(str) {
  if (!str) {
    return str;
  }

  let arr = str.split('-');

  arr = arr.map((el, index) => {
    if (index === 0) {
      return el;
    } else {
      return el[0].toUpperCase() + el.slice(1);
    }
  });
  
  return arr.join('');
}
