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


- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



Через Array.prototype. створити власний foreach, filter, map

 */