let active = Math.floor(Math.random() * 5);

function slidePlugin(active) {
  const slides = document.querySelectorAll('.slide');

  slides[active].classList.add('active');

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      clearActiveClass();
      slide.classList.add('active');
    });
  });

  function clearActiveClass() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slidePlugin(active);
