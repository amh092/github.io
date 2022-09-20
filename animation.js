//when page load do

const gallery = document.getElementById("works");
const works = document.querySelector(".works").children;

const contact = document.getElementById('social')
const social = document.querySelector('.contacts').children
// scroll on gallery section 
window.onscroll = function () {
  if (gallery.getBoundingClientRect().top < 800)
    for (let index = 0; index < works.length; index++) {
      works[index].classList.add(`left-0`);
      works[index].classList.remove(`rotate-45`);
      setTimeout(() => {
        works[index].classList.remove(`relative`);
      }, 1000);
    }
  else if (gallery.getBoundingClientRect().top > 900)
    for (let index = 0; index < works.length; index++) {
      works[index].classList.remove(`left-0`);
      works[index].classList.add(`left-40`);
      works[index].classList.add(`rotate-45`);
      works[index].classList.add(`relative`);
    }
   if (contact.getBoundingClientRect().top < 790 || window.innerWidth > 500){
    for (let index = 0; index < social.length; index++) {
        social[index].classList.add(`opacity-100`)
        social[index].classList.remove(`opacity-0`)
      
      }}
   else if (contact.getBoundingClientRect().top > 700 || window.innerWidth > 500){
    for (let index = 0; index < social.length; index++) {
        social[index].classList.add(`opacity-0`)
        social[index].classList.remove(`opacity-100`)

       
      }
};


}


