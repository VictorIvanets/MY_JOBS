"use strict";


const btnOpenModel = document.querySelectorAll('.show-modal');
const modelWindow = document.querySelector('.modal');
const btnCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for(let value of btnOpenModel)
{
value.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});
}

btnCloseModel.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});

overlay.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});

document.addEventListener("keydown", (ev)=>{
    if (ev.key == "Escape" && !modelWindow.classList.contains("hidden")){
        overlay.classList.toggle("hidden");
        modelWindow.classList.toggle("hidden");
    }
});


