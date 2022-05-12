var dots = document.getElementById("dots");
var btnText = document.getElementById("anyBtn");
var more768 = document.getElementById("more768");
var more320 = document.getElementById("more320");
var arrow = document.getElementsByClassName("arrow");
var backSize = document.querySelector(".page__style");

function openText() {
  if (window.screen.width <= 768) {
    if (dots.style.display === "none") {
      initialState()
    } else {
      dots.style.display = "none";
      arrow[0].setAttribute("transform", "rotate(180)")
      btnText.innerHTML = "Скрыть";
      if (window.screen.width <= 768) {
        more768.style.display = "inline"
      }
      if (window.screen.width <= 320) {
        more320.style.display = "inline"
        backSize.style.height = "600px"
      }
    }
  }
}

function initialState(flag) {
  if (flag) {
    more768.style.display = "inline"
    more320.style.display = "inline"
    backSize.style.height = window.screen.width <= 768 ? "430px" : ""
  }
  dots.style.display = "inline";
  btnText.innerHTML = "Читать далее";
  arrow[0].setAttribute("transform", "rotate(0)")
  if (window.screen.width <= 768) {
    more768.style.display = "none"
  }
  if (window.screen.width <= 320) {
    more320.style.display = "none"
    backSize.style.height = "430px"
  }
}

initialState(true)
window.openText = openText
window.addEventListener('resize', function (event) {
  initialState(true)
}, true)