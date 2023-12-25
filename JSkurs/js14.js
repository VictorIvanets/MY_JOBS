"use strict";




let imgL = document.querySelector("img")


    imgL.addEventListener("click", ()=> {
    imgL.classList.add("bid_img");
    }    );




const audio = new Audio("20af166b0a13e92.mp3")
let boxAll = document.querySelectorAll(".boxes__box")

for (let value of boxAll)
{
    value.addEventListener("click", ()=> {
    value.classList.add("boxes2");
    audio.play();
    }
    
    )};

*/



/*



const audio = new Audio("20af166b0a13e92.mp3")
let boxAll = document.querySelector(".boxes__box")


    boxAll.addEventListener("mouseenter", ()=> {
    boxAll.classList.add("boxes2");
    audio.play();
    }    );




*/



/*
box11.addEventListener("mouseenter", () => {    //box11.addEventListener("click", function(){

box11.classList.add("boxes2")
}

);
*/

//box11.classList.add("boxes2")






/*
let img = document.querySelector("img");
img.src = "imgTest_2.jpg"
*/

/*
let box1 = document.querySelectorAll(".box1")

for (let value of box1)
{
    value.classList.add("boxes2")
}
*/


/*


let tabul = document.querySelector("ul")
//tabul.classList.add("nav2") // меняет класс

let CSSStyle = getComputedStyle(tabul)

console.log(CSSStyle.fontFamily);
*/





document.querySelector("ul").style.cssText =  // Измение стиля инлайн
`
color: white;
background-color: grey;
font-size: 20pt;
`
*/




/*
let header = document.querySelector("ul")
let ul = document.querySelector("ul")

//ul.before(header) // - перемещение

let clonUL = ul.cloneNode(true) // - клонирование (тру - все содержимое)
header.before(clonUL) 

//header.remove() // -удаляет
*/



/*

let div1 = document.querySelector(".first__div");
let secondHeader = document.createElement('h2');

secondHeader.innerHTML = "вставка нового заголовка в штмл";
div1.insertAdjacentHTML("afterbegin", "<p>еще какойто  текст</p>"); // куда и что вставить
div1.insertAdjacentHTML("beforeend", "<p>еще какойто  текст</p>"); // куда и что вставить
div1.insertAdjacentText("beforeend", "только для  текста"); // вставляет тлько текст 

let div2 = document.querySelector(".first__div");  //откуда
let parag2 = document.createElement('p'); // что создать
parag2.innerHTML = "<p>еще какойто  *****</p>ЕЩЕ ПАРАГРАФ"; // что там написать
div2.prepend(parag2)  // куда именно вставить

//для ввода текста
let div3 = document.querySelector(".input_2");  //откуда
let parag3 = document.createElement('p'); // что создать
parag3.textContent = "<p>еще какойто  *****</p>ЕЩЕ ПАРАГРАФ"; // что там написать
div3.prepend(parag3, "HGJJFDXXXXXXXXXX")  // куда именно вставить

*/



/*


/*

let name1 = prompt("Имя")
let city = prompt("Город")
let age = prompt("Вораст")

let elem1 = document.querySelector(".nav__item1")
let oldElem1 = elem1.innerHTML;
let elem2 = document.querySelector(".nav__item2")
let oldElem2 = elem2.innerHTML;
let elem3 = document.querySelector(".nav__item3")
let oldElem3 = elem3.innerHTML;

elem1.textContent = `${oldElem1} ${name1}` //изменяет содержимое тега только текст!!!
elem2.textContent = `${oldElem2} ${city}` //изменяет содержимое тега только текст!!!
elem3.textContent = `${oldElem3} ${age}` //изменяет содержимое тега только текст!!!




let user = [elem1.textContent = ` ${oldElem1}  ${name1}`, elem2.textContent = ` ${oldElem2}   ${city}`, elem3.textContent = ` ${oldElem3}   ${age}`]

let user2 = document.querySelector(".new__user1")
user2.outerHTML = `<p class="new__user1">${user}`


*/

/*
let arr = document.querySelectorAll(".nav__item");
for (const value1 of arr)
{
    console.log(value1.firstChild);
}




//----------------------------------------------------

/*
const name1 = prompt ("Введите имя")

let elem = document.querySelector("h1")
console.log(elem.innerHTML);   //содержимое тега
let oldElem = elem.innerHTML;

elem.textContent = `${oldElem} ${name1}` //изменяет содержимое тега только текст!!!
*/


//--------------------------------------------



const name1 = prompt ("Введите имя")

let elem = document.querySelector("h1")
console.log(elem.innerHTML);   //содержимое тега
let oldElem = elem.innerHTML;

elem.innerHTML = `<p>${oldElem} ${name1}</p>` //изменяет содержимое тега добавляет елементы!!!


//----------------------------------------------



//let a = document.querySelector(".header").firstChild;  - выбираем значения с тегов, с узлов


/* FOR OF ----- Выбираем значения с ПСЕВДОМАССИВОВ, (тегов (селекторов) через querySelectorAll)
let arr = document.querySelectorAll(".nav__item");
for (const value1 of arr)
{
    console.log(value1.firstChild);
}
*/

/* FOR IN Выбираем значения, ключи с ОБЪЕКТОВ.
let obj = {
name: "Victor",
secondName: "Ivanets",
age: 43,

};
for (const value in obj)
{
    console.log(obj[value]);
}
*/


