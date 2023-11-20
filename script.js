const carouselItems = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });
  carouselItems[index].style.display = "block";
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}
showSlide(currentIndex);

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);
