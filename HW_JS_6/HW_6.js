
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





//5.Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

/*

let str = 'Ревуть воли як ясла повні';
let stringToarray = str => {
        return str.split(' ');
}

let arr = stringToarray(str);
console.log(arr);
 */


//6. є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

/*
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let strings = numbers.map(String);
console.log(strings)

 */



// 7. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]


/*
let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }  else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }  else {
        return 'Невірне значення. Вкажіть "ascending" або "descending".';
    }
}

    let nums = [11,21,3];
    console.log(sortNums(nums, 'ascending'));
    console.log(sortNums(nums, 'descending'));
    console.log(sortNums(nums, 'other'));

*/


// 8. є масив
/*
let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];

 */

// 8.1 відсортувати його за спаданням за monthDuration
/* coursesAndDurationArray.sort(function(a, b) {
    if (a.monthDuration >= b.monthDuration) {
        return -1;
    } else {
        return 1;
    }
});

console.log(coursesAndDurationArray);

 */

//8.2 відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
/*
let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

console.log(filteredCourses);

 */

/*
let sortDuration = (coursesAndDurationArray) => {
        let coursesAndDurationArrayNew = [];

    if (coursesAndDurationArray.monthDuration[i] >= coursesAndDurationArray.monthDuration[i+1] ) {
        return {};
    }  else  {
        return false
    }
}
sortDuration(coursesAndDurationArray)
console.log(coursesAndDurationArrayNew)
*/



//8.3 за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
/*
let newArray = coursesAndDurationArray.map((course, index) => ({
  id: index + 1,
  title: course.title,
  monthDuration: course.monthDuration
}));

console.log(newArray);

 */



/*
//9.1 описати колоду карт (від 6 до туза без джокерів)


{
cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
value: '', // '6'-'10', 'ace','jack','queen','king','joker'
color:'', // 'red','black'
}
*/

let cardsuit =['spade', 'diamond', 'heart', 'clubs'];
let value =['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];


    let cards =cardsuit.reduce((acc, card) => {
        value.forEach(item =>{

                let color = (card=== 'diamond' || card === 'heart') ? 'red':'black';


        acc.push({
            cardsuit: item,
            value: card,
            color: color
        })

    } )
return acc;
},[])

console.log(cards)

/*
//9.2 знайти піковий туз

console.log(cards.find(card =>card.value ==="spade" && card.cardsuit==='ace'))

//9.3 всі шістки
console.log(cards.filter(card => card.cardsuit ==="6"))

//-9.4 всі червоні карти
console.log(cards.filter(card => card.color ==="red"))

//9.5 всі буби
console.log(cards.filter(card => card.value ==="diamond"))

//9.6 всі трефи від 9 та більше


for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if (card.value === 'clubs') {
        if (card.cardsuit !== '6' && card.cardsuit !== '7' && card.cardsuit !== '8') {
                  console.log(card)
               }
  }
}
*/


/*

// 10. Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
spades:[],
diamonds:[],
hearts:[],
clubs:[]
}
*/





//11. взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker

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