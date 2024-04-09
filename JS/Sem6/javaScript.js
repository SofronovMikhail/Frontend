/*1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки*/
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
/*
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.*/
function createCounter(initialCount){
let count = initialCount;
    return {
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        },
    }

}

const count2 = createCounter(5);
count2.decrement();
count2.decrement();
count2.increment();
console.log(count2.getCount());
/*
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
*/
const rootElement = document.querySelector(".root");
let searchClass = ".number3";
let index = 0;
function findElementByClass(rootElementFunction, searchClassFunction){
    if(rootElementFunction.querySelector(searchClassFunction)){
        return console.log(rootElementFunction.querySelector(searchClassFunction)); 
    } 
    index++;
    findElementByClass(rootElementFunction.children[index - 1], searchClassFunction);
};
targetElement = findElementByClass(rootElement, searchClass);
targetElement;
