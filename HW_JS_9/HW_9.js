/*
- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.


let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Good Morning';
div.style.backgroundColor = 'black';
div.style.color = 'white';
div.style.fontSize = '18px';
document.body.appendChild(div);

let clonedDiv = div.cloneNode(true);
document.body.appendChild(clonedDiv);

div.appendChild(div.cloneNode(true)) // це ж теж додає клона напряму в body?

*/



/*

- Є масив:
['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let array = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul');
array.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
});

document.body.appendChild(ul);
*/


/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]

    let ul = document.getElementsByClassName('courses_list')[0];
    for (course of coursesAndDurationArray){
        let li = document.createElement('li');
        li.innerText = `Курс ${course.title} тривалістю ${course.monthDuration} місяців `;
        ul.appendChild(li);
    }
*/



/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.
*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];



let div = document.createElement('div');
div.classList.add('item');
div.h1.classList.add('heading');
div.p.classList.add('description');


div.innerText = 'Good Morning';
div.h1.style.backgroundColor = 'black';
div.style.color = 'white';
div.style.fontSize = '18px';
document.body.appendChild(div);

let clonedDiv = div.cloneNode(true);
document.body.appendChild(clonedDiv);

/*
==========================

- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

=========================
Цикл в циклі
- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
------------------

 */