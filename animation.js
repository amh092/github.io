//when page load do 

const gallery = document.getElementById('works')
const works = document.querySelector('.works').children


window.onscroll = function (){
if(gallery.getBoundingClientRect().top < 800 )
for (let index = 0; index < works.length; index++) {
    works[index].classList.add(`left-0`)
    works[index].classList.remove(`rotate-45`)
    setTimeout(() => {
        works[index].classList.remove(`relative`)
    }, 900);

    
    
}

else if(gallery.getBoundingClientRect().top > 900 )
for (let index = 0; index < works.length; index++) {
    works[index].classList.remove(`left-0` )
    works[index].classList.add(`left-80`)
    works[index].classList.add(`rotate-45`)
    works[index].classList.add(`relative`)

    

    
}
console.log(gallery.getBoundingClientRect().top);
}
