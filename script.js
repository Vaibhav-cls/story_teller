/* NAVBAR SETTINGS FOR NOT COVERING THE TOP OF THE SECTIONS ON SCROLLING THROUGHOUT THE WEBPAGE */
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offsetPosition = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
/* HAMBURGER CONFIGURATION*/
let dropdownButton = document.getElementById("dropdown-btn");
let dropdown = document.getElementById("dropdown");
let isOpen = false;
dropdownButton.addEventListener('click',function(){
  if(isOpen == true){
    dropdown.style.padding = "0px";
    dropdown.style.height = "0px";
    isOpen = false;
  }
  else{
    dropdown.style.padding = "8px 0px";
    dropdown.style.height = "auto";
    isOpen = true;
  }
})
/* THIS SECTION HELPS TO CLEAR THE INPUT SEARCH FIELD WHEN THERE IS SOME CONTENT WRITTEN INSIDE IT BY ENABLING THE CROSS BUTTON */
document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('inputSearch');
    const clearButton = document.getElementById('clearbtn'); 
  inputField.addEventListener('input', function () {
    if (inputField.value !== '') {
      clearButton.style.display = 'block';
    } else {
      clearButton.style.display = 'none';
    }
  });
  clearButton.addEventListener('click', function () {
    inputField.value = '';
    clearButton.style.display = 'none';
  });
});
/* THE SECTION ENSURES THE SMOOTH SCROLL OF THE SLDIERS OF THE COLLECTIONS SECTION , EACH SLIDER HAS ITS OWN CODE*/
const carousel_1 = document.querySelector(".container-1");
const arrowBtns_1 = document.querySelectorAll(".btn_1")
const firstCardWidth_1 = carousel_1.querySelector(".img").offsetWidth;
arrowBtns_1.forEach(btn =>{
  btn.addEventListener("click",() =>{
    carousel_1.scrollLeft += btn.id === "left" ? -firstCardWidth_1 : firstCardWidth_1;
  })
})
const carousel_2 = document.querySelector(".container-2");
const arrowBtns_2 = document.querySelectorAll(".btn_2")
const firstCardWidth_2 = carousel_2.querySelector(".img").offsetWidth;
arrowBtns_2.forEach(btn =>{
  btn.addEventListener("click",() =>{
    carousel_2.scrollLeft += btn.id === "left" ? -firstCardWidth_2 : firstCardWidth_2;
  })
})
const carousel_3 = document.querySelector(".container-3");
const arrowBtns_3 = document.querySelectorAll(".btn_3")
const firstCardWidth_3 = carousel_3.querySelector(".img").offsetWidth;
arrowBtns_3.forEach(btn =>{
  btn.addEventListener("click",() =>{
    carousel_3.scrollLeft += btn.id === "left" ? -firstCardWidth_3 : firstCardWidth_3;
  })
})
