const gallery1 = document.getElementById("works");
const works = document.querySelector(".works");
const header = document.getElementById('header');
const me = document.getElementById('me');

const contactMe = document.getElementById("social");
const social = document.querySelector(".contacts")

function animationStart(index) {
   
  setTimeout(() => {
    works.children[index].classList.add(`left-0`);
    works.children[index].classList.remove(`rotate-45`);
    setTimeout(() => {
      works.children[index].classList.remove(`relative`);
    }, 200);
  }, 300 * index);
}
function animationStartForContacts(index) {
  setTimeout(() => {
     
               social.children[index].classList.add(`opacity-100`)
                  social.children[index].classList.remove(`opacity-0`)
    }, 100*index);
  }
  function headerBlack(){
    header.classList.remove('bg-transparent')
    header.classList.add('bg-[rgba(0,0,0,.7)]')
    header.classList.add('fixed')

  
  }
  function headerTransparent(){
    header.classList.remove('bg-[rgba(0,0,0,.7)]');
    header.classList.remove('fixed')
    header.classList.add('bg-transparent')
  }
// scroll on gallery section
window.onscroll = function () {
    if (gallery1.getBoundingClientRect().top < 800) {
        for (let index = 0; index < works.children.length; index++) {
          animationStart(index);
        }
       
      }
        if (contactMe.getBoundingClientRect().top  < 750 || window.innerWidth > 500){

          setTimeout(()=>{
            for (let index = 0; index < social.children.length; index++) {
            animationStartForContacts(index)
            }

          },800)
         
        }

        if(me.getBoundingClientRect().top <0){
         headerBlack()
      
        }
        else{
          headerTransparent()
        }
       
     
       
        
}
