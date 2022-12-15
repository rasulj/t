
function creatHeader(){
        let header = document.querySelector("#header")
          if(header !== null){
              let el =document.createElement('header')
        el.innerHTML = `<div class="container">
               <div class="header__body">
                 <div class="header__logo">
                     Эльбрусская <br> Прохлада 
                 </div>
                 
                 <nav class="nav ">
                     <ul class="nav__lists ">
                         <li class="nav__list "><a class="tab-list " href="./index.html" >Главная</a></li>
                         <li class="nav__list"><a  class="tab-list"href="./cotalog.html">Каталог</a></li>
                         <li class="nav__list"><a class="tab-list " href="./paymenst.html"> Как заказать</a></li>
                         <li class="nav__list"><a class="tab-list" href="./comment.html">Отзывы</a></li>
                         <li class="nav__list" ><a class="tab-list" href="./about.html">О нас</a></li>
                         <li class="nav__list" ><a class="tab-list" href="./contact.html">Контакты</a></li>
                     </ul>
                 </nav>
                 <div class="nav__contact ">
                      <div class="phone">
                          <a href="tel:+"> +7 928 076 14 98</a>  
                      </div>
                          <span class="phone__link data-model" data="data-model">Заказать обратный звонок</span>
                 </div>
                 <div class="header__burger">
                <span></span>
            </div>
            
            </div>
        </div>
    `
    header.append(el)
          }
      
        return
}
creatHeader()


const burger = document.querySelector('.header__burger')
const headerBurger =document.querySelector('.header__menu')
 let headerBody = document.querySelector(".header__body")

burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    headerBody.classList.toggle('active')
})
function creatFooter(){
    let footer = document.querySelector("#footer")
    if(footer!== null){
         let footerEl = document.createElement('footer');
    footerEl.innerHTML =`  <div class="footer">
                <div class="grid__container">
                       <div class="footer__logo">
                              Эльбрусская <br> Прохлада 
                         </div>
                        <nav class="footer-nav">
                           <ul class=" footer__nav-lists">
                               <li class=" footer__nav-list"><a class="tab-list" href="./index.html" >Главная</a></li>
                               <li class=" footer__nav-list"><a class="tab-list" href=""./cotalog.html">Каталог</a></li>
                                <li class="footer__nav-list"><a class="tab-list" href="./paymenst.html"> Как заказать</a></li>
                                <li class="footer__nav-list"><a class="tab-list" href="./comment.html">Отзывы</a></li>
                               <li class="footer__nav-list" ><a class="tab-list" href="./about.html">О нас</a></li>
                               <li class="footer__nav-list" ><a class="tab-list" href="./contact.html">Контакты</a></li>
                          </ul>
                       </nav>
                        <div class="contacts__social-networks footer__social-networks">
                      <a href="#" target="_blank" >
                        <svg width="22" height="13" color="red" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="over-color" d="M11.789 12.7944C12.3345 12.7944 12.5575 12.429 12.5512 11.9709C12.5235 10.2456 13.1907 9.31683 14.3954 10.5273C15.7282 11.8665 16.0041 12.7944 17.6226 12.7944H20.4888C21.2125 12.7944 21.4973 12.5604 21.4973 12.1932C21.4973 11.4165 20.2246 10.0458 19.1462 9.03964C17.636 7.63115 17.5653 7.59785 18.8658 5.90228C20.4789 3.7972 22.5892 1.09994 20.7226 1.09994H17.1568C16.4654 1.09994 16.4152 1.49143 16.1689 2.07463C15.2777 4.1869 13.584 6.92286 12.9409 6.50437C12.2682 6.06787 12.5763 4.339 12.6274 1.76953C12.6408 1.09094 12.6372 0.625646 11.6054 0.384449C11.042 0.25395 10.4938 0.199951 9.98509 0.199951C7.9492 0.199951 6.54477 1.05764 7.34282 1.20704C8.74994 1.47073 8.61469 4.52979 8.28687 5.85098C7.71543 8.15135 5.56758 4.0294 4.67279 1.97653C4.45693 1.48333 4.39065 1.09994 3.62036 1.09994H0.704904C0.264227 1.09994 0 1.24394 0 1.56433C0 2.10613 2.65123 7.61225 5.18243 10.3572C7.65094 13.0347 10.0908 12.7944 11.789 12.7944Z" fill="#1946BA"/>
</svg>
                      </a>
                         <a href="#" target="_blank">
                            <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  id="over-color" d="M3.31278 7H0.62561V10.5H3.31278V21H7.79139V10.5H11.0536L11.3743 7H7.79139V5.54138C7.79139 4.70575 7.96336 4.375 8.79012 4.375H11.3743V0H7.96336C4.74235 0 3.31278 1.38512 3.31278 4.03813V7Z" fill="#1946BA"/>
</svg>
                         </a>
                          <a href="#" target="_blank">
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  id="over-color" fill-rule="evenodd" clip-rule="evenodd" d="M11.2513 1.89263C14.1212 1.89263 14.4616 1.90313 15.5956 1.95388C18.5085 2.08337 19.8691 3.4335 20.0017 6.258C20.0536 7.36487 20.0635 7.69738 20.0635 10.5009C20.0635 13.3053 20.0527 13.6369 20.0017 14.7438C19.8682 17.5656 18.5112 18.9184 15.5956 19.0479C14.4616 19.0986 14.123 19.1091 11.2513 19.1091C8.38146 19.1091 8.04108 19.0986 6.90799 19.0479C3.98794 18.9175 2.6345 17.5613 2.50194 14.7429C2.44999 13.636 2.43924 13.3044 2.43924 10.5C2.43924 7.6965 2.45088 7.36487 2.50194 6.25712C2.6354 3.4335 3.99242 2.0825 6.90799 1.953C8.04198 1.90313 8.38146 1.89263 11.2513 1.89263ZM5.73191 10.5C5.73191 7.52238 8.20321 5.10825 11.2513 5.10825C14.2995 5.10825 16.7708 7.52238 16.7708 10.5C16.7708 13.4785 14.2995 15.8926 11.2513 15.8926C8.20321 15.8926 5.73191 13.4776 5.73191 10.5ZM15.6986 4.89562C15.6986 4.2 16.2763 3.63563 16.9893 3.63563C17.7014 3.63563 18.2783 4.2 18.2783 4.89562C18.2783 5.59125 17.7014 6.15562 16.9893 6.15562C16.2763 6.15562 15.6986 5.59125 15.6986 4.89562Z" fill="#1946BA"/>
<path  id="over-color" fill-rule="evenodd" clip-rule="evenodd" d="M11.2513 1.89263C14.1212 1.89263 14.4616 1.90313 15.5956 1.95388C18.5085 2.08337 19.8691 3.4335 20.0017 6.258C20.0536 7.36487 20.0635 7.69738 20.0635 10.5009C20.0635 13.3053 20.0527 13.6369 20.0017 14.7438C19.8682 17.5656 18.5112 18.9184 15.5956 19.0479C14.4616 19.0986 14.123 19.1091 11.2513 19.1091C8.38146 19.1091 8.04108 19.0986 6.90799 19.0479C3.98794 18.9175 2.6345 17.5613 2.50194 14.7429C2.44999 13.636 2.43924 13.3044 2.43924 10.5C2.43924 7.6965 2.45088 7.36487 2.50194 6.25712C2.6354 3.4335 3.99242 2.0825 6.90799 1.953C8.04198 1.90313 8.38146 1.89263 11.2513 1.89263ZM11.2513 0C8.33219 0 7.96674 0.01225 6.82021 0.063C2.91666 0.238 0.747218 2.35375 0.568073 6.1705C0.515226 7.29137 0.502686 7.64838 0.502686 10.5C0.502686 13.3516 0.515226 13.7095 0.567178 14.8295C0.746322 18.6427 2.91218 20.762 6.81932 20.937C7.96674 20.9878 8.33219 21 11.2513 21C14.1705 21 14.5369 20.9878 15.6834 20.937C19.5834 20.762 21.7582 18.6462 21.9346 14.8295C21.9875 13.7095 22 13.3516 22 10.5C22 7.64838 21.9875 7.29137 21.9355 6.17137C21.76 2.36162 19.5914 0.238875 15.6843 0.063875C14.5369 0.01225 14.1705 0 11.2513 0Z" fill="#1946BA"/>
<path  id="over-color" d="M11.2513 14C9.2727 14 7.66846 12.4338 7.66846 10.5C7.66846 8.56713 9.2727 7 11.2513 7C13.23 7 14.8342 8.56713 14.8342 10.5C14.8342 12.4338 13.23 14 11.2513 14Z" fill="#1946BA"/>
</svg>
                      </a>
                          </div>
                        <div class="footer__dec-item-1">
                             <p>«Эльбрусская Прохлада» © 2018 <br>
                                  Политика Конфиденциальности</p>
                         </div>
                         <div class="footer__dec-item-2">
                                 <p>Сделано в BorodaDigital</p>
                         </div>
                      </div>
                </div>
            
        </div>  ` ;

        footer.append(footerEl)
       return
    }
   
};
creatFooter()

 
let modal = document.querySelector('.modal');
let btns = document.querySelectorAll('.data-model');
let modal__close = document.querySelector(".modal__close");


function openmodel(){
     modal.classList.remove('none')
     modal.classList.add('wov');
     document.body.style.overflow = 'hidden';

}

function hideModal(){
      modal.classList.remove('wov')
      modal.classList.add('hide');
    document.body.style.overflow = '';
  
  
//    // clearInterval(timeropenmodel);
  
}
modal__close.addEventListener('click',hideModal)

btns.forEach( btn => btn.addEventListener('click', openmodel));

modal.addEventListener('click',(e) => {
    if (e.target == modal || e.target.getAttribute("data-model") == '' ){
    hideModal();
}});

//======================form============


// let forms = document.querySelectorAll('form'),
// inputs = document.querySelectorAll('input'),
// tex = document.querySelector('textarea');
 


// const postData = async (url ,data)=>{
//     let res  = await fetch(url, {
//         method: 'POST',
//         body: data,
//     });

//     return  await res.text()
// }
// const clearInputs = () => {
//     tex.value = ''
//     inputs.forEach(item => item.value = '')
//  }
// forms.forEach((item)=>{
//     item.addEventListener('submit',(e)=>{
//         e.preventDefault();
//         item.appendChild(statusmassage)

//       const formdata = new FormData(item)
//         postData('./index.php',formdata)
//         .then(res => {
//             console.log(res)
//         })
//       .finally(()=>{
//         clearInputs()
//       })

//     })
// })




















// prev.addEventListener('click', ()=> {
//   slideindex--
//     if( slideindex == 0){
//         slideindex = slide.length
//     }
//     curent.innerHTML = ` 0${slideindex}`
//     if(ofer == 0){
//         ofer = (+width.replace(/\D/g, '')) * (slide.length - 1);
//     }
//     else{
//         ofer -= +width.replace(/\D/g, '')
//     }
//     slideField.style.transform = `transLatex(-${ofer}px)`
// })