"use strict";

const foto = {num: 0};
document.getElementById('btnNew222').addEventListener("click", 
()=>
{if (foto.num<5){
foto.num++;
document.querySelector(".output").innerText = foto.num;
document.querySelector(".fotoAgea").innerHTML = ""
document.querySelector(".fotoAgea").insertAdjacentHTML("beforeend",
` 
<div class="card">
<p>${foto.num}</p>
<img class="card_img" src="img/cheese-${foto.num}.jpg" alt="">
</div>
`
)}

if (foto.num >= 5){foto.num = 0}
})

