function evenOdd(){
    for(let i = 0; i <= 10; i++){
        if(i === 0){
            console.log(`${i} - это ноль`);
        }
        else if(i % 2 === 0) {
            console.log(`${i} - четное`);
        }
        else{
            console.log(`${i} - нечетное`);
        }
    }
}
evenOdd();

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

function random(){
    const randomArray = new Array(5);
    let sum = 0;
    let min = Infinity;
    let search = "В массиве нет цифры 3";
    for(let i = 0; i <= randomArray.length - 1; i++){
        randomArray[i] = Math.floor(Math.random() * 10);
        sum += randomArray[i];
        if(min > randomArray[i]){
            min = randomArray[i];
        }
        if(randomArray[i] === 3){
            search = randomArray[i];
        }
    }
    console.log(randomArray);
    console.log(`сумма = ${sum}`);
    console.log(`минимальное значение = ${min}`);
    console.log(`искомое число = ${search}`);
}
random();

function mountains() {
    let letter = " x";
    for(let i = 0; i <= 20; i++){
        let line = "";
        for (let j = 0; j < i; j++) {
            line += letter;
        }
        console.log(line);
    }
}
mountains();