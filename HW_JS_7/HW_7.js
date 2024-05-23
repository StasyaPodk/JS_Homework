/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/
/*
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
let user5 = new User (5, 'Olga',"Petechkina",'opetech@gmail.com','5553235678')
let user6 = new User(6,'Ira','Yurkiw','iyurkiv@gmail.com', '66662380299')
let user7 = new User (7, 'Marina',"Svechkina",'msvechkina@gmail.com','7777235678')
let user8 = new User(8,'Yanina','Morska','ymorska@gmail.com', '88888380299')
let user1 = new User (1, 'Vasya',"Petechkin",'vpetech@gmail.com','1113455678')
let user2 = new User(2,'Kolya','Petrov','kpetrov@gmail.com', '222280299')
let user3 = new User (3, 'Igor',"Petechkin",'ipetech@gmail.com','3333235678')
let user4 = new User(4,'Vadim','Petrovich','vpetrov@gmail.com', '44445380299')
let user9 = new User (9, 'Roman',"Svechkin",'rsvechkin@gmail.com','9993235678')
let user10 = new User(10,'Yan','Guriy','yguriy@gmail.com', '10108380299')



const users = [].concat(user5,user6,user7,user8,user1,user2,user3,user4,user9,user10)
console.log(users)


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

users2= users.filter(user=> user.id% 2 === 0);
console.log(users2)


// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

usersSorted = users.sort((user1,user2)=> user1.id - user2.id )
console.log(usersSorted)
*/

/*

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname , email, phone, order=[]){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

let client1 = new Client(1,'Ivi','One','ione@gmail.com', '111-11-11',['milk','butter','orange juice'])
let client2 = new Client(2,'Aaron','Two','atwo@gmail.com', '222-22-22',['bread','sugar', 'chocolate','mango'])
let client3 = new Client(3,'Theresa','Three','tthree@gmail.com', '333-33-33',['orange juice','banana'])
let client4 = new Client(4,'Igor','Four','ifour@gmail.com', '222-44-22',['bread','sugar', 'chocolate','mango'])
let client5 = new Client(5,'Theresa','Five','tfive@gmail.com', '111-55-11',['milk','butter','orange juice'])
let client6 = new Client(6,'Igor','Six','isix@gmail.com', '666-22-22',['bread','coffee', 'ice-cream','mango','tea'])
let client7 = new Client(7,'Theresa','Seven','tseven@gmail.com', '333-77-33',['orange juice','banana','cocos'])
let client8 = new Client(8,'Igor','Eight','ieight@gmail.com', '888-44-22',['milk','sugar'])
let client9 = new Client(9,'Theresa','Nine','tnine@gmail.com', '111-55-99',['orange juice','tea'])
let client10 = new Client(10,'Igor','Ten','iten@gmail.com', '106-10-22',['ice-cream','mango','tea'])

const clientsSet = [].concat(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
console.log(clientsSet)


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


clientsSet.sort((client1, client2) => client1.order.length - client2.order.length);

console.log(clientsSet);

 */


/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model,manufacturer,year,maxSpeed,engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed= maxSpeed;
    this.engineVolume = engineVolume
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function() {
        for (const key in this) {
             if (typeof this[key] !== 'function') {
                 console.log(`${key} - ${this[key]}`);
                }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
    this.driver = driver;
    };
    }

let car1 = new Car('fiesta', 'ford', 2012, 145, 1.5);
let car2 = new Car('megane', 'renault', 2015, 180, 1.6);

car1.drive();
console.log('-------')

car2.drive();
console.log('--------------')

car1.info();
console.log('-------')

car2.info();
console.log('--------------')

car1.increaseMaxSpeed(10);
console.log(car1.maxSpeed);
console.log('--------------')

car1.changeYear(2014);
console.log(car1.year)
console.log('--------------')

car1.addDriver({ name: 'Oleg', age: 34 });
console.log(car1.driver)
console.log('--------------')

*/



/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car1 = new Car('fiesta', 'ford', 2012, 145, 1.5);
let car2 = new Car('megane', 'renault', 2015, 180, 1.6);

car1.drive();
console.log('-------')

car2.drive();
console.log('--------------')

car1.info();
console.log('-------')

car2.info();
console.log('--------------')

car1.increaseMaxSpeed(20);
console.log(car1.maxSpeed);
console.log('--------------')

car1.changeYear(2020);
console.log(car1.year)
console.log('--------------')

car1.addDriver({ name: 'Petro', age: 28 });
console.log(car1.driver)
console.log('--------------')
*/


/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella(name,age,foot) {
    this.name = name;
    this.age = age;
    this.foot = foot;
}

cinderella1 = new Cinderella('Ammy',38,34);
cinderella2 = new Cinderella('Suzy',24,34.5);
cinderella3 = new Cinderella('Anna',18,35);
cinderella4 = new Cinderella('Olga',16,35.5);
cinderella5 = new Cinderella('Nata',19,36);
cinderella6 = new Cinderella('Kseniya',25,36.5);
cinderella7 = new Cinderella('Cleo',20,37);
cinderella8 = new Cinderella('Robin',20,37.5);
cinderella9 = new Cinderella('Eshli',22,38);
cinderella10 = new Cinderella('Ana',38,38.5);

const cinderellaSet = [].concat(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10)
console.log(cinderellaSet)

let prince = {
    name: 'Andy',
    age: 34,
    foot: 37
}

console.log(prince)

cinderellaSet.forEach(cinderella => {
    if(cinderella.foot === prince.foot){
        console.log(`Принц ${prince.name} знайшов свою попелюшку - ${cinderella.name}`)
    }
})

let foundCinderella = cinderellaSet.find(cinderella => cinderella.foot === prince.foot);

if (foundCinderella) {
    console.log(`Принц ${prince.name} знайшов свою попелюшку- ${foundCinderella.name}`);
} else {
    console.log('Попелюшка не знайдена');
}
*/

//Через Array.prototype.  створити власний foreach, filter, map

Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const user = this[i];
        if(user.age >= 18 && user.age <= 65) {
            callback(user,i,this);
            console.log(`Зателефонувати користувачу ${user.name} за телефоном ${user.phone}`);
        }
    }
};

Array.prototype.customFilter = function(callback){
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        const user = this[i];
            if (user.age>30){
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;

}


Array.prototype.customMap = function(mapping) {
    const mappedArray = [];
    for (let i = 0; i < this.length; i++) {
         mappedArray.push(mapping(this[i]));
    }
    return mappedArray;
};




const users = [
    { id: 1, name: 'Vasya', surname: 'Petechkin', age: 34, phone: '1113455678' },
    { id: 2, name: 'Kolya', surname: 'Petrov', age: 78, phone: '222280299' },
    { id: 3, name: 'Igor', surname: 'Petechkin', age: 18, phone: '3333235678' },
    { id: 4, name: 'Vadim', surname: 'Petrovich', age: 13, phone: '44445380299' }
];

users.customForEach((user) => {
});



const filteredArray = users.customFilter((user) => {
});
console.log(filteredArray)



const mappedArray = users.customMap((user) => {
    return user.surname;
});
console.log(mappedArray);
