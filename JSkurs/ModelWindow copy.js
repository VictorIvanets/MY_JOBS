"use strict";



const btnOpenModel = document.querySelector('.show-modal1');
const modelWindow = document.querySelector('.modal1');
const btnCloseModel = document.querySelector('.close-modal1');
const btnOpenModel2 = document.querySelector('.show-modal2');
const modelWindow2 = document.querySelector('.modal2');
const btnCloseModel2 = document.querySelector('.close-modal2');
const btnOpenModel3 = document.querySelector('.show-modal3');
const modelWindow3 = document.querySelector('.modal3');
const btnCloseModel3 = document.querySelector('.close-modal3');
const overlay = document.querySelector('.overlay');

const btnNextModel1 = document.querySelector('.next-modal1');
const btnNextModel2 = document.querySelector('.next-modal2');
const btnNextModel3 = document.querySelector('.next-modal3');



btnOpenModel.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});

btnCloseModel.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});
/*
overlay.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});
*/

document.addEventListener("keydown", (ev)=>{
    if (ev.key == "Escape" && !modelWindow.classList.contains("hidden")){
        overlay.classList.toggle("hidden");
        modelWindow.classList.toggle("hidden");
    }
});
//

btnOpenModel2.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow2.classList.toggle("hidden");
    });
    
    btnCloseModel2.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow2.classList.toggle("hidden");
    });
    /*
    overlay.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow2.classList.toggle("hidden");
    });
    */
    document.addEventListener("keydown", (ev)=>{
        if (ev.key == "Escape" && !modelWindow2.classList.contains("hidden")){
            overlay.classList.toggle("hidden");
            modelWindow2.classList.toggle("hidden");
        }
    });

    //

btnOpenModel3.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow3.classList.toggle("hidden");
    });
    
    btnCloseModel3.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow3.classList.toggle("hidden");
    });
    /*
    overlay.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow3.classList.toggle("hidden");
    });
    */
    
    document.addEventListener("keydown", (ev)=>{
        if (ev.key == "Escape" && !modelWindow3.classList.contains("hidden")){
            overlay.classList.toggle("hidden");
            modelWindow3.classList.toggle("hidden");
        }
    });

