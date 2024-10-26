document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});




let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > 5) {
    currentSlide = 0;
  }
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 5;
  }
  updateSlide();
});

function updateSlide() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

updateSlide();