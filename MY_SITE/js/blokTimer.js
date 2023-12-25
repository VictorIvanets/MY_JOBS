"use strict";

function timerPlus(){
    setTimeout(function(){
    document.querySelector(".blok1").classList.add("hidden-for-blok1")
    },1000)

    setTimeout(function(){
        document.querySelector(".blok2").classList.add("hidden-for-blok2")
        },5000)    

        setTimeout(function(){
            document.querySelector(".blok3").classList.add("hidden-for-blok3")
            },3000) 
            setTimeout(function(){
                document.querySelector(".blok3").classList.remove("hidden-for-blok3")
                },9000) 

            setTimeout(function(){
                document.querySelector(".blok5").classList.add("hidden-for-blok5")
                },3000) 

                setTimeout(function(){
                    document.querySelector(".blok5").classList.add("up-for-blok5")
                    },5000)     

            // setTimeout(function(){
            //     document.querySelector(".blok4").classList.add("hidden-for-blok3")
            //     },7000) 

            // setInterval(function(){
            //     document.querySelector(".main-fon_black").classList.toggle("color-pure")
            //     },5000)  
            // }

            setTimeout(function(){
                document.querySelector(".main-fon_black").classList.add("color-pure")
                },2000)  
            }

     timerPlus()


            setTimeout(function(){
                document.querySelector(".sector2").style.opacity = 100
                },3000) 
                setTimeout(function(){
                    document.querySelector(".sector2-part2").style.opacity = 100
                    },3000) 
                    setTimeout(function(){
                        document.querySelector(".sector2-part3").style.opacity = 100
                        },3000) 
                        setTimeout(function(){
                            document.querySelector(".sector2-part4").style.opacity = 100
                            },3000) 
    
                setTimeout(function(){
                    document.querySelector(".sector3").style.opacity = 100
                    },5000) 
                    setTimeout(function(){
                        document.querySelector(".sector4").style.opacity = 100
                        },6000) 

            const timer = document.querySelector(".time")
            const myTimer = setInterval(()=>{
                let hour = String(new Date().getHours()).padStart(2,0)
                let min = String(new Date().getMinutes()).padStart(2,0)
                let sec = String(new Date().getSeconds()).padStart(2,0)
                timer.textContent = `${hour}:${min}:${sec}`
            },1000)

       



            document.querySelectorAll(".btn__menu").forEach(function(el) {
                el.addEventListener("click", function (e)
                {   e.preventDefault();
                   console.log(el)
                    const id = this.getAttribute("href");
                    document.querySelector(id).scrollIntoView({behavior: "smooth"})
                }); })


    const account = {
        logIn: "5555",
        pin: 5555,};
    
    const accounts = [account];
    
    const btnLogin = document.querySelector(".login__btn");
    const inputLoginUsername = document.querySelector(".login__input--user");
    const inputLoginPin = document.querySelector(".login__input--pin");
    const pinError = document.querySelector(".pinError");
    const userError = document.querySelector(".userError");
    const containerHidden = document.querySelector(".textArea1");
    const containerLoginArea = document.querySelector(".login-area");
    
    
    
    let currentAccount;
    btnLogin.addEventListener('click', (e)=>{e.preventDefault(); 
    currentAccount = accounts.find(acc => acc.logIn === inputLoginUsername.value)
    console.log(currentAccount);
    
    if (currentAccount && currentAccount.pin === Number(inputLoginPin.value))
    {
        containerHidden.classList.toggle("hidden")
        containerHidden.style.opacity = 100
        userError.style.opacity = 0
        pinError.style.opacity = 0
        const html = `<h1 class="next-step"><a class="btn" href="start.html">ДАЛІ</a></h1>`;
        containerHidden.insertAdjacentHTML("afterbegin", html);
        containerLoginArea.style.opacity = 0;
        inputLoginPin.value = inputLoginUsername.value = "";
        btnLogin.classList.toggle("hidden")
    }
    else if (currentAccount && currentAccount.pin !== Number(inputLoginPin.value))
    {
        containerHidden.innerHTML = ""
        pinError.style.opacity = 100
        userError.style.opacity = 0
        containerHidden.style.opacity = 0
        inputLoginPin.value = ""
    }
    
    else if (currentAccount === undefined)
    {
        containerHidden.innerHTML = ""
        userError.style.opacity = 100
        pinError.style.opacity = 0
        containerHidden.style.opacity = 0
        inputLoginPin.value = inputLoginUsername.value = ""
    }
    
    })


let blok2Out = document.querySelector(".blok2")
blok2Out.addEventListener("click", function(e){
    e.preventDefault()
    blok2Out.classList.toggle("hidden-for-blok2")}) 






var nav = document.querySelector(".menu") 

function hoverMenu(e, opacity) {
    if(e.target.classList.contains("a-menu")) { 
        const link =  e.target
        const sibl = link.closest(".menu").querySelectorAll(".a-menu")
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




document.querySelector(".bodyMain").addEventListener("click", function (e)
{   if (e.target.classList.contains("fotoSector2"))
    {const img = e.target.getAttribute("src");
document.querySelector(".fotoInSite").insertAdjacentHTML("beforeend", 
`<div class="fotoBig">
<img class="mainFotoBig" src="${img}">
</div> `);}
})
document.getElementById("areaFoto").addEventListener("click", function ()
{document.getElementById("areaFoto").innerHTML = ""})
document.addEventListener("keydown", (ev)=>{
ev.key == "Escape"
document.getElementById("areaFoto").innerHTML = ""
}); 




const allBlock = document.querySelectorAll(".content-section2") 
function revealBlock(entries, observe){ 
    if (entries[0].isIntersecting)
    {entries[0].target.classList.remove("hidden-allBlock") 
    observe.unobserve(entries[0].target) 
}}

const observerBlock = new IntersectionObserver(revealBlock, {threshold: 0.2}) 

allBlock.forEach(function(section){ 
    observerBlock.observe(section)  
    section.classList.add("hidden-allBlock") 
})



const image = document.querySelectorAll("img[data-src]")
console.log(image)
function loadImg(entries, observer){
entries[0].target.src = entries[0].target.dataset.src 
}
const observerImg = new IntersectionObserver(loadImg, {threshold: 0.2})

image.forEach(img => {
observerImg.observe(img)
})



    document.querySelector(".bodyMain").addEventListener("click", function (e)
{
   if (e.target.classList.contains("fotoSector3"))
    {const img = e.target.dataset.src;
document.querySelector(".fotoInSite").insertAdjacentHTML("beforeend", 
`<div class="fotoBigSector3">
<img class="mainFotoBigSector3" src="${img}">
</div> `);}
})
document.getElementById("areaFoto").addEventListener("click", function ()
{document.getElementById("areaFoto").innerHTML = ""})
document.addEventListener("keydown", (ev)=>{
ev.key == "Escape"
document.getElementById("areaFoto").innerHTML = ""
}); 





const allBlock2 = document.querySelectorAll(".hidForJS") 
function revealBlock(entries, observe){ 
    if (entries[0].isIntersecting)
    {entries[0].target.classList.remove("hidden-allBlock") 
    observe.unobserve(entries[0].target) 
}}

const observerBlock2 = new IntersectionObserver(revealBlock, {threshold: 0.2}) 

allBlock2.forEach(function(section){ 
    observerBlock.observe(section)  
    section.classList.add("hidden-allBlock") 
})


var btnUp = document.querySelector(".btn-up")
  function forBtnUp(entries, observer){
    if (!entries[0].isIntersecting) 
    {
        btnUp.style.opacity = 1 
    } else{
        btnUp.style.opacity = 0
    }}
const options = {threshold: 0.1}
const observer = new IntersectionObserver(forBtnUp, options)
observer.observe(document.querySelector(".sector2top"))

document.querySelector(".btn-up").addEventListener("click", function (e)
    {   e.preventDefault();
        document.querySelector("#sector1").scrollIntoView({behavior: "smooth"})
    }); 

