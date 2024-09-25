const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;


images[currentIndex].classList.add('active');

nextBtn.addEventListener('click', () => {
  images[currentIndex].classList.remove('active'); // Ocultar imagen actual
  currentIndex = (currentIndex + 1) % images.length; // Moverse a la siguiente imagen
  images[currentIndex].classList.add('active'); // Mostrar la nueva imagen
});

prevBtn.addEventListener('click', () => {
  images[currentIndex].classList.remove('active'); // Ocultar imagen actual
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Moverse a la imagen anterior
  images[currentIndex].classList.add('active'); // Mostrar la nueva imagen
});
