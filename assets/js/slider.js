function slider() {
  /* slider start */
  let slideIndex = 1;
  showSlides(slideIndex);

  setInterval(() => {
    showSlides((slideIndex += 1));
  }, 4000);

  function plusSlide(n) {
    showSlides((slideIndex += n));
  }

  const slideLeftButton = document.getElementById("slider-left-button");
  slideLeftButton.addEventListener("click", () => {
    plusSlide(-1);
  });
  const slideRightButton = document.getElementById("slider-right-button");
  slideRightButton.addEventListener("click", () => {
    plusSlide(1);
  });

  function showSlides(n) {
    const slides = document.querySelectorAll(".slider-item");
    const dots = document.querySelectorAll(".slider-dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((element) => {
      element.style.display = "none";
    });
    dots.forEach((element) => {
      element.className = element.className.replace(" active", "");
    });
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }

  const dots = document.querySelectorAll(".slider-dot");
  dots.forEach((element) => {
    element.addEventListener("click", () => {
      let index = [...element.parentElement.children].indexOf(element);
      showSlides((slideIndex = index + 1));
    });
  });
  /* slider end */
}

export default slider();
