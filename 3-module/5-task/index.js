function getMinMax(str) {
  let result = {};
  let els = str.split(' ').filter(el => isFinite(el)).sort((a, b) => a - b);
  result['min'] = els[0] - 0;
  result['max'] = els[els.length - 1] - 0;
  return result;
}
