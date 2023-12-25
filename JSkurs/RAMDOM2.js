"use strict";


const audio = new Audio("20af166b0a13e92.mp3")
let secretNumber = Math.trunc(Math.random()*100)+1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

const displayMessage = function (message)
{
    document.querySelector(".message").textContent = message;
};

displayMessage("ВВЕДИТЕ ЧИСЛО") // скрыть

document.querySelector(".check").addEventListener("click", ()=>
{
const guess = Number(document.querySelector(".guess").value);
console.log(guess);
if(!guess) 
{
    displayMessage("ВВЕДИТЕ ЧИСЛО!");
    document.querySelector(".message").classList.add("message_error")
    audio.play()
}

else if (guess === secretNumber)
{
    displayMessage("УГАДАЛ")
    document.querySelector(".message").classList.remove("message_proba")
    document.querySelector(".message").classList.add("message_winner")
    audio.play()
    document.querySelector(".number").textContent = guess;
    document.querySelector(".number").classList.add("number_winner")

        if (score>highscore){
            highscore=score
            document.querySelector(".highscore").textContent = highscore
        }}



else if (guess !== secretNumber){

    if (score>0) {

        if (guess>secretNumber)
        {
        displayMessage("МНОГО, НУЖНО МЕНЬШЕ ЧИСЛО")
        document.querySelector(".message").classList.add("message_proba")
        audio.play()
        score--
        document.querySelector(".score").textContent = score
        }

        else if (guess<secretNumber)
        {
        displayMessage("МАЛО, НУЖНО БОЛЬШЕ ЧИСЛО")
        document.querySelector(".message").classList.add("message_proba")
        audio.play()
        score--
        document.querySelector(".score").textContent = score

        
        }}

else {
    displayMessage("ВЫ ПРОИГРАЛИ")
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").classList.remove("message_proba")
    document.querySelector(".message").classList.add("message_error")

    audio.play()

}}

}); 

document.querySelector(".again").addEventListener("click", ()=>{
    score = 20
    secretNumber = Math.trunc(Math.random()*100)+1;
    displayMessage("ВВЕДИТЕ ЧИСЛО")
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    document.querySelector(".message").classList.remove("message_winner", "message_error", "message_proba")
    document.querySelector(".message").classList.add(".message")
    document.querySelector(".number").classList.remove("number_winner")

})










