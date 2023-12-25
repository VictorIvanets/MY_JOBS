"use strict";



const myTimer = setInterval(()=>{
    let hour = String(new Date().getHours()).padStart(2,0)
    let min = String(new Date().getMinutes()).padStart(2,0)
    let sec = String(new Date().getSeconds()).padStart(2,0)
    console.log(`${hour}:${min}:${sec}`)
},1000)



// const Timer = setInterval((w1, w2, w3)=>{
//     let hour = new Date().getHours()
//     let min = new Date().getMinutes()
//     let sec = new Date().getSeconds()
//     console.log(`${w1}:${w2}:${w3}`)
// },1000, hour, min, sec)


// console.log(`${w1}:${w2}:${w3}`)

// console.log(hour)
// console.log(min)
// console.log(sec)


// setInterval(function(){
//     console.log("sijg")
//     },2000)




//const datBy = ((new Date()).getTime())+300000
//const newDataSte = new Date(((new Date()).getTime())+300000)

// const future5day = new Date(2023, 10, 4).getTime()
// const now = new Date().getTime()

// const setPlus10min = new Date(((new Date().getTime())+600000))


// console.log(setPlus10min)
// console.log(now)
// console.log(future5day)


// const options ={
// year: "numeric",
// month: "long",
// day: "numeric",
// weekday: "long",
// hour: "numeric",
// minute: "numeric",
// //second: "numeric",
// //timeZoneName: "short",
// hour12: false,}

// const interData = Intl.DateTimeFormat(navigator.language, options).format(new Date())


// console.log(interData)



// let addTime = 600000

// let expData = ((new Date((new Date()).getTime()).toUTCString()).split())[0].split(" ")

//let arrTime = (expData[0].split(" "))[0].split(":")

// console.log(arrTime[0])
// console.log(arrTime[1])
// console.log(arrTime[2])

// let expData1 = ((new Date(((new Date()).getTime())).toTimeString()).split())[0].split(" ")[0]

// let expDataW = ((new Date(((new Date()).getTime())+188000000).toUTCString()))
// console.log(expDataW)



// console.log(`Сегодня ${expData[1]}/${expData[2]}/${expData[3]} текущее время ${expData[4]}`)

const expDataR = new Date().toISOString()
//console.log(expDataR)

// let expData1 = ((new Date(((new Date()).getTime())).toTimeString()).split())[0].split(" ")[0]

// console.log(expData1)



/*
function calcRandom(min, max)
{return Math.trunc(Math.random() * (max-min) + 1) + min;}
console.log(calcRandom(50, 80))   // Функция рандомного числа в диапазоне .....

console.log(+(18.5817).toFixed(2)) // 18.58 -  оставляет столько чисел после точки сколько задашь в парметрах. Возвращает как сторку, "+" перед ним, делает их цифрой
/*
console.log(Math.round(18.4817)) // return целое число, округляет до бижайшего целого
console.log(Math.trunc(18.5817)) // return целое число
console.log(Math.trunc(Math.random()*100)) // return random data с округлнием до целого

/*
console.log(Math.max(18, 25, 48, 15)) // return max data
console.log(Math.min(18, 25, 48, 15)) // return min data
/*
console.log(Number.parseInt("12.55px"))  // return 12 (del .55 & px)
console.log(Number.parseFloat("12.55px")) // return 12.55 (del px)
*/