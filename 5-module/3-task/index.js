function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let arrows = [...document.querySelectorAll('.carousel__arrow')];
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let slides = [...carouselInner.querySelectorAll('.carousel__slide')];
  let counter = 0;
  let carouselWidth = carouselInner.offsetWidth;

  function setArrowsVisibility() {
    if (counter === 0) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = '';
    } else if (counter === slides.length - 1) {
      arrowLeft.style.display = '';
      arrowRight.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
    }
  }

  setArrowsVisibility();

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function (e) {
      if (e.currentTarget === arrowRight && counter < slides.length - 1) {
        counter++;
      }

      if (e.currentTarget === arrowLeft && counter > 0) {
        counter--;
      }

      setArrowsVisibility();

      carouselInner.style.transform = `translateX(${-carouselWidth * counter}px)`;
    });
  }
}
