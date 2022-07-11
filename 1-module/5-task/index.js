function truncate(str, maxlength) {
  if (str.length >= maxlength + 1) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}
