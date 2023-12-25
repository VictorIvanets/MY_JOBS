'use strict'





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

