'use strict'


const daysRu = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", " Friday", "Saturday"]
let myDate = new Date()


let dateRu = "Сегодня: " + daysRu[myDate.getDay()]
let dateEn = "Today is: " + daysEn[myDate.getDay()]

let lang = prompt("ru or en?")
let namePerson = prompt("Введите имя")


let status = namePerson === "Артем" ? console.log("директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log("студент")
let ourDate = lang === "ru" ? console.log(dateRu) : lang === "en" ? console.log(dateEn) : console.log("Ошибка")




if (lang === "ru") {
  console.log(dateRu)
} else if (lang === "en") {
  console.log(dateEn)
} else {
  console.log("Ошибка")
}

switch (true) {
  case lang === "ru":
    console.log(dateRu)
    break;
  case lang === "en":
    console.log(dateEn)
    break;
  default:
    console.log("Ошибка")
}


