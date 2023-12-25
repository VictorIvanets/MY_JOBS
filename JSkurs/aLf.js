



const letters = document.querySelectorAll(".boxes__box")
let newLetter;

for (let i = 0; i < letters.length; i++) {
letters[i].addEventListener('click', function() {

    if (letters[i].previousElementSibling != null) {
        letters[i].previousElementSibling.before(letters[i]);
        newLetter = document.querySelectorAll(".boxes__box")


        } else if (letters[i].nextElementSibling != null) {
        letters[i].nextElementSibling.after(letters[i]) }
        newLetter = document.querySelectorAll(".boxes__box")
        
        if (
            newLetter[0].classList.contains("box_a") &&
            newLetter[1].classList.contains("box_b") &&
            newLetter[2].classList.contains("box_c") &&
            newLetter[3].classList.contains("box_d") &&
            newLetter[4].classList.contains("box_e") &&
            newLetter[5].classList.contains("box_f")
        ) 
        {
            document.querySelector(".body").classList.toggle("body2")
        }

    }

)}




/*

letterA.addEventListener("click", function(){
    
});











const letterA = document.querySelector(".box_a");
const letterB = document.querySelector(".box_b");
const letterC = document.querySelector(".box_c");
const letterD = document.querySelector(".box_d");
const letterE = document.querySelector(".box_e");
const letterF = document.querySelector(".box_f");

letterA.addEventListener("click", function(){
    if (letterA.previousElementSibling != null)
    {
    letterA.previousElementSibling.before(letterA);
    }
    else if (letterA.nextElementSibling != null)
    {
    letterA.nextElementSibling.after(letterA)
    }
});

letterB.addEventListener("click", function(){
    if (letterB.previousElementSibling != null)
    {
    letterB.previousElementSibling.before(letterB);
    }
    else if (letterB.nextElementSibling != null)
    {
    letterB.nextElementSibling.after(letterB)
    }
});

letterC.addEventListener("click", function(){
    if (letterC.previousElementSibling != null)
    {
    letterC.previousElementSibling.before(letterC);
    }
    else if (letterC.nextElementSibling != null)
    {
    letterC.nextElementSibling.after(letterC)
    }
});

letterD.addEventListener("click", function(){
    if (letterD.previousElementSibling != null)
    {
    letterD.previousElementSibling.before(letterD);
    }
    else if (letterD.nextElementSibling != null)
    {
    letterD.nextElementSibling.after(letterD)
    }
});

letterE.addEventListener("click", function(){
    if (letterE.previousElementSibling != null)
    {
    letterE.previousElementSibling.before(letterE);
    }
    else if (letterE.nextElementSibling != null)
    {
    letterE.nextElementSibling.after(letterE)
    }
});

letterF.addEventListener("click", function(){
    if (letterF.previousElementSibling != null)
    {
    letterF.previousElementSibling.before(letterF);
    }
    else if (letterF.nextElementSibling != null)
    {
    letterF.nextElementSibling.after(letterF)
    }
});

*/