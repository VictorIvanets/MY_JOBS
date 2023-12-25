"use strict";
/*
function persone (greetStr){
    console.log(greetStr + " " + this.firstName + " " + this.lastName);
}

const person1 = {
firstName: "Ira",
lastName: "Vyhovska",
};

const person2 = {
firstName: "Vitya",
lastName: "Ivanets",
};

persone.call(person2, "Hello,")
*/

document.getElementById('btnNew222').addEventListener("click", function(){

let outName = document.querySelector(".text1").value
let outFamily = document.querySelector(".text2").value
let outAvia = document.querySelector(".text3").value
let outNumber = document.querySelector(".text4").value
let outNumberRace = document.querySelector(".text5").value

const person = {
    firstName: outName,
    lastName: outFamily,
    };
    
const sa77 = {
airLine: "sa77",
idCode: "55rd ",
booking: [],
book(flightNum, name, sname){
    let output = (`${name} ${sname} 
    забронировал(a) место на самолете компании 
    ${this.airLine}, 
    номер рейса ${this.idCode}${flightNum}`);
    this.booking.push({ flight: `${this.idCode}${flightNum}`, name})
    document.querySelector(".output").innerText = output
},
};

const book = sa77.book;

const ukrAvia = {
    airLine: outAvia,
    idCode: outNumber,
    booking: [],
};

book.call(ukrAvia, outNumberRace, person.lastName, person.firstName)

})











/*

function hello (hiStr){
return function (name)
{console.log(`${hiStr} ${name}`)};
}
const greeter = hello("Hi");
greeter("Vitya")



hello("ПРИВЕТ") ("ВИКТОР")
*/





/*

function oneWord(str) {
    return str.replaceAll(" ", "");
}


function upperFirstLetter(str) {
const [first, ...other] = str.split(" ");
return [first[0].toUpperCase() + first.slice(1), ...other].join(" ")
}


function transFormer (str, fn)
{   
let fBB = fn(str)
    console.log(`первая: ${fBB} `);
}

transFormer("мася любит гулять", upperFirstLetter);

*/




/*
const fligth = "A320/15"
const passager = {
name: "Jony I",
passport: "VK55466844",
};

function checkIn (flightNum, passId){
 flightNum = "4551"
 passId.name = "Mr " + passId.name
}


checkIn(fligth, passager)

console.log(fligth)
console.log(passager.name)
*/








/*
const bookings = []
function createBooking(
    flNum="No Fligth", passNum="No Name", price="No price", overPrice = passNum*price){
const booking = {
    flNum,
    passNum,
    price,
    overPrice,
};
console.log(`ALL PRACE: ${overPrice} USD, ON RACE: ${flNum}`,"\n", `FOR ${passNum} PASSGER`)
bookings.push(booking);

}

createBooking(undefined, 5, 150);
*/