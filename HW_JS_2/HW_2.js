
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let animals = [
    {Tom: {animal_type:'cat', color: 'grey', hair: 'short',age: '5 years'}
    },

    {Kseniy: {animal_type:'cat', color: 'mixed brown-amber', hair: ' long', age: '4 years'}
    },

    {Muha: {animal_type:'cat', color: 'black-white', hair: ' long', age: '10 months'}
    },

    {Kesha: {animal_type:'bird', color: 'yellow', age: '5 months'}
    },

    '10 tigers',

    '228 birds',

    '13 horses',

    '1 lion',

    '2 hyppos',

    '4 monkeys'
    ]

console.log(animals);






// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

//let book1= {
//   title: 'Relic',
//    pageCount: 480,
//    genre: 'Since Fiction and Fantasy'
//}

//let book2= {
//    title: 'Reliquary',
//    pageCount: 375,
//    genre: 'Fiction'
//}

//let book3= {
 //   title: 'The Cabinet of Curiosities',
 //   pageCount: 466,
 //   genre: 'Fiction'
//}

//console.log(book1.title);
//console.log(book2.genre);
//console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

//let authors = [
  //  {name: 'Douglas J Preston',
  //      age: 67},
   // {name:  'Jean-Christophe Grange',
  //      age: 62},
  //  {name: 'Colleen Houck',
  //      age: 54 }
//
//];
//let author1 = authors[0];
//let author2 = authors[1];
//let author3 = authors[2];


//let book1= {
   // title: 'Relic',
   // pageCount: 480,
   // genre: 'Since Fiction and Fantasy',
   // authors: author1
//}

//let book2= {
  //  title: 'Flight Of The Storks',
  //  pageCount: 234,
 //   genre: 'Crime Thriller',
  //  authors: author2

//}

//let book3= {
  //  title: 'Tiger\'s Curse',
 //   pageCount: 513,
  //  genre: 'Fantasy',
 //   authors: author3
//}

//console.log(typeof authors);
//console.log(authors[0]);
//console.log(author2);
//console.log(book1.title);
//console.log(book2.genre);
//console.log(book3.authors.name);



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

//let users = [
 //   {name:'user1',
 //   username: 'Elis',
 //   password: 1234},

 //   {name:'user2',
 //       username: 'Sofi',
 //       password: 1345},

 //   {name:'user3',
 //       username: 'Vlado',
//        password: 7855},

//   {name:'user4',
 //       username: 'Miran',
 //      password: 9876},

 //   {name:'user5',
  //      username: 'Kosta',
  //      password: 9785},

 //   {name:'user6',
  //      username: 'Ingrid',
   //     password: 8675},

 //   {name:'user7',
  //      username: 'Saha',
  //      password: 1234},

 //   {name:'user8',
  //      username: 'Tonya',
  //      password: 8654},

 //   {name:'user9',
  //      username: 'Soledad',
  //      password: 5432},

//    {name:'user10',
 //       username: 'Roman',
 //       password: 4222},

//]

//console.log(users[0].password)
//console.log(users[1].password)
//console.log(users[2].password)
//console.log(users[3].password)
//console.log(users[4].password)
//console.log(users[5].password)
//console.log(users[6].password)
//console.log(users[7].password)
//console.log(users[8].password)
//console.log(users[9].password)

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

//let weather = [
//    {id:'Monday',
//    temperature:{
//        morning: '12 C',
//        day: '15 C',
//        evening: '13 C'
//    }},
//    {id:'Tuesday',
//        temperature:{
//            morning: '10 C',
//            day: '12 C',
//            evening: '8 C'
//        }},

//    {id:'Wednesday',
//        temperature:{
//            morning: '3 C',
//            day: '8 C',
//            evening: '4 C'
//        }},

//    {id:'Thuesday',
//        temperature:{
//            morning: '8 C',
//            day: '9 C',
//            evening: '8 C'
//        }},
//    {id:'Friday',
//        temperature:{
//            morning: '13 C',
//            day: '17 C',
//           evening: '8 C'
//        }},
//    {id:'Saturday',
//        temperature:{
//            morning: '15 C',
//            day: '20 C',
//            evening: '24 C'
//        }},
//    {id:'Sunday',
//        temperature:{
//            morning: '22 C',
//            day: '25 C',
//            evening: '16 C'
//        }},
//]

//console.log(weather[6].temperature.morning)


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

//let x = -3;
//if (x !== 0){
//    console.log('True');
//} else{
//    console.log('False');
//}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//let value = 66
//if (value > 59){
//    console.log('Incorrect value. Please use value from 0 to 59 ')
//}else if (value >= 0 && value <15 ){
//    console.log('1st quarter')
//}else if(value >= 15 && value <30){
//    console.log('2nd quarter')
//}else if(value >= 30 && value <45){
//    console.log('3rd quarter')
//}else if(value >= 45 && value <60) {
//    console.log('4th quarter')
//}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//let a = 1;
//let b = 10;
//let c = 20;
//let d= 31;
//let day = 13;
//if (day >= a && day <b ){
//    console.log('1st decade')
//}else if(day >= b && day <c){
//    console.log('2nd decade')
//}else if(day >= c && day <=d){
//    console.log('3rd decade')
//}else if (day >d) {
//    console.log('Incorrect day. Please use value from 0 to 31')
//}else if (day <a) {
//    console.log('Incorrect day. Please use value from 0 to 31')
//}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//let x= 5
//switch (x){
//    case 1:
//        console.log('Schedule for Monday');
//        break;
//    case 2:
//        console.log('Schedule for Tuesday');
//        break;
//    case 3:
//        console.log('Schedule for Wednesday');
//        break;
//    case 4:
 //       console.log('Schedule for Thursday');
//        break;
//    case 5:
//        console.log('Schedule for Friday');
//        break;
//    case 6:
//        console.log('Schedule for Saturday');
//        break;
//    case 7:
//        console.log('Schedule for Sunday');
//        break;
//    default:
//        console.log('Incorrect day');
//
//}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

//let a = 5;
//let b = 10;

//if (a>b) {
//    console.log('a')
//} else if (b>a ){
//    console.log('b')
//} else if (a == b) {
//    console.log('a=b', a)
//}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

//let x = 0;

//if (!x) {
//    console.log('false')
//}else{
//    console.log('true')
//}



//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let x= coursesAndDurationArray[0].monthDuration;
let y= coursesAndDurationArray[1].monthDuration;
let z=coursesAndDurationArray[2].monthDuration;
let p = coursesAndDurationArray[3].monthDuration;
let r = coursesAndDurationArray[4].monthDuration;
let s = coursesAndDurationArray[5].monthDuration;

if (x>5){
    console.log('Super')
}

if (y>5){
    console.log('Super')
}

if (z>5){
    console.log('Super')
}
if (p>5){
    console.log('Super')
    }

if (r>5){
    console.log('Super')
}
if (s>5){
    console.log('Super')
}






