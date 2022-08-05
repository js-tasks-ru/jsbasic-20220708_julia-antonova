function hideSelf() {
  let button = document.querySelector('.hide-self-button');
  button.addEventListener('click', function () {
    this.setAttribute('hidden', 'hidden');
  });
}
