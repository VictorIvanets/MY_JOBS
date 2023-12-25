"use strict";



const account1 = {
owner: "Victor Ivanets",
movements: [200, 500, -300, -100, 600, 1800, -200, 2000],
movementsDate: [
    "2023-02-05T12:46:11.094Z",
    "2022-01-04T11:47:11.094Z",
    "2021-11-03T07:46:11.094Z",
    "2022-02-25T18:45:11.094Z",
    "2021-08-24T17:46:11.094Z",
    "2020-07-11T20:43:11.094Z",
    "2021-09-12T05:46:11.094Z",
    "2020-08-15T06:41:11.094Z",
],
interestRate: 1.2,
pin: 1111,};

const account2 = {
owner: "Iryna Vyhovska",
movements: [700, -488, -488, -1200, 50, 130, -150, 3300],
movementsDate: [
    "2023-02-05T12:46:11.094Z",
    "2022-01-04T11:47:11.094Z",
    "2021-11-03T07:46:11.094Z",
    "2022-02-25T18:45:11.094Z",
    "2021-08-24T17:46:11.094Z",
    "2020-07-11T20:43:11.094Z",
    "2021-09-12T05:46:11.094Z",
    "2020-08-15T06:41:11.094Z",
],
interestRate: 1.5,
 pin: 2222,};


const account3 = {
owner: "Polina Vyhovska",
movements: [100, 25, -125, -15, -25, 11180, 120, -150],
movementsDate: [
    "2023-02-05T12:46:11.094Z",
    "2022-01-04T11:47:11.094Z",
    "2021-11-03T07:46:11.094Z",
    "2022-02-25T18:45:11.094Z",
    "2021-08-24T17:46:11.094Z",
    "2020-07-11T20:43:11.094Z",
    "2021-09-12T05:46:11.094Z",
    "2020-08-15T06:41:11.094Z",
],
interestRate: 0.7,
pin: 3333,};


const account4 = {
owner: "Vova Pupkin",
movements: [120, 10000, 500, 50, 600],
movementsDate: [
    "2023-10-31T12:46:11.094Z",
    "2023-10-30T11:47:11.094Z",
    "2023-10-29T07:46:11.094Z",
    "2023-10-28T18:45:11.094Z",
    "2023-10-20T17:46:11.094Z",
],
interestRate: 1,
pin: 4444,};

const accounts = [account1, account2, account3, account4];
const mainAccount = account1


const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");


const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");


const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTranfetTo = document.querySelector(".form__input--to");
const inputTranfetAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloserUsername = document.querySelector(".form__input--user");
const inputCloserPin = document.querySelector(".form__input--pin");
const pinError = document.querySelector(".pinError");
const userError = document.querySelector(".userError");

const movDate = document.querySelector(".movements__date");
const labelDateBalance = document.querySelector(".balance__date");

const localApp = navigator.language

function formMovDate (date){
    const calcDayPast = function (date1, date2)
    {return Math.round((date1 - date2) / (1000*60*60*24));}

    const dayPassed = calcDayPast(new Date(), date)
    console.log(dayPassed)

    if(dayPassed === 0) return 'Сегодня'
    if(dayPassed === 1) return 'Вчера'
    if(dayPassed <= 7) return `Прошло ${dayPassed} дней`

    const year = date.getFullYear()
    const month = `${date.getMonth() + 1}`.padStart(2,0)
    const day = `${date.getDate()}`.padStart(2,0)
    const hours = `${date.getHours()}`.padStart(2,0)
    const minutes = `${date.getMinutes()}`.padStart(2,0)

    return `${hours}:${minutes}  ${day}/${month}/${year}`

}




// // //дата по моему...
// let expData = ((new Date(((new Date()).getTime())).toUTCString()).split())[0].split(" ")
// const year = (expData[3])
// const month = (expData[2])
// const day = (expData[1])
// const hoursMin = ((expData[4].split(":")))
// const hours = (hoursMin[0])
// const minutes = (hoursMin[1])
// labelDateBalance.textContent = `${hours}:${minutes}  ${day}/${month}/${year}`




//добавляет на страницу блоки с суммами операций, берет суммы с объкта
function displayMovements(acc, sort = false){
containerMovements.innerHTML = "" //удаляет шаблон

const movs = sort ? acc.movements.slice().sort((a,b)=>a-b) : acc.movements;

movs.forEach(function(value, i){
const type = value > 0 ? "deposit" : "withdrawal";
const typeName = value > 0 ? "Зачисление" : "Снятие";

const date = new Date(acc.movementsDate[i])
const displayDate = formMovDate(date);


const numS = value;
const options = {style: "currency", currency: "UAH" };
const LocalMoney = Intl.NumberFormat(localApp, options).format(numS)
labelBalance.textContent = LocalMoney;

const html = `<div class="movements__row">
<div class="movements__type movements__type--${type}">${i+1} ${typeName}</div>
<div class="movements__date">${displayDate}</div>
<div class="movements__value">${LocalMoney}</div>
</div>`;
containerMovements.insertAdjacentHTML("afterbegin", html)
});};


//Добавляет в объект логин, который создет с имени юзера в объектах (во всех)
function createLogin(accs) {
    accs.forEach((acc)=> {
        acc.logIn = acc.owner.toLowerCase().split(" ").map(function(val){return val[0];}).join("");})}
createLogin(accounts)


// Добаляет на страницу баланс, соответственно суммам операцый в объекте
function calcPrintBalance(acc){
    acc.balance = acc.movements.reduce(function(acc, val){return acc + val });
   
   // labelBalance.textContent = `${acc.balance}`;};
    const numS = acc.balance;
    const options = { style: "currency", currency: "UAH" };
    const LocalMoney = Intl.NumberFormat(localApp, options).format(numS)
    labelBalance.textContent = LocalMoney};

//функция прихода и расхода по счету
 function calcDisplaySumm(movements){ 

 

    const incomes = movements.filter((mov)=> mov > 0).reduce((acc, mov) => acc + mov, 0);
    const numS1 = incomes;
    const options = {style: "currency", currency: "UAH" };
    const LocalMoney1 = Intl.NumberFormat(localApp, options).format(numS1)
    labelSumIn.textContent = LocalMoney1


    const outcomes = movements.filter((mov)=> mov < 0).reduce((acc, mov) => acc + mov, 0);
    const numS2 = Math.abs(outcomes);
    const LocalMoney2 = Intl.NumberFormat(localApp, options).format(numS2)
    labelSumOut.textContent = LocalMoney2


    const numS3 = incomes+outcomes;
    const LocalMoney3 = Intl.NumberFormat(localApp, options).format(numS3)
    labelSumInterest.textContent = LocalMoney3}




//3 Функции в одну фунцию
function updateUi(acc){
    displayMovements(acc)
    calcPrintBalance(acc)
    calcDisplaySumm(acc.movements)
}

// Timeout

// function startLogOut(){
//     let time = 10;

// function tik() {
//     const min = String(Math.trunc(time / 60)).padStart(2,0);
//     const sec = String(time % 60).padStart(2,0);
//     labelTimer.textContent = `${min}:${sec}`;
    
//     if (time == 0){
//         clearInterval(timer);
//         containerApp.style.opacity = 0;}

//     time--;
// }

// tik();
// const timer = setInterval(tik, 1000);
// }


function startLogOut(){
    let time = 300;

function tik() {
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec = String(time % 60).padStart(2,0);
    labelTimer.textContent = `${min}:${sec}`;
    
    if (time == 0){

        containerApp.style.opacity = 0;
        labelWelcome.textContent = "Время вышло, зайдите заново"
        clearInterval(timer);}

    time--;
}

tik();
const timer = setInterval(tik, 1000);
return timer;
}




// ввод пина

let currentAccount;
let timer
btnLogin.addEventListener('click', (e)=>{e.preventDefault(); 
currentAccount = accounts.find(acc => acc.logIn === inputLoginUsername.value)
console.log(currentAccount);

if (currentAccount && currentAccount.pin === Number(inputLoginPin.value))
{
    containerApp.style.opacity = 100
    inputLoginPin.value = inputLoginUsername.value = "";
    userError.style.opacity = 0
    pinError.style.opacity = 0
    labelWelcome.textContent = `Пользоваель ${currentAccount.owner}, nick: ${currentAccount.logIn}`

    const options ={
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        //second: "numeric",
        //timeZoneName: "short",
        hour12: false,}

        // labelDateBalance.textContent = Intl.DateTimeFormat(localApp, options).format(new Date())
    
    if(timer){
        clearInterval(timer)
    }
    timer = startLogOut()
    updateUi(currentAccount)
    
    // displayMovements(currentAccount.movements)
    // calcPrintBalance(currentAccount)
    // calcDisplaySumm(currentAccount.movements)
}
else if (currentAccount && currentAccount.pin !== Number(inputLoginPin.value))
{
    containerMovements.innerHTML = ""
    pinError.style.opacity = 100
    userError.style.opacity = 0
    containerApp.style.opacity = 0
}
else if (currentAccount === undefined)
{
    containerMovements.innerHTML = ""
    userError.style.opacity = 100
    pinError.style.opacity = 0
    containerApp.style.opacity = 0
};

});

//перевод на другой аккаунт

btnTransfer.addEventListener('click', function(e) 
{e.preventDefault();
const reciveAcc = accounts.find(function (acc) 
{return acc.logIn === inputTranfetTo.value});
const amount = Number(inputTranfetAmount.value);

if (reciveAcc && amount > 0 && currentAccount.balance >= amount && reciveAcc.logIn !== currentAccount.logIn) 
{
currentAccount.movements.push(-amount)
reciveAcc.movements.push(amount)

currentAccount.movementsDate.push(new Date)
clearInterval(timer)
timer = startLogOut()
updateUi(currentAccount)
inputTranfetTo.value = inputTranfetAmount.value = ""
}
});



// Закрытие аккаунта
btnClose.addEventListener('click', (e)=> {e.preventDefault()
if (inputCloserUsername.value === currentAccount.logIn && Number(inputCloserPin.value)=== currentAccount.pin)
{
const index = accounts.findIndex((acc)=> {
    return acc.logIn === currentAccount.logIn
})
console.log(index)
accounts.splice(index, 1)
containerApp.style.opacity = 0;
inputCloserUsername.value = inputCloserPin.value = ""
}
})



// Добавление на счет
btnLoan.addEventListener('click', function(e) 
{e.preventDefault();
const amountIn = Number(inputLoanAmount.value);
currentAccount.movements.push(amountIn)
currentAccount.movementsDate.push(new Date)
clearInterval(timer)
timer = startLogOut()
updateUi(currentAccount)
inputLoanAmount.value = ""
})

// Сортировка
let sorted = false;
btnSort.addEventListener('click', (e)=> {e.preventDefault()
displayMovements(currentAccount, !sorted)
sorted = !sorted // сортировка, отмена сортировки
})


labelBalance.addEventListener('click', ()=>{
Array.from(document.querySelectorAll(".movements__value, .summary__value, .balance__value"), (val, i)=>(val.innerText = val.textContent.replace("₴", "UAH")))
})

// Время на странице в реальном времени
    const myTimer = setInterval(()=>{
        let hour = String(new Date().getHours()).padStart(2,0)
        let min = String(new Date().getMinutes()).padStart(2,0)
        let sec = String(new Date().getSeconds()).padStart(2,0)
        labelDateBalance.textContent = `${hour}:${min}:${sec}`
    },1000)

















/* СОБАКИ И ИХ ЕДА))) Фильті и сортировка, масиві, и работа с ними
const dogs = [
    {weight: 22, curFood: 251, owner: ['Anna', 'Victor']},
    {weight: 8, curFood: 200, owner: ['Masha']},
    {weight: 13, curFood: 250, owner: ['Marina', 'Dima']},
    {weight: 32, curFood: 340, owner: ['Ivan']},
];

dogs.forEach((dog)=> dog.recomFud = Math.trunc(dog.weight ** 0.75 * 28))

const dogMarina = dogs.find((dog)=> dog.owner.includes("Marina"))


console.log(`God Marina eat ${dogMarina.curFood > dogMarina.recomFud ? "Much" : "little"}`)

const ownerEatTooMach = dogs.filter(dog => dog.curFood > dog.recomFud).map(dog => dog.owner).flat();
console.log(ownerEatTooMach)
const ownerEatToolittle = dogs.filter(dog => dog.curFood < dog.recomFud).map(dog => dog.owner).flat();
console.log(ownerEatToolittle)

console.log(`Собаки владельцев ${ownerEatTooMach.join(", ")} едят слишком моного, а собаки владельцев ${ownerEatToolittle.join(", ")} едят слишком мало`)

console.log(dogs.some(dog=> dog.curFood === dog.recomFud))
console.log(dogs.some(dog=> dog.curFood > dog.recomFud * 0.9 && dog.curFood < dog.recomFud * 1.1))

console.log(dogs.filter(dog=> dog.curFood > dog.recomFud * 0.9 && dog.curFood < dog.recomFud * 1.1))

const sortDogs = dogs.slice().sort((a,b)=> a.recomFud - b.recomFud)
console.log(sortDogs)

const sortDogsWe = dogs.slice().sort((a,b)=> a.weight - b.weight)
console.log(sortDogs)
*/



// labelBalance.addEventListener('click', function () {
//     Array.from(document.querySelectorAll(".movements__value"), function (val, i) {
//         return (val.innerText = val.textContent.replace("₴", "UAH"));
//     });
//     });







// console.log(             //функция сортировки чисел
// account2.movements.sort((a,b)=>{if(a>b){return 1}if(a<b){return -1}})
// )

// console.log(             //функция сортировки чисел в массиве
// account3.movements.sort((a,b)=>a-b)
// )





// const allMov = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);

//  console.log(allMov)


//  const accMov = accounts.map(acc => acc.movements)

//  const allMov = accMov.flat()
 
//  const allBalance = allMov.reduce((acc, mov) => acc + mov);
 
//   console.log(allBalance)

// const allMov = ((accounts.map(acc => acc.movements)).flat()).reduce((acc, mov) => acc + mov);









// btnLoan.addEventListener('click', function(e) 
// {e.preventDefault();
// const amountIn = Number(inputLoanAmount.value);
// if (amountIn > 0){
// currentAccount.movements.push(amountIn)
// updateUi(currentAccount)
// inputLoanAmount.value = ""
// }
// })








// const index = accounts.findIndex(function(acc){
// return acc.logIn === "vp";
// });

// console.log(index)




// console.log("Ok")




/*
const arr8 = [100, 25, -125, -15, -25, 180, 120, -150];
const Summ1 = arr8.reduce(function(acc, val, key, arr8){
    return acc + val
}, 100)
console.log(Summ1)
*/

/*
let finder = accounts.find((acc)=> acc.owner === "Iryna Vyhovska"); // поиск по аккаутам
console.log(finder)
*/
/*
const arr8 = [100, 25, -125, -15, -25, 180, 120, -150];

const arrPol = arr8.filter(function(val){
    return val > 0
})

const arrNeg = arr8.filter(function(val){
    return val < 0
})

console.log(arrPol)
console.log(arrNeg)
*/

/*
const arr8 = [100, 25, -125, -15, -25, 180, 800, -150];
const max = arr8.reduce(function(acc, val){
    if (acc > val) {
        return acc;
    }
    else { 
        return val;
    };
})
console.log(max)
*/

/*

const dog1 = [2, 5, 8, 7, 4, 3, 2, 7];
const dog2 = [4, 3, 5, 7, 2, 7, 5, 8];

function calcAgeDog (dogs) {
    const humanAge = dogs.map((age)=>{
    return age <= 2 ? 2 * age : 16 + age * 4 // если возраст меньше или равно 2, то возраст умножаем на 2, исли больше 2х, то возраст умножаем на 4 + 16
    });
    const oldDogs = humanAge.filter((age)=>{  //фильтрация больше 18
        return age >= 18
    });
    const sredee = oldDogs.reduce((acc, age)=>{
      return acc + age; // общая сумма всех цифр
    }) / oldDogs.length; // среднее значени

    console.log(sredee)
}

calcAgeDog(dog2)
*/
























//  const uah = [580, 6774, 5544, 5842]
 
// //  let usd = []
// //  uah.forEach(function (value){
// //  usd.push((value/37.5).toFixed(2))
// //  });
// //  console.log(usd)

// // let usd2 = uah.map((value)=>{
// //     return (value / 37.5).toFixed(2)})
//     let usd3 = uah.map((value)=>(value / 37.5).toFixed(2))
// console.log(usd3)