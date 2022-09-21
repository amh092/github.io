//when page load do
const body = document.getElementById('body')
const wait = document.getElementById('wait')
const gallery = document.getElementById("works");
const works = document.querySelector(".works");

const contact = document.getElementById("social");
const social = document.querySelector(".contacts")


window.onload = 
function functionName(){
 
        
        body.classList.add('opacity-100')

}
// scroll on gallery section
window.onscroll = function () {
    if (gallery.getBoundingClientRect().top < 800) {
        for (let index = 0; index < works.children.length; index++) {
          animationStart(index);
        }
      }
        if (contact.getBoundingClientRect().top  < 750 || window.innerWidth > 500){
        for (let index = 0; index < social.children.length; index++) {
          animationStartForContacts(index)}
        }
      

  function animationStart(index) {
    setTimeout(() => {
      works.children[index].classList.add(`left-0`);
      works.children[index].classList.remove(`rotate-45`);
      setTimeout(() => {
        works.children[index].classList.remove(`relative`);
      }, 700);
    }, 90 * index);
  }
  
  function animationStartForContacts(index) {
    setTimeout(() => {
       
                 social.children[index].classList.add(`opacity-100`)
                    social.children[index].classList.remove(`opacity-0`)
      }, 100*index);
    }


 
    animationStart();
  
 
    animationStartForContacts()
  

}