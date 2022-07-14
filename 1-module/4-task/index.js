function checkSpam(str) {
  str = str.toLowerCase().split(' ').join('');
  return !(str.indexOf('1xbet') === -1 && str.indexOf('xxx') === -1);
}
