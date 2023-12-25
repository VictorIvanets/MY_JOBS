"use strict";


const name1 = ".input_2"

let elem = document.querySelector(".input_2")
console.log(elem.innerHTML);   //содержимое тега
let oldElem = elem.innerHTML;

elem.textContent = `${oldElem} ${name1}` //изменяет содержимое тега только текст!!!

console.log(elem);



//console.log();


function fiboNachi (n)  {

  let output = []

  if (n === 1) {
    output = [0]
  }
  else if (n === 2)
{
    output = [0,1]
}
else {
    output = [0,1]
    for (let i = 2; i < n; i++)
    {
        output.push(output.at(-2) + output.at(-1));
    }
}
return output
}

let result = fiboNachi(52)
console.log(result)
*/


/*


const arr = [
"Jonn",
"Travoltta",
2023-1980,
"Zhytimyr",
true,
["Ira", "Vityz", "Solomia"]
]

const arr2 = []

for (let i = 0; i<arr.length; i++) {
console.log(arr[i])
arr2.push(arr[i])
}

console.log(arr2)


/*
for (let i = 0; i <arr.length; i++) {
    if (typeof arr[i] ==="number") break
    console.log(arr[i])


}

*/

/*
const name1 = prompt ("Введите имя")
const mass = prompt ("Введите массу тела")
const rost = prompt ("Введите рост: метр точка сантиметр")


const indexMass = [name1, mass, rost,]
indexMass[3] = indexMass[1]/indexMass[2]**2

let massIndex = (Math.floor(indexMass[3]*1))

alert(`${name1} ваш индекс массы тела ${massIndex}
ИМТ < 18.5:	Ниже нормального веса
ИМТ >= 18.5 И < 25:	Нормальный вес
ИМТ >= 25 И < 30:	Избыточный вес
ИМТ >= 30 И < 35:	Ожирение I степени
ИМТ >= 35 И < 40:	Ожирение II степени
ИМТ >= 40:	Ожирение III степени` )
*/

/*

    if (Peter[3]>Denn[3])
    {
    console.log (`Index BMI ${Peter[0]} = ${Petros} єто больше чем Index BMI ${Denn[0]} = ${Dennys}`)
    }
    else if (Peter[3]<Denn[3])
    {
    console.log (`Index BMI ${Peter[0]} = ${Petros} єто меньше чем Index BMI ${Denn[0]} = ${Dennys}`)
    }

    else {
        console.log ("ИНДЕКС ОДИНАКОВЫЙ")
    }

    console.log(Peter.push())
    console.log(Denn)

*/



function callc () {
    this.resultBMI = this.mass/this.rost**2
    return this.resultBMI
  } 

const Peter = {
    name: "ПЕТР",
    mass: 92,
    rost: 1.88,
    callc
}

const Denn = {
    mass: 92,
    rost: 1.88,
    name: "ДЕНИС",
    callc
}
Peter.callc()
Denn.callc()

let Petros = (Math.floor(Peter.resultBMI*1))
let Dennys = (Math.floor(Denn.resultBMI*1))

    if (Peter.resultBMI>Denn.resultBMI) 
    {
    console.log (`Index BMI ${Peter.name} = ${Petros} єто больше чем Index BMI ${Denn.name} = ${Dennys}`)
    }
    else if (Peter.resultBMI<Denn.resultBMI)
    {
    console.log (`Index BMI ${Peter.name} = ${Petros} єто меньше чем Index BMI ${Denn.name} = ${Dennys}`)
    }

    else {
        console.log ("ИНДЕКС ОДИНАКОВЫЙ")
    }




/*
console.log(`Index BMI ${Denn.name} = ${Dennys}`)
console.log(`Index BMI ${Peter.name} = ${Petros}`)

console.log(Denn.resultBMI<Peter.resultBMI)
console.log(Denn.resultBMI>Peter.resultBMI)

*/

/*
const Peter = {
    mass: 72,
    rost: 1.88,
}

const Denn = {
    mass: 82,
    rost: 1.73,
}


let callc = (mass,rost) => (mass/rost**2)


let indexDenn = callc(Denn.mass,Denn.rost)
let indexPeter = callc(Peter.mass,Peter.rost)



console.log(indexDenn)
console.log(indexPeter)

console.log(indexDenn>indexPeter)
console.log(indexDenn<indexPeter)



*/

/*

const name1 = "Victor"
const country = "UA"
const city = "Zhitomyr"
const planet = "earth"

function yearBirht(){
    return 2023-this.age
    
}

const user = {
name1,
age: 50,
city,
country,
planet,
yearBirht

}

const user2 = {
    name1,
    age: 25,
    city,
    country,
    planet,
    yearBirht
    
    }


console.log(user.yearBirht())
console.log(user2.yearBirht())





/*

function raund (srUtki, srKoty)
{
if (srKoty >= srUtki) 
{
    //console.log(`WIN КОТИ ${srKoty} vs УТКИ ${srUtki}`)
}
else if ( srKoty <= srUtki)
{
    //console.log(`WIN УТКИ ${srUtki} vs КОТИ ${srKoty}`)
}

}


raund(kats,duks)

/*

const name1 = "Victor"
const age = 43
const country = "UA"
const city = "Zhitomyr"
const planet = "earth"



const user = {
name1,
age,
city,
country,
planet

}



console.log(user)

/*









//WINERR
/*
let srednee = (a,b,c) => (a+b+c)/3

let kats = (srednee(44,23,71))
let duks = (srednee(65,54,49))

let kats2 = (srednee(85,54,41))
let duks2 = (srednee(20,100,39))


console.log(kats)
console.log(duks)

console.log(kats2)
console.log(duks2)



function raund (srUtki, srKoty)
{
if (srKoty >= srUtki) 
{
    console.log(`WIN КОТИ ${srKoty} vs УТКИ ${srUtki}`)
}
else if ( srKoty <= srUtki)
{
    console.log(`WIN УТКИ ${srUtki} vs КОТИ ${srKoty}`)
}

}



raund(kats,duks)
raund(kats2,duks2)
raund(100,200)
*/

/*




const firsNeme = prompt ("Name")
const secondNeme = prompt ("Name2")


const randomNumber = (Math.floor(Math.random()*100))


if (randomNumber < 30 && firsNeme != null && secondNeme != null && firsNeme != "" && secondNeme != "") 
{
    alert(`Результат ${firsNeme} and ${secondNeme} равен НЕ ПОДХОДИТ`)
}
else if (randomNumber >= 30 && randomNumber <60 && firsNeme != null && secondNeme != null&& firsNeme != "" && secondNeme != "")
{
    alert(`Результат ${firsNeme} and ${secondNeme} равен  ТАК СЕБЕ`)
}

else if (randomNumber >= 60 && randomNumber <100 && firsNeme != null && secondNeme != null&& firsNeme != "" && secondNeme != "")
{
    alert(`Результат ${firsNeme} and ${secondNeme} равен НОРМАС`)
}

else {
        alert("ATENSION, НЕ ВСЕ!!!")  
}












/*
let sUm = (a,b,c,d) => a+b-c*d **2

console.log (sUm(1,1,1,1))
*/

/*
let funExp = (a,b,c) =>
{
return a+b+c/100
}

//let result = 

console.log(funExp(3,2,3))

*/

/*
const age = prompt ("age")

function ask() {
    
    if (age == 1) 
    {
    alert (showCancel()) 
    }
    
    else if (age == 2)
    {
    alert (showOk())
    }

    else if (age == 3) 
    {
    
    alert (showMaby())

    }



    }

    function showCancel()
    {
        alert("Dopobachennya")
    }

    function showOk()
    {
        alert("Dyakuyu")
    }

    function showMaby()
    {
        alert("Maby")  
    }
    
    ask()

*/

//confirm("Сколько вам лет?")

/*
function ask(question, yes, no) {
if (confirm(question)) 
{
yes() 
}
else no()
}
/*
function showOk()
{
    alert("Dyakuyu")
}

function showCancel()
{
    alert("Dopobachennya")
}

ask("You Ok?", ()=> alert("Dyakuyu"), () => alert("Dopobachennya"))

*/

/*
let calcPDV = function (a,b)
{
return (a/100)*b
}
console.log(calcPDV(100,20))
*/

// for
/*

 for(let i =1; i<=11; i++) {

    if (i >1 && i <=4)
    {
        console.log(`Privet ${i} 555`)
    }

    else if (i==11)
    {
    console.log(`Privet ${i} 111`)
    }

    else console.log( `Privet ${i} 777`)
}

*/

/*const A = prompt ()

const userB = ["Victor", 43, "Zt", "Man","ivanets"]
userB [9] = "Ira"

let OUT1 = (userB[1])

alert(OUT1)


console.log(`PRYVIT ${userB[1]+userB[2]+userB[3]}`)
*/

//////////////////////console.log(userB[userB.length - 1])

// CALC PDV
/*
const Price = 5561


function calc (a,b,)
{
return (a/100)*b
}

let result = calc(Price,17)

console.log(`PDV = ${result}`)

*/

//const age = prompt ("age")

//age >= 18 ? alert ("BEAR DRINK") : alert ("DRINK JUICE")

//const DRINK = (age < 18) ? "JUICE": (age >= 18 && age < 25) ? "BEER": (age >= 25 && age < 100) ? "VINE":"VODKA"

//alert (`I LOVE ${(age < 18) ? "JUICE": (age >= 18 && age < 25) ? "BEER": (age >= 25 && age < 100) ? "VINE":"VODKA"}`)

//alert (`I LOVE ${age >= 18 ? "BEER":"JUICE"}!!!`)

/*
const massPeter = 72,
rostPetr = 1.88,
massDenn = 82,
rostDenn = 1.73;

const indexDenn = massDenn/rostDenn**2
const indexPeter = massPeter/rostPetr**2


console.log(indexDenn)
console.log(indexPeter)

console.log(indexDenn>indexPeter)
console.log(indexDenn<indexPeter)
*/

/*


const firsNeme = prompt ("Name")
const secondNeme = prompt ("Name2")


const randomNumber = (Math.floor(Math.random()*100))


if (randomNumber < 30 && firsNeme != null && secondNeme != null && firsNeme != "" && secondNeme != "") 
{
    alert(`Результат ${firsNeme} and ${secondNeme} равен НЕ ПОДХОДИТ`)
}
else if (randomNumber >= 30 && randomNumber <60 && firsNeme != null && secondNeme != null&& firsNeme != "" && secondNeme != "")
{
    alert(`Результат ${firsNeme} and ${secondNeme} равен  ТАК СЕБЕ`)
}

else if (randomNumber >= 60 && randomNumber <100 && firsNeme != null && secondNeme != null&& firsNeme != "" && secondNeme != "")
{
    alert(`Результат ${firsNeme} and ${secondNeme} равен НОРМАС`)
}

else {
        alert("ATENSION, НЕ ВСЕ!!!")  
}


*/

/*
if (firsNeme == "Витя") 
{
    alert(`ПРИВЕТ ВИТЯ ${secondNeme}`)
}
else if (firsNeme == "Ира")
{
    alert(`ПРИВЕТ Ира ${secondNeme}`)
}
*/
