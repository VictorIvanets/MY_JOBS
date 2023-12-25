/*
const ul = document.querySelector("ul");
const qsAll = document.querySelectorAll("li")
const getEm = document.getElementsByTagName("li")
const newLi = document.createElement("li") // создать єлемент
newLi.innerText = "munu NEW" // вставить туда текст
newLi.classList.add("menu__btn") // вставить туда стиль
ul.append(newLi) // поставить єто все в конец псевдомассива
*/

/*

for(let i = 0; i<getEm.length; i++)  // изменяет все, вместе с созданым
{getEm[i].classList.add("newSelect")}

for(let i = 0; i<qsAll.length; i++)   // изменяет только то что біло
{qsAll[i].style.color = "blue"}

for(let i = 0; i<getEm.length; i++)   // изменяет только то что біло
{getEm[i].style.color = "red"}

console.log(qsAll)
console.log(getEm)
*/

/*
//Функция рандомных цветов
 function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) } 
 function randomColor() {
    return `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`}
 console.log(randomColor())

//  const colorLink = document.querySelectorAll(".menu__btn")
//  console.log(colorLink)

//  colorLink.addEventListener("click", function (){
//     for(let i = 0; i<colorLink.length; i++)
//     {colorLink[i].style.color = randomColor()}
//  })

 const colorLink = document.querySelector(".menu")
 colorLink.addsEventListener("click", function (){
 this.style.color = randomColor()
 })
*/



// Скрол к нужному блоку 

 const btnScroll = document.querySelector(".btnUp-img")
 const upSector = document.querySelector(".headerfon")
 btnScroll.addEventListener("click", ()=>
{upSector.scrollIntoView({behavior: "smooth"})})



document.querySelector(".menu").addEventListener("click", function (e)
    {e.preventDefault();
       if (e.target.classList.contains("menu__btn"))
        {const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({behavior: "smooth"})}
})





// nav.addEventListener("mouseover", (e)=>{
// if(e.target.classList.contains("menu__btn")) {
//     const link =  e.target
//     const sibl = link.closest(".menu").querySelectorAll(".menu__btn")
//     const logo = link.closest(".menu").querySelector(".menu__logo")
    
//     sibl.forEach(el =>{
//         if(el !== link){
//             el.style.opacity = 0.5}
//     })
//     logo.style.opacity = 0.5
// }
// })

// nav.addEventListener("mouseout", (e)=>{
//     if(e.target.classList.contains("menu__btn")) {
//         const link =  e.target
//         const sibl = link.closest(".menu").querySelectorAll(".menu__btn")
//         const logo = link.closest(".menu").querySelector(".menu__logo")
        
//         sibl.forEach(el =>{
//             if(el !== link){
//                 el.style.opacity = 100}
//         })
//         logo.style.opacity = 100
//     }
//     })
    

//функция для прозрачности меню (блокак, сектора) пр наведении мыши
var nav = document.querySelector(".menu") // в каком блоке

function hoverMenu(e, opacity) {
    if(e.target.classList.contains("menu__btn")) {   // на чем именно фокус мыши
        const link =  e.target
        const sibl = link.closest(".menu").querySelectorAll(".menu__btn") // на каких элементах менять свойства
        sibl.forEach(el =>{
            if(el !== link){
                el.style.opacity = this
                el.classList.toggle("menu__toggle")
            }
        })
    }
    }
  nav.addEventListener("mouseover", hoverMenu.bind(0.5))
  nav.addEventListener("mouseout", hoverMenu.bind(1))



//******************************************************************************* */
//для появления меню (всякого такого) на определенной части сайта. Можно добавлять части сайта.

var nav = document.querySelector(".menu") // в каком блоке

  function callBack(entries, observer){

    if (entries[0].isIntersecting)      /// if (!entries[0].isIntersecting) - срабатывает вне запрашиваемой секии - "!"
    {
        nav.classList.add("menu_fixed")  /// появляется 
    } else{
        nav.classList.remove("menu_fixed") // исчезает
    }
}
const options = {threshold: 0}
const observer = new IntersectionObserver(callBack, options)  /// API c функцией и опциями threshold: от 0 до 1 (1 - 100%)
observer.observe(document.getElementById("sector3"))         /// где срабатывает в какой части.
///***************************************************************************** */



//****************************************************************** */
///Типа добавление секций, которіе были скрыты. 
/* CSS для плавного всплытия
.mainBlok
{
    transition: transform 1s, opacity 0.5s;
}
.hidden-Block
{
    opacity: 0;
    transform: translateY(250px);
}*/

const allBlock = document.querySelectorAll(".mainBlok1") // на каких блоках будет срабатывать/показывать


function revealBlock(entries, observe){    // функция для выполнения при достижения нужного блока.
    if (entries[0].isIntersecting)
    {entries[0].target.classList.remove("hidden-allBlock") // убирает класс со скрытием после прокручивания до него.
    observe.unobserve(entries[0].target) // отменят отслеживание когда все отследило.
}}

const observerBlock = new IntersectionObserver(revealBlock, {threshold: 0.2}) // на 20%

allBlock.forEach(function(section){  // перебирает все блоки с переменной (псевдомассива)
    observerBlock.observe(section)  // отслеживание всех блоков
    section.classList.add("hidden-allBlock") // добавляет класс (невидимости) ко всем блокам.
})
///************************************************************************ */

const image = document.querySelectorAll("img[data-src]")
console.log(image)
function loadImg(entries, observer){
entries[0].target.src = entries[0].target.dataset.src 
//entries[0].target.classList.remove("blur")
}
const observerImg = new IntersectionObserver(loadImg, {threshold: 0.2})

image.forEach(img => {
observerImg.observe(img)
})





















//Фото делать большими на весть екран...************************************
document.querySelector(".bodyMain").addEventListener("click", function (e)
    {e.preventDefault();
       if (e.target.classList.contains("mainFoto"))
        {const img = e.target.getAttribute("src");
    document.querySelector(".fotoInSite").insertAdjacentHTML("beforeend", 
    `<div id="fotoBig" class="fotoBig">
    <h1><span>FOTO</span></h1>
    <img class="mainFotoBig" src="${img}">
    <h1><span>FOTO</span></h1>
    </div> `);}
})
//закрывает только по элементу которыйуже был в ДОМ, созданный не хочет видеть никак...
document.getElementById("areaFoto").addEventListener("click", function ()
{document.getElementById("areaFoto").innerHTML = ""})

//Убрать отменой кнопка Escape
document.addEventListener("keydown", (ev)=>{
    ev.key == "Escape"
    document.getElementById("areaFoto").innerHTML = ""
    });
///*********************************************************************** */



//табы*************************************************************
var tabs = document.querySelectorAll(".tab-btn")
var tabConteiner = document.querySelector(".tab-container")
var tabContent = document.querySelector(".text-area")

tabConteiner.addEventListener("click", function (e)
{e.preventDefault();
    var clicked = e.target.closest(".tab-btn")
 if (!clicked) return

    tabs.forEach((tab) => tab.classList.remove("tab-btn__up"))
    clicked.classList.add("tab-btn__up")


    document.querySelector(".text-tab").innerHTML = ""
    document.querySelector(".text-tab").insertAdjacentHTML("beforeend", 
    `<div>
    <img class="mainFotoBig" src="img/aquaFoto_${clicked.dataset.tab}.jpg">
    </div>`)

})
///********************************************************************** */

///// Слайдер
const sliders = document.querySelectorAll(".slide")
const slider = document.querySelector(".slider-box")
const btnL = document.querySelector(".btn-left")
const btnR = document.querySelector(".btn-Right")
const dotContainer = document.querySelector(".dots")



let currSlid = 0
const maxSlider = sliders.length


//dots
function createDots(){
    sliders.forEach(function(s, i){
    dotContainer.insertAdjacentHTML('beforeend',
    `<button class="dots_dot" data-slide="${i}"></button>`
    )
    })
}
createDots()





function activeDots(slide){
    document.querySelectorAll(".dots_dot").forEach(function(dot){
        dot.classList.remove("dots_active")
    })
    document.querySelector(`.dots_dot[data-slide="${slide}"]`).classList.add("dots_active")
}


function goToSlide(slide){
    sliders.forEach(function(s,i)    {
    s.style.transform = `translateX(${100*(i - slide)}%)`
    // console.log(s.style.transform) 
    // console.log(i)  
    // console.log(slide) 
    // console.log(currSlid)     
})
}
goToSlide(0)
activeDots(0)

function nextSlide(){
    if (currSlid === maxSlider - 1)
    {
        currSlid = 0
    }
    else
    {
        currSlid++
    }
    goToSlide(currSlid)
    activeDots(currSlid)
    // console.log(currSlid)  
}

function prevSlide(){
    if (currSlid === 0)
    {
        currSlid = maxSlider - 1
    }
    else
    {
        currSlid--
    }
    goToSlide(currSlid)
    activeDots(currSlid)
    // console.log(currSlid)  
}

btnR.addEventListener("click", nextSlide)
btnL.addEventListener("click", prevSlide)

//kayboard enter
document.addEventListener("keydown", function(e){
    console.log(e)
    if (e.key === "z"){
        prevSlide()
    }
    if (e.key ==="x"){
        nextSlide()
    }
})

dotContainer.addEventListener("click", (e)=>{
if (e.target.classList.contains("dots_dot"))
{
const slide = e.target.dataset.slide
goToSlide(slide)
activeDots(slide)
}
})




