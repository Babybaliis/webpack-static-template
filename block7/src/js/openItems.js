


function openBrands() {
    let btnText = document.getElementById("brandBtn");
    let arrow = document.getElementsByClassName("brandArrow");

    if (window.screen.width <= 1440) {
        if(btnText.innerText=='Показать все'){
            arrow[0].style.transform= "rotate(180deg)"
            btnText.innerHTML = "Скрыть";
            let brands=document.getElementsByClassName('brandSlide');
            for (let i = 0; i < brands.length; i++) {
                brands[i].style.display = 'block';
            }
        }else{
            arrow[0].style.transform= "rotate(0deg)"
            btnText.innerHTML = "Показать все";
            let brands=document.getElementsByClassName('brandSlide');
            if (window.screen.width <= 1440) {
                for (let i = brands.length-2; i < brands.length; i++) {
                    brands[i].style.display = 'none';
                }
            }
        }
    }else{
        if(btnText.innerText=='Показать все'){
            arrow[0].style.transform= "rotate(180deg)"
            btnText.innerHTML = "Скрыть";
            let brands=document.getElementsByClassName('brandSlide');
            let brandsItem=document.getElementsByClassName('brands__item');
            let len=brands.length
            for (let i = 0; i < len; i++) {
                let clone=brands[i].cloneNode()
                brandsItem[0].appendChild(clone)
            }
        }else{
            arrow[0].style.transform= "rotate(0deg)"
            btnText.innerHTML = "Показать все";
            let brandsItem=document.getElementsByClassName('brands__item');
            let brands=document.getElementsByClassName('brandSlide');
            for (let i = 0; i <  8; i++) {
                brandsItem[0].removeChild(brands[0])
                

            }
        }
    }
  }

  function openTechnic() {
    let btnText = document.getElementById("technicBtn");
    let arrow = document.getElementsByClassName("arrowTechnic");
    if (window.screen.width <= 1440) {
        if(btnText.innerText=='Показать все'){
            arrow[0].style.transform= "rotate(180deg)"
            btnText.innerHTML = "Скрыть";
            let technic=document.getElementsByClassName('technicSlide');
            for (let i = 0; i < technic.length; i++) {
                technic[i].style.display = 'block';
            }
        }else{
            arrow[0].style.transform= "rotate(0deg)"
            btnText.innerHTML = "Показать все";
            let technic=document.getElementsByClassName('technicSlide');
            if (window.screen.width <= 1440) {
                for (let i = technic.length-1; i < technic.length; i++) {
                    technic[i].style.display = 'none';
                }
            }
        }
    }else{
        if(btnText.innerText=='Показать все'){
            arrow[0].style.transform= "rotate(180deg)"
            btnText.innerHTML = "Скрыть";
            let technic=document.getElementsByClassName('technicSlide');
            let technicItem=document.getElementsByClassName('technic__item');
            let len=technic.length
            for (let i = 0; i < len; i++) {
                let clone=technic[i].cloneNode()
                technicItem[0].appendChild(clone)
            }
        }else{
            arrow[0].style.transform= "rotate(0deg)"
            btnText.innerHTML = "Показать все";
            let technicItem=document.getElementsByClassName('technic__item');
            let technic=document.getElementsByClassName('technicSlide');
            for (let i = 0; i <  4; i++) {
                technicItem[0].removeChild(technic[0])
            }
        }
    }
  }

  window.openBrands = openBrands
  window.openTechnic = openTechnic
  