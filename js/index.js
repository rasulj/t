let total = document.querySelector('#total')
 let slide = document.querySelectorAll('.offer__slide');
 let current = document.querySelector('#current');
let circleActive = document.querySelector('.circle__items')
 let progressBar = document.querySelector('.progress-bar')
 


let dots = []
 let  bgcolor = 100 / slide.length
 let counterWidth = bgcolor;

 progressBar.style.width = `${bgcolor}%`


autoSlider()
let index = 1;

function creatCircle(){
    for( let i = 0 ; i < slide.length ; i++){
        let dot = document.createElement('div')
        dot.setAttribute('data-slide-to', i + 1)
          dot.classList.add('circle')
          circleActive.append(dot)  
          dots.push(dot)
    }
}
  creatCircle()

function wovslide(){
slide.forEach( item =>item.style.display = 'none' )
    slide[index - 1].style.display = 'block'

}

wovslide()
    
   if(slide.length < 10 ){
        total.innerHTML = `0${slide.length}`
    }
    else{
        total.innerHTML = slide.length
    }

function autoSlider(){
     let timerSlider = setTimeout(()=>{
       index++
       
        counterWidth += bgcolor
    progressBar.style.width = `${counterWidth}%`
    if( counterWidth === 100){
       counterWidth = 0
    }
        dots.forEach( dot => dot.classList.remove('active'))
          dots[index -2].classList.add('active')
            if( index > slide.length) 
                   index = 1 ;

    wovslide(index)
 
    if(index < 10){
         current.innerHTML = `0${index}`
    }
    else{
        current.innerHTML = index
    }
   
    clearInterval(timerSlider)
autoSlider()
},2000)
}



