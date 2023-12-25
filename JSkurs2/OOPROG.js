"use strict";

// function UserNEW(firsName, name, ageBorn){
// this.firsName = firsName;
// this.name = name;
// this.ageBorn = ageBorn;}


// UserNEW.prototype.calcAge = function(){
//     return (new Date().getFullYear()) - this.ageBorn}


// const victor = new UserNEW("Victor", "Ivanets", 1980)

// console.log(victor)
// console.log(victor.calcAge())


// class UserNEW {
//     constructor(fullName, YearBorn){
//     this.firsName;
//     this.name;
//     this.age;
//     this.YearBorn = YearBorn;
//     this.fullName = fullName;
// }
// get YearBorn(){
//         return new Date().getFullYear() - this.age}
// get fullName(){
//         return `${this.name} ${this.firsName}`}
    
// set YearBorn(val){
//     const year = '' + val

//     if(year.length != 4){              //////////Почему не работает && ????????????&
//         this.age = "ERROR SYMBOL"
//         return }
    
//     this.age = new Date().getFullYear() - year

//     if(this.age > 100){
//         this.age = "ERROR YEAR"
//         return }
//     }


// set fullName(val){
//     if (val.length < 5){
//         this.fullName = "NAME ERORR";
//         return }
        
//     const name = val.split(" ")
//     this.firsName = name[0]
//     this.name = name[1]

//     if (name[1] == undefined){
//         this.fullName = "LastNAME ERORR";
//         return }
//     }
// }
    

   
//     const victor = new UserNEW("Vic Ivanets", 1980)
//     const irina = new UserNEW("Iryna Ivanets", 1989)
    

//     console.log(victor.age)
//     console.log(irina.age)
//     console.log(victor.fullName)
//     console.log(irina.fullName)


//*****************



// class UserNEW2{
//     constructor(fullName){
//     this.firsName;
//     this.name;
//     this.fullName = fullName;}

// get fullName(){
//         return `${this.name} ${this.firsName}`}

// set fullName(val){
// if (val.length < 5){
//     this.fullName = "ERORR NAME";
//     return
// }

// const name = val.split(" ")
// this.firsName = name[0]
// this.name = name[1]
//     }}
    
//     const victor2 = new UserNEW2("Victor Ivanets")
//     const irina2 = new UserNEW2("Iryna Vyhovska")
    
//     console.log(victor2.fullName)
//     console.log(irina2.fullName)













// let mPh = 1.6



//     class Car{
//         constructor(mark, speed){
//             this.mark = mark;
//             this.speed = speed;
//             this.speedUS;
//         }

// get speedUS(){
//     return this.speed / mPh
// }
// set speedUS(speedUS) {
//     this.speed = speedUS * mPh
// }

// upspeed() {
//             this.speed += 15;
//             return `Автомобиль ${this.mark} едес со скоростью ${this.speed}`
//             }   
// downspeed() {
//             this.speed -= 20;
//             return `Автомобиль ${this.mark} едес со скоростью ${this.speed}`
//             } 
//           }

// const avOpel = new Car("Opel", 100)
// const avFiat = new Car("Fiat", 90)     

// // avOpel.upspeed()
// // avFiat.upspeed()

// // console.log(avOpel.upspeed())
// // console.log(avOpel.downspeed())
// // // console.log(avOpel.speedUS)
// console.log(avOpel)
// // console.log(avFiat.upspeed())
// // console.log(avFiat.downspeed())
// // // console.log(avFiat.speedUS)
// console.log(avFiat)



// const Car = function(mark, speed){
//         this.mark = mark;
//         this.speed = speed;
//     }

//     Car.prototype.upspeed = function(){
//         this.speed += 15;
//         return `Автомобиль ${this.mark} едес со скоростью ${this.speed}`
//     }
//     Car.prototype.downspeed = function(){
//         this.speed -= 20;
//         return `Автомобиль ${this.mark} едес со скоростью ${this.speed}`
//     } 

// const avOpel = new Car("Opel", 120)
// const avFiat = new Car("Fiat", 90)     


// console.log(avOpel.upspeed())
// console.log(avOpel.downspeed())
// console.log(avFiat.upspeed())
// console.log(avFiat.downspeed())
            
       
// class UserNEW {
//     constructor(firsName, YearBorn){
//     this.firsName = firsName;
//     this.age;
//     this.YearBorn = YearBorn;
// }
// get age(){
//         return new Date().getFullYear() - this.YearBorn}

    
// set age(val){
//     const year = val
//     console.log(age)

//     if(year.length != 4){        
//         this.age = "ERROR SYMBOL"
//         return }
    
//     this.YearBorn = new Date().getFullYear() - year

//     if(this.age > 100){
//         this.age = "ERROR YEAR"
//         return }
//     }

// }
    

   
//     const victor = new UserNEW("Vic Ivanets", 190)
//     const irina = new UserNEW("Iryna Ivanets", 1989)
    

//     console.log(victor)
//     console.log(irina)


// class Article {
//     constructor(title, date)
//     {
//     this.title = title;
//     this.date = date;
//     }
// static createToday(){
//     return new this("New NEWS", new Date().getDate())
// }

// }
// console.log(Article.createToday())

// const newProto = {
//     calcBirde(){
//         return new Date().getFullYear() - this.age
//     },
//     init(name,age){
//         this.name = name;
//         this.age = age;
//         this.bird = this.calcBirde()
//     }
// }



// const user1 = Object.create(newProto)
// user1.init("Victor", 43)

// console.log(user1)


// const user2= Object.create(newProto)
// user2.init("Iryna", 34)

// console.log(user2)


// const user3 = Object.create(newProto)
// user3.init("Vova", 38)

// console.log(user3)
/////////////////////////////////////////////////////////////////////////////////////////
class Rider {
    constructor (firstName, lastName, age, car){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.car = car;
}
calcBirde() {
    return new Date().getFullYear() - this.age}
autoNew() {
    return `${this.car} +1`}
}

const vasya = new Rider("Vasiliy", "Pupkin", 38, "Octavia")
console.log(vasya)

Rider.prototype.passager = function(passager){
    return this.passager = passager}


class RiderBus extends Rider {
    constructor (firstName, lastName, age, car, passager){
    super (firstName, lastName, age, car);
    this.passager = passager;}
}



var nicolay = new Rider("Kolya", "Vuskin", 25, "Reno")
nicolay.passager = nicolay.passager(15)
nicolay.autonew = nicolay.autoNew()

console.log(nicolay)

////////////////////////////////////////////////////////////////////////

let mPh = 1.6

class Car{
constructor(mark, speed){
            this.mark = mark;
            this.speed = speed;
        }
        speedFormPh() {
            return this.speed / mPh}   
        }
// const avOpel = new Car("Opel", 100)
// const avFiat = new Car("Fiat", 90)     
// console.log(avOpel)
// console.log(avFiat.speedFormPh())

class ElectroCar extends Car {
    #battery
    constructor (mark, speed, battery) {
    super (mark, speed);
    this.#battery = battery;
    this.speedformPh = this.speedFormPh();
    this.dinamic = this.upspeedElectro();
}

battLow(val){
     this.#battery = this.#battery += val
     return this
}

upspeedElectro(){
    this.speed += 15;
    this.#battery *= 0.95;
    return `Скорость ${this.mark} ${this.speed} км/ч, или ${this.speedFormPh()}, уровень батареи ${this.#battery} Kw`}
}


const nissan = new ElectroCar("Nissan", 120, 180)

nissan.battLow(10).battLow(35).battLow(-210)
console.log(nissan.upspeedElectro())
nissan.battLow(80).battLow(20).battLow(120)
console.log(nissan.upspeedElectro())
console.log(nissan)






class Account {
    #movements = []
    #pin
    constructor (name, age, pin){
        this.name=name;
        this.age=age;
        this.#pin=pin
        this.birdYear = new Date().getFullYear() - age
    }

deposIn(val){
    this.#movements.push(val)
return this}

deposOut(val){
    this.#movements.push(-val)
    return this}

chngePin(newPin){
    this.#pin = newPin
    return this}

allMov = this.#movements
}
function sumArr(account){
    return account.reduce(function(acc, val){return acc+val})}


var ivanets = new Account("Victor", 43, 1111)
ivanets.chngePin(9999).deposIn(54000).deposIn(544).deposIn(10).deposOut(25).deposIn(43).deposOut(35)
ivanets.sum = sumArr(ivanets.allMov)

console.log(ivanets)




const carousel = new bootstrap.Carousel('#myCarousel')


// const summa = ivanets.sumMov.reduce(function(acc, val){return acc+val})






