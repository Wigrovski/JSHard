let num = 266219;
//Разбиваем массив на элементы
let array = ("" + num).split("").map(Number);
//перемножаем элементы
let sum = array.reduce((all, item) => all * item);
let sumPow = String(sum ** 3);
//Смотрим что получилос в итоге
console.log(sumPow);
//Выводим первые 2 цифры полученного числа
console.log(sumPow.slice(0,2));
