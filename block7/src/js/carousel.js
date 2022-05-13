showSlides(1, 'brandSlide', 'brandDot', 2);
showSlides(1, 'technicSlide', 'technicDot', 1);
if (window.screen.width <= 768) {
  showSlides(1, 'priceSlide', 'priceDot');
}

function currentSlide(n, slidesName, dotName) {
  showSlides(n, slidesName, dotName);
}

function showSlides(n, slidesName, dotName, disableComponent) {
  let slideIndex = n;
  let slides = document.getElementsByClassName(slidesName);
  if (window.screen.width <= 768) {
    let dots = document.getElementsByClassName(dotName);
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
    slides[slideIndex - 1].style.display = "block";
  }
}
function initialState(slidesName, dotName, disableComponent, blockStyle) {

  let slides = document.getElementsByClassName(slidesName);
  let dots = document.getElementsByClassName(dotName);
  let length = window.screen.width <= 1440 ? slides.length - disableComponent : slides.length

  for (let i = 0; i < length; i++) {

    slides[i].style.display = blockStyle;
  }
  for (let i = length; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}
window.currentSlide = currentSlide
window.addEventListener('resize', function (event) {
  initialState('brandSlide', 'brandDot', 2, "block");
  initialState('technicSlide', 'technicDot', 1, "block");
  if (window.screen.width <= 768) {
    initialState('priceSlide', 'priceDot', 0, "block");
  } else {
    initialState('priceSlide', 'priceDot', 0, "table-row");
  }
}, true)