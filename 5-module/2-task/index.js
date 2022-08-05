function toggleText() {
  let toggle = document.querySelector('.toggle-text-button');
  let textLine = document.getElementById('text');

  toggle.addEventListener('click', function () {
    if (textLine.getAttribute('hidden')) {
      textLine.removeAttribute('hidden');
    } else {
      textLine.setAttribute('hidden', 'hidden');
    }
  });
}
