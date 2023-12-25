"use strict";

const userName = {
name: prompt("Имя"),
city: prompt("Город"),
age: prompt("Вораст"),
};


let name1 = userName.name
let city = userName.city
let age = userName.age

let elem1 = document.querySelector(".nav__item1")
let oldElem1 = elem1.innerHTML;
let elem2 = document.querySelector(".nav__item2")
let oldElem2 = elem2.innerHTML;
let elem3 = document.querySelector(".nav__item3")
let oldElem3 = elem3.innerHTML;

elem1.textContent = `${oldElem1} ${name1}` //изменяет содержимое тега только текст!!!
elem2.textContent = `${oldElem2} ${city}` //изменяет содержимое тега только текст!!!
elem3.textContent = `${oldElem3} ${age}` //изменяет содержимое тега только текст!!!


/*

let user = [elem1.textContent = ` ${oldElem1}  ${name1}`, elem2.textContent = ` ${oldElem2}   ${city}`, elem3.textContent = ` ${oldElem3}   ${age}`]

let user2 = document.querySelector(".new__user1")
user2.outerHTML = `<p class="new__user1">${oldElem1} ${name1}`

let user21 = document.querySelector(".new__user2")
user21.outerHTML = `<p class="new__user2">${oldElem2} ${city}`

let user22 = document.querySelector(".new__user3")
user22.outerHTML = `<p class="new__user3">${oldElem3} ${age}`
*/

