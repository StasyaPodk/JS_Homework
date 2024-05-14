
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


/*
function rectangle(x,y) {

    let square = x * y;
        return square;
    }

let a = rectangle(23,12);
console.log(a);


 */


//- створити функцію яка обчислює та повертає площу кола з радіусом r
/*
function circleArea(r){
    let area = Math.PI * r * r;
    return Math.floor(area);
}
let e = circleArea(2);
console.log(e);

 */


//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*
function cylinderArea(R,H){
    let area = 2 * Math.PI * R * (R+H);
    return Math.floor(area);
}
let d = cylinderArea(2,4);
console.log(d);

*/

//- створити функцію яка приймає масив та виводить кожен його елемент
/*
function ArrFn(arr){
        document.write(`${[arr]}`)
    return arr
    }

ArrFn([1,12,12,33,56,67,68])

 */



//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*function paragraph(text){
    document.write(`<div>
        <p>${text}</p>
        </div>
   `)
}
paragraph('hello world');
paragraph('You Like It Darker\n' +
    'Release Date: May 21st, 2024\n' +
    'From legendary storyteller and master of short fiction Stephen King comes an extraordinary new collection of twelve short stories, many never-before-published, and some of his best EVER.\n' +
    '\n')

 */




//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
/*
let numbers = [3,5,8,13];

function swapFn(arr, index1, index2){
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;

    return arr;
}
console.log(swapFn(numbers, 0,1));

 */


//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*
function list(text){
           document.write(`<ul><li>${text}</li>
                                <li>${text}</li>
                                <li>${text}</li>
                            </ul>`)
}
list('hello world!')


*/



//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*
function list(text,count){
    for(let i=0; i<count; i++){
        document.write(`<ul><li>${text}</li></ul>`)
    }
}
list('hello world!', 3)


 */


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
function JS_List(arr) {
    let jsList = "";

        for (let i = 0; i < arr.length; i++) {
               jsList += "  ";
        if (typeof arr[i] === 'string') {
            jsList += "'" + arr[i] + "'";
        } else {
            jsList += arr[i];
        }
        jsList += "";
    }

    jsList += " ";

    return jsList;
}

let arr = [5, false, 25, 'hello', true, 28];
let jsList = JS_List(arr);
console.log(jsList);

*/



//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*

function displayObjects(objects) {

    for (var i = 0; i <= objects.length; i++) {
                 document.write(`<div> 
                                     <p>ID: ${objects[i].id}</p>
                                     <p>Name: ${objects[i].name}</p>
                                      <p>Age: ${objects[i].age}</p>
                                      </div> 
                                      <hr>`);
    }
}

let objects = [
    {id: 1, name: 'Ivan', age: 25},
    {id: 2, name: 'Petro', age: 30},
    {id: 3, name: 'Sergiy', age: 40}
];

displayObjects(objects);

*/

//- створити функцію яка повертає найменьше число з масиву
/*
function LowestValue(array) {
    if (array.length === 0) {
        return "Array is empty";
    }

    let lowest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i];
        }
    }
    return lowest;
}

let numbers = [75, 24, 9, 32, 76];
console.log("Lowest value in the array:", LowestValue(numbers));

 */

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
/*
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let numbers = [5, 3, 9, 1, 7];
console.log("Сума елементів масиву:", sum(numbers));

 */



//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250 */

/*
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }

    return "Currency not found.";

}

x = exchange(230000,[{currency:'USD',value:40},{currency:'EUR',value:42},{currency:'UAH',value:1}],'USD')
console.log(x)

 */