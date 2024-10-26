



function toggleNav() {
  document.querySelector('.navigation').classList.toggle('active');
}

let currentSlide = 0;


document.querySelector('.next').addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > 2) {
    currentSlide = 0;
  }
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 2;
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

