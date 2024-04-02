const acceptableValue = num =>{
    let value = true;
    (Number.isNaN(Number(num)) ? value = false : value = true);
    return value;
}

let cub = () => {
    let num = prompt("Введите число");
    if (acceptableValue(num)) {
        return console.log(Math.pow(num, 3));
    } else {
        return console.log("Не правильное значение");
    }
}
console.log(cub());

let salary = () =>{
    let num = prompt("Введите вашу заработанную плату");
    if (acceptableValue(num)) {
        return console.log(`Зарплата за вычетом налога в 13%: ${num * 0.87}`);
    } else {
        return console.log("Не правильное значение");
    }
}
console.log(salary());

let max = () =>{
    let number1 = prompt("Введите первое число");
    let number2 = prompt("Введите второе число");
    let number3 = prompt("Введите третье число");
    if (acceptableValue(number1) &&  acceptableValue(number2) && acceptableValue(number3)){
        return console.log(`Максимальное значение: ${Math.max(number1, number2, number3)}`);
    } else {
        return console.log("Какое то значение введено не верно");
    }
}
console.log(max());

let sum = (a, b) =>{
    if (acceptableValue(a) && acceptableValue(b)) {
        return console.log(`Сумма: ${a + b}`);
    } else {
        return console.log("Не правильное значение");
    }
} 
let difference = (a, b) =>{
    if (acceptableValue(a) && acceptableValue(b)) {
       return console.log(`Разность: ${Math.max(a, b) - Math.min(a, b)}`);
    } else {
        return console.log("Не правильное значение");
    }
} 
let multiplication = (a, b) =>{
    if (acceptableValue(a) && acceptableValue(b)) {
        return console.log(`Произведение: ${a * b}`);
    } else {
        return console.log("Не правильное значение");
    }
} 
let divide = (a, b) =>{
    if (acceptableValue(a) && acceptableValue(b)) {
        return console.log(`Деление: ${a / b}`);
    } else {
        return console.log("Не правильное значение");
    }
} 
console.log(sum(7, 10));
console.log(difference(7, 10));
console.log(multiplication(7, 10));
console.log(divide(7, 10));