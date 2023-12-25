"use strict";

const foto = {num: 0};
document.getElementById('next').addEventListener("click", 
()=>
{if (foto.num<16){
foto.num++;
document.querySelector(".mainBlok2").innerHTML = ("");
document.querySelector(".mainBlok2").insertAdjacentHTML("beforeend",
` 
<img class="mainFotoHobby" src="img/aquaFoto_${foto.num}.jpg" alt="Logo">
`
)
}

if (foto.num >= 16){foto.num = 0}
})


document.getElementById('Previous').addEventListener("click", 
()=>
{if (foto.num>=2){
foto.num--;
document.querySelector(".mainBlok2").innerHTML = ("");
document.querySelector(".mainBlok2").insertAdjacentHTML("beforeend",
` 
<img class="mainFotoHobby" src="img/aquaFoto_${foto.num}.jpg" alt="Logo">
`
)}

if (foto.num <= 1){foto.num = 16}
})


