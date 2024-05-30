/*
Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
==========================


function submitForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;

    var person = {
        name: name,
        surname: surname,
        age: age
    };

    document.getElementById("output").innerText = JSON.stringify(person);
}
*/

/* є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


var numberBlock = document.getElementById("numberBlock");
var currentNumber = localStorage.getItem("number");


if (!currentNumber) {
        currentNumber = 0;
} else {
        currentNumber = parseInt(currentNumber);
}

currentNumber++;

numberBlock.innerText = currentNumber;

localStorage.setItem("number", currentNumber);

*/


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// Виконання - дивитись file index.html  і  sessions.html


/*
=========================
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів

let data = [];
let currentIndex = 0;

for (let i = 0; i < 100; i++) {
    data.push({ id: i + 1, name: "Object " + (i + 1) });
}

function displayObjects(startIndex) {
    let container = document.getElementById("container");
    container.innerHTML = "";

   for (let i = startIndex; i < startIndex + 10 && i < data.length; i++) {
        let object = data[i];
        let div = document.createElement("div");
        div.textContent = "ID: " + object.id + ", Name: " + object.name;
        container.appendChild(div);
    }
}

function showNext() {
    if (currentIndex + 10 < data.length) {
        currentIndex += 10;
        displayObjects(currentIndex);
    }
}

function showPrev() {
    if (currentIndex - 10 >= 0) {
        currentIndex -= 10;
        displayObjects(currentIndex);
    }
}

displayObjects(currentIndex);
*/



// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
/*
let element = document.getElementById("text");
let hideButton = document.getElementById("hideButton");

hideButton.addEventListener("click", function() {
        if (element) {
               element.style.display = "none";
    }
});
*/

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
/*
function checkAge() {

    let age = document.getElementById("ageInput").value;

    if (age < 18) {
         alert("Age less then 18");
    } else {
        alert("Age is 18 and higher");
    }
}
*/


/*
*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додаткова частина для завдання)
*/

/*
function createTable() {
    // Отримуємо значення з інпутів
    let rows = parseInt(document.getElementById("rowsInput").value);
    let cols = parseInt(document.getElementById("colsInput").value);
    let content = document.getElementById("contentInput").value;

     let table = document.createElement("table");
    table.style.border = "1px solid black";
    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = " ";

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = content;
        }
    }

     tableContainer.appendChild(table);
}
*/


/*
*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


function updatePrice() {
    let priceBlock = document.getElementById("priceBlock");

    let lastUpdateTime = localStorage.getItem("lastUpdateTime");
    let lastPrice = localStorage.getItem("lastPrice");

    if (!lastUpdateTime || (Date.now() - parseInt(lastUpdateTime)) >= 10000) {

        if (!lastPrice) {
             lastPrice = 100;
        } else {
               lastPrice = parseInt(lastPrice);
        }

        let updatedPrice = lastPrice + 10;
        priceBlock.innerText = updatedPrice + "грн";

        localStorage.setItem("lastUpdateTime", Date.now());
        localStorage.setItem("lastPrice", updatedPrice);
    } else {
        priceBlock.innerText = lastPrice + "грн";
    }
}

updatePrice();

 */