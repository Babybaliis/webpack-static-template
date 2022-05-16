var dots = document.getElementById("dots");
var btnText = document.getElementById("anyBtn");
var more500 = document.getElementById("more500");
var more320 = document.getElementById("more320");
var arrow = document.getElementsByClassName("arrow");
var backSize = document.querySelector(".page__style");

function openText() {
  if (window.screen.width <= 1440) {
    if (dots.style.display === "none") {
      initialState()
    } else {
      dots.style.display = "none";
      arrow[0].style.transform = "rotate(180deg)"
      btnText.innerHTML = "Скрыть";
      if (window.screen.width <= 1440) {
        more500.style.display = "inline"
        backSize.style.height = "480px"
      }
      if (window.screen.width <= 500) {
        more320.style.display = "inline"
        backSize.style.height = "600px"
      }
    }
  } else {
    let page=document.getElementsByClassName('page__section')
      if (btnText.innerText == 'Читать далее') {
        arrow[0].style.transform = "rotate(180deg)"
        btnText.innerHTML = "Скрыть";
        let st_p = document.getElementsByClassName('st-p');
        
        let clone=document.createElement('p')
        clone.innerText=st_p[0].innerText
        clone.id='tmp'
        st_p[0].append(clone)
       
        page[0].style.height="430px";
      } else {
        arrow[0].style.transform = "rotate(0deg)"
        btnText.innerHTML = "Читать далее";
        let st_p = document.getElementsByClassName('st-p');
        st_p[0].removeChild(document.getElementById('tmp'))
        page[0].style.height="270px";
      }
    }
}

function initialState(flag) {
  if (flag) {
    more500.style.display = "inline"
    more320.style.display = "inline"
    backSize.style.height = window.screen.width <= 1440 ? "430px" : ""
  }
  dots.style.display = "inline";
  btnText.innerHTML = "Читать далее";
  arrow[0].style.transform = "rotate(0deg)"
  if (window.screen.width <= 1440) {
    more500.style.display = "none"
    backSize.style.height = "430px"
  }
  if (window.screen.width <= 500) {
    more320.style.display = "none"
    backSize.style.height = "430px"
  }
}

initialState(true)
window.openText = openText
window.addEventListener('resize', function (event) {
  initialState(true)
}, true)