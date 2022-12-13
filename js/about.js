let abcurent = document.querySelector('#about-me__current');
let abTotal = document.querySelector('#about-me__total');
let next = document.querySelector('.offer__slider-next');
let prev = document.querySelector('.offer__slider-prev');
let aboutSlide = document.querySelectorAll('.card');
let slideField = document.querySelector('.about__slider-wrapper');
let wrapper = document.querySelector(".about-me__cards");
let progressItem = document.querySelector('.card-progress-item')


 let  colorProgress = 100 / aboutSlide.length
 let progressItemWidth = colorProgress ;

 progressItem .style.width = `${colorProgress}%`

 let cardWidth ; 

 aboutSlide.forEach(item => cardWidth = +getComputedStyle(item).width.replace(/\D/g ,'') )
    

    slideField.style.width = cardWidth  * aboutSlide.length +'px' ;
    slideField.style.display = 'flex';
    wrapper.style.overflow = 'hidden';
    slideField.style.transition = ' 0.5s all'

 let ofer = 0 ;

 let slideindex = 1 ;
 if(aboutSlide.length < 10){
    abTotal.innerHTML =` 0${aboutSlide.length}`

 }else{
   abTotal.innerHTML = aboutSlide.length 
 }
 
 abcurent.innerHTML = `${slideindex}`

function wovCard(index = 1){
    aboutSlide.forEach(item => item.style.opacity = 0.5 )
      
    aboutSlide[index - 1].style.opacity = 1
}
wovCard()


next.addEventListener('click', ()=> {
    slideindex++
    progressItemWidth += colorProgress ;
        console.log(progressItemWidth,'next');

 progressItem .style.width = `${progressItemWidth}%`
   if( progressItemWidth >= 100){
       progressItemWidth = 0
    }

    if( aboutSlide.length < slideindex){
        slideindex = 1 
    }
     wovCard(slideindex)
    abcurent.innerHTML = ` 0${slideindex}`
    if(ofer == (cardWidth ) * (aboutSlide.length - 1)){
        ofer = 0 
    }
    else{
        ofer += cardWidth 
    }
    slideField.style.transform = `transLatex(-${ofer}px)`
    
})

prev.addEventListener('click', ()=> {
  slideindex--

      if( progressItemWidth == colorProgress){
       progressItemWidth = 100
    }else{
       progressItemWidth -= colorProgress ; 
    }
  
 progressItem.style.width = `${progressItemWidth}%`
 
     if( slideindex == 0){
         slideindex = aboutSlide.length 
    }
      wovCard(slideindex)
    abcurent.innerHTML = ` 0${slideindex}`

    if(ofer == 0){
        
        ofer = (cardWidth) * (aboutSlide.length - 1);
    }
    else{
        ofer -= cardWidth
    }
    slideField.style.transform = `transLatex(-${ofer}px)`
})

