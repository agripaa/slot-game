const slide = document.querySelector(".toggleButton");
const menu = document.querySelector(".menu");
var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

slide.addEventListener("click", function () {
  menu.classList.toggle("active");
  console.log(menu);
});
