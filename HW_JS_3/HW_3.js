
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//let users = [
 //   {
 //       id: 1,
 //       name: 'Leanne Graham',
 //       username: 'Bret',
 //       email: 'Sincere@april.biz',
//        phone: '1-770-736-8031 x56442'
 //   },
 //   {
//        id: 2,
 //       name: 'Ervin Howell',
 //       username: 'Antonette',
 //       email: 'Shanna@melissa.tv',
 //       phone: '010-692-6593 x09125'
 //   },
 //   {
 //       id: 3,
 //       name: 'Clementine Bauch',
//        username: 'Samantha',
//        email: 'Nathan@yesenia.net',
 //       phone: '1-463-123-4447'
//    },
//    {
 //       id: 4,
 //       name: 'Patricia Lebsack',
 //       username: 'Karianne',
 //       email: 'Julianne.OConner@kory.org',
//        phone: '493-170-9623 x156'
 //   },
//    {
//        id: 5,
//        name: 'Chelsey Dietrich',
 //       username: 'Kamren',
 //       email: 'Lucio_Hettinger@annie.ca',
//        phone: '(254)954-1289'
//    },
//    {
//        id: 6,
//        name: 'Mrs. Dennis Schulist',
//        username: 'Leopoldo_Corkery',
 //       email: 'Karley_Dach@jasper.info',
 //       phone: '1-477-935-8478 x6430'
//    },
//    {
 //       id: 7,
//        name: 'Kurtis Weissnat',
//        username: 'Elwyn.Skiles',
//        email: 'Telly.Hoeger@billy.biz',
 //       phone: '210.067.6132'
 //   },
//    {
 //       id: 8,
//        name: 'Nicholas Runolfsdottir V',
//        username: 'Maxime_Nienow',
 //       email: 'Sherwood@rosamond.me',
 //       phone: '586.493.6943 x140'
//    },

 //   {
 //       id: 9,
//        name: 'Glenna Reichert',
 //       username: 'Delphine',
//        email: 'Chaim_McDermott@dana.io',
 //       phone: '(775)976-6794 x41206'
//    },
 //   {
 //       id: 10,
 //       name: 'Clementina DuBuque',
//        username: 'Moriah.Stanton',
//        email: 'Rey.Padberg@karina.biz',
 //       phone: '024-648-3804'
 //   }
//];


 //   for (const user of users) {
 //       document.write(`<div>
 //           <h3>Hello world!</h3>
 //           <hr>
 //       </div>`)

 //   }


//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


//for (let i = 0; i<users.length; i++ ) {
//    let user=users[i]
 //       document.write(`<hr>
//            <div>
//            <h3>Hello world!</h3>
//            </div>`
//        );
 //       document.write(user.id);
//}




//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//let x = 0
//while(x<20) {
//    document.write(`
//    <h1> Good job! </h1>`)
//    x=x+1
//}


//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//let x = 1
//while(x<=20) {
//    document.write(`
//    <h1> Good job! </h1>`, x)
//    x=x+1
//}



//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

   // let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

//ШАБЛОН:
 //   <ul>
 //       <li>ITEM OF ARRAY</li>
//       <!--
//           і тд інші об'єкти масиву
//            ...
//             ...
//             ...
//       -->
 //   </ul>

//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

//-----------------------------------------------

 //   Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

//let products = [
//    {
 //       title: 'milk',
//        price: 22,
//       image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//    },
//    {
//        title: 'juice',
//       price: 27,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//    },
//   {
//       title: 'tomato',
//        price: 47,
//        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//   },
//   {
//        title: 'tea',
//       price: 15,
//       image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//    },
//];

//ШАБЛОН
//<div class="product-card">
//    <h3 class="product-title">TITLE. Price - PRICE</h3>
//<img src="IMAGE" alt="" class="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


//
//-------------------
//   є масив
let users = [
   {name: 'vasya', age: 31, status: false},
   {name: 'petya', age: 30, status: true},
   {name: 'kolya', age: 29, status: true},
   {name: 'olya', age: 28, status: false},
   {name: 'max', age: 30, status: true},
   {name: 'anya', age: 31, status: false},
   {name: 'oleg', age: 28, status: false},
   {name: 'andrey', age: 29, status: true},
   {name: 'masha', age: 30, status: true},
   {name: 'olya', age: 31, status: false},
   {name: 'max', age: 31, status: true}
];


//за допомоги циклу вивести:
//   - користувачів зі статусом true

console.log('Користувачі зі статусом true')
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        console.log(users[i]);
    }
}

//- користувачів зі статусом false
console.log('Користувачі зі статусом false')
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        console.log(users[i]);
    }
}

//- користувачів які старші за 30 років

console.log('Користувачі старші за 30 років')
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        console.log(users[i]);
    }
}



