
//1. Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
/*

let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

strings.forEach(str => {
    console.log(`Довжина стрінги '${str}': ${str.length}`);});
*/



//2. Перевести до великого регістру наступні стрінгові значення
//  'hello world', 'lorem ipsum', 'javascript is cool'
 /*

let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
let uppercaseStrings = strings.map(str => str.toUpperCase());

console.log(uppercaseStrings);
*/



// 3. Перевести до нижнього регістру настипні стрінгові значення
//  'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

/*
let strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
let lowercaseStrings = strings.map(str => str.toLowerCase());

console.log(lowercaseStrings);
*/



 // 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*
let str = ' dirty string   '
console.log(str.trim())
*/



/*

5.Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
*/



//6. є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

/*
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let strings = numbers.map(String);
console.log(strings)

 */


/*
// 7. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]



 */



/*

- є масив
let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

 */



/*
описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
value: '', // '6'-'10', 'ace','jack','queen','king','joker'
color:'', // 'red','black'
}
*/


/*

Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
spades:[],
diamonds:[],
hearts:[],
clubs:[]
}
*/



/*
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
*/
/*
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

 */