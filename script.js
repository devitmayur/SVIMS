document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index >= totalItems) index = 0;
      if (index < 0) index = totalItems - 1;
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  
    prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
  
    // Optional: Auto-slide every 5 seconds
    setInterval(() => showSlide(currentIndex + 1), 8000);
  });
  