//when page load do

const gallery = document.getElementById("works");
const works = document.querySelector(".works");

const contact = document.getElementById("social");
const social = document.querySelector(".contacts").children
// scroll on gallery section
window.onscroll = function () {
  function animationStart(index) {
    setTimeout(() => {
      works.children[index].classList.add(`left-0`);
      works.children[index].classList.remove(`rotate-45`);
      setTimeout(() => {
        works.children[index].classList.remove(`relative`);
      }, 700);
    }, 400 * index);
  }
  
  function animationStartForContacts(index) {
    setTimeout(() => {
       
                 social[index].classList.add(`opacity-100`)
                    social[index].classList.remove(`opacity-0`)
      }, 300*index);
    }



  for (let index = 0; index < works.children.length; index++) {
    animationStart(index);
  }
  for (let index = 0; index < social.length; index++) {
    animationStartForContacts(index)}

  if (gallery.getBoundingClientRect().top < 800) {
    animationStart();
  }
  if (contact.getBoundingClientRect().top < 790 || window.innerWidth > 500){
    animationStartForContacts()
  }
}