'use-strict'
var htmlTag = document.getElementsByTagName('html')[0];
var languageSwitchBtn = document.getElementById('language')
//navbar 
var whoAmILi = document.getElementById('who-am-i')
var galleryLi = document.getElementById('gallery-li')
var contactMeLi = document.getElementById('contact-me-li')
//content
var nameField = document.getElementById('name')
var workDesc = document.getElementById('work-desc')
var mySkills = document.getElementById('my-skills')
var frameworks = document.getElementById('frameworks')
var gallery = document.getElementById('gallery')
var contact = document.getElementById('contact-me')

//navbar 
    //english version 
        const englishWhoAmILi = 'Me'
        const englishGalleryLi = 'Gallery'
        const englishContactMeLi = 'Contact'
    //content 
        const englishName = 'Hello my name is Ahmed Mohammad'
        const englishDesc = 'I work as freelancer frontend web developer'
        const englishSkills = 'My Skills'
        const englishFrameworks = 'Frameworks'
        const englishGallery = "Work gallery"
        const englishContactMe = 'Contact Me '
    //arabic version 
        const arabicWhoAmILi = 'انا'
        const arabicGalleryLi = 'معرض الاعمال'
        const arabicContactMeLi = 'تواصل معي'
    //content 
        const arabicName = 'مرحبا اسمي أحمد محمد'
        const arabicDesc = '   اعمل مستقل كمتخصص في عمل واجهات مواقع الكترونية'
        const arabicSkills = 'التقنيات التي اجيدها'
        const arabicFrameworks = 'اطر الاعمال التي اجيدها'
        const arabicContactMe = 'تواصل معي'
        const arabicGallery = "معرض الاعمال" 
//--end of navbar--//

const language = () => {
    if (localStorage.getItem('lang') === 'en') {

        htmlTag.lang = localStorage.getItem('lang')
        htmlTag.dir = 'rtl'
        languageSwitchBtn.innerText = 'En'
        nameField.innerText = arabicName
        
        mySkills.innerText = arabicSkills
        frameworks.innerText = arabicFrameworks
        contact.innerText = arabicContactMe;
        whoAmILi.innerText = arabicWhoAmILi;
        galleryLi.innerText = arabicGalleryLi
        contactMeLi.innerText = arabicContactMeLi
        gallery.innerText = arabicGallery;

        workDesc.innerHTML = ''
        for (let index = 0; index < arabicDesc.length; index++) {
            setTimeout(() => {
                workDesc.innerHTML +=  arabicDesc.charAt(index)
            }, 100*index);
            
        }
        }
        else {
            htmlTag.dir = 'ltr'
            htmlTag.lang = localStorage.getItem('lang')
            gallery.innerText = englishGallery
            languageSwitchBtn.innerText = 'عربي'
            nameField.innerText = englishName
            workDesc.innerText = ''
            for (let index = 0; index < englishDesc.length; index++) {
                setTimeout(() => {
                    workDesc.innerHTML +=  englishDesc.charAt(index)
                }, 60*index);
                
            }
    
               
            mySkills.innerText = englishSkills
            frameworks.innerText = englishFrameworks
            contact.innerText = englishContactMe;
            whoAmILi.innerText = englishWhoAmILi;
            galleryLi.innerText = englishGalleryLi
            contactMeLi.innerText = englishContactMeLi
        }    
}

window.onload = function(){

   language()
}

languageSwitchBtn.addEventListener('click',function(){
    if(localStorage.getItem('lang') === 'ar'){
        localStorage.setItem('lang','en')
    }
    else {
        localStorage.setItem('lang','ar')
    }
    language()
})
     

  
