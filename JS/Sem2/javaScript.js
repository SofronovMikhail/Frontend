let num1 = Number(prompt("Введите первое число меньше либо равно единицы"));
let num2 = Number(prompt("Введите второе число больше либо равно трем"));
(num1 <= 1  && num2 >= 3) ? console.log("Вы ввели правильные цифры"): console.log("Цифры не верные!");


let test = true;
/*if (test === true) {
console.log('+++');
} else {
console.log('---');
}*/
(test === true) ? console.log('+++') : console.log('---');


let day = Number(prompt("Введите число от 1 до 31 включительно"));
if(day >= 1 && day < 11){
    console.log("Первая декада");
}
else if(day >= 11 && day < 21){
    console.log("Вторая декада");
}
else if(day >= 21 && day < 32){
    console.log("третья декада");
}
else{
    console.log("Вы ввели не верное число");
}


let number = Number(prompt("Введите число"));
console.log(`Coтен: ${(number / 100) % 10 >> 0}`);
console.log(`Десятков: ${(number / 10) % 10 >> 0}`);
console.log(`Единиц: ${number % 10 >> 0}`);