"use strict";




const MenuNav = document.querySelector(".navi");
const BtnMenu = document.querySelector(".btn_menu");

BtnMenu.addEventListener('click', (e)=>{e.preventDefault()
    MenuNav.classList.toggle("min_size")
})


const btnScroll = document.querySelector(".btnUp-img")
const upSector = document.querySelector(".headerfon")

btnScroll.addEventListener("click", ()=>
{
    upSector.scrollIntoView({behavior: "smooth"})
})

/* <a href="#upmain" class="btnUp">
<img class="btnUp-img" src="icons/btnUp.svg" alt="Up">
</a> */