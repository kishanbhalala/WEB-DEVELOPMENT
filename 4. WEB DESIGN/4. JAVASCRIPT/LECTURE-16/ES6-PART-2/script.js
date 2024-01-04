/* Declarative Way */

// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// console.log(name);
// console.log(age);
// console.log(profession);

/* In Use React */
// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// const [count, setCount] = useState();


/* Default parameters */

// const register = (name, password, image) => {
//     console.log(name, password, image);
// };
// register();

// const register = (name, password, image) => {
//     console.log(name, password, image);
// };
// register('Rakesh', 'secret', 'photo.png');

// const register = (name, password, image = 'test.png') => {
//     const img = image || 'test.png';
//     console.log(name, password, img);
// };
// register('Rakesh', 'secret', 'photo.png');

/* Spread ... */

// const languages = ['c', 'c++', 'javascript'];
// const newLanguages = [...languages];
// console.log(newLanguages);

// const languages = ['c', 'c++', 'javascript'];
// const newLanguages = [...languages, 'typescript'];
// console.log(newLanguages);

// const settings = {
//     volumn: 10, 
//     brightness: 80,
// };
// console.log(settings);

// const settings = {
//     volumn: 10, 
//     brightness: 80,
// };
// const newSettings = settings;
// console.log(newSettings);
// console.log(newSettings === settings);

// const settings = {
//      volumn: 10, 
//      brightness: 80,
//  };
// const newSettings = { ...settings};
// newSettings.volumn = 20;
// console.log(newSettings); 
// console.log(settings); 
// console.log(newSettings === settings);


// const settings = {
//      volumn: 10, 
//      brightness: 80,
//  };
// const newSettings = { ...settings, volumn: 20 };
// console.log(newSettings);
// console.log(newSettings === settings);


// const settings = {
//      volumn: 10, 
//      brightness: 80,
//  };
// const newSettings = { ...settings, contrast: 70 };
// console.log(newSettings);
// console.log(newSettings === settings);

/*  Rest ... */

// const addItems = (a , b , c) => {
//     console.log(a+b+c);
// };
// addItems(1,1,1);

// const addItems = (...items) => {
//     console.log(items);
// }; 
// addItems(3, 2, 4, 10, 30);



/*  For of loop */

// Array, string, Object, set, map

// const numbers = [2, 4, 5, 7];
// for (const num of numbers) {
//     console.log(num);
// }

// const language = 'Javascript';
// for (const char of language) {
//     console.log(char);
// }

// const person = {
//      name: 'Rakesh',
//      city: 'Moscow',
//      brand: 'apple',
//  };
//  for (const entries of person) {
//      console.log(entries);
//  }

// const person = {
//      name: 'Rakesh',
//      city: 'Moscow',
//      brand: 'apple',
//  };
//  for (const entries of Object.entries(person)) {
//      console.log(entries);
//  }

// const person = {
//     name: 'Rakesh',
//     city: 'Moscow',
//     brand: 'apple',
// };
// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }



/*  Promises */

// function login() {
//     setTimeout(() => {
//         console.log('Login..');
//     },3000);
//     setTimeout(() => {
//        console.log('logout..'); 
//     },2000)
// }
// login();
// console.log('Redirecting');

// function login(cb) {
//     setTimeout(() => {
//         console.log('Login..');
//         cb();
//     }, 2000);
// }
// login(() => {
//     // async
//     console.log('Redirecting');
// });

// function login() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              console.log('Login...');
//              resolve();
//          }, 1000);
//      });
//  }
//  login().then(() => {
//       console.log('Redireacting');
//  });

// function login() {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                console.log('Login...');
//                reject();
//           }, 1000);
//      });
// }
// login()
//      .then(() => {
//           console.log('Redirecting..');
//      })
//      .catch((err) => {
//           console.log('Error...');
//      });


/*  find (Array methods) */

// const users = [{ name: 'Rakesh' }, { name: 'John' }];

// const user = users.find((user) => {
//     return user.name === 'Rakesh';
// });
// console.log(user);


/*  findIndex */

// const users = [{ name: 'Rakesh' }, { name: 'John' }];
// const user = users.findIndex((user) => {
//     return user.name === 'John';
// });
// console.log(user);



/*  Set   */

// const uniqueNumbers = new Set();
// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(6);
// uniqueNumbers.add(3);      //same value set ny thay
// uniqueNumbers.add(7);
// console.log(uniqueNumbers);
// console.log(uniqueNumbers.size);
// console.log(uniqueNumbers.has(6));

// const numbers = [4, 5, 6, 4, 7, 6];
// const uniqueNumbers = new Set(numbers);
// console.log(Array.from(uniqueNumbers));


/*  map (Hashtables) */

// const urls = new Map();
// console.log(urls);

// const urls = new Map();
// urls.set('development', 'dev.example.com');
// urls.set('production', 'prod.example.com');
// console.log(urls);
// console.log(urls.get('production'));
// console.log(urls.size);



// const urlsObj = {
//     development: 'dev.example.com',
//     production: 'prod.example.com',
// };
// console.log(urlsObj.production);
// console.log(urlsObj.development);

// const urlsObj = {
//     development: 'dev.example.com',
//     production: 'prod.example.com',
// };
// for (const [key, value] of Object.entries(urlsObj)) {
//     console.log(key, value);
// }
// console.log(urlsObj.size);



/*  classes  */

// function Person(name) {
//     this.n = name;
// }
// const rakesh = new Person('Rakesh');
// console.log(rakesh);

// const john = new Person('John');
// console.log(john);

// rakesh.name = 'Coders Gyan';
// console.log(rakesh);
// console.log(john);

// class Person {
//      name;
//      constructor(name) {
//           this.name = name;
//      }
// }
// const rakesh = new Person('Rakesh');
// console.log(rakesh);


// class Person {   
//     name;
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log('Good morning');
//     }
// }
// const rakesh = new Person('Rakesh');
// console.log(rakesh.greet());


// class GreatPerson extends Person {
//     attitude = 'cool';

//     greet() {
//         console.log('Good Evening');
//     }
// }
// const r = new Person('Rakesh');
// const john = new GreatPerson('Johny');
// john.name = 'Joy';
// console.log(john.greet());



// ESM ( ES6 modules )

// helper file :-
// import * as fff from './helper.js';            

// import {message,user,test} from "./helper.js";
// console.log(message);
//  document.body.innerHTML = message;

// console.log(user("kishan"));
// // user("kishan");

// let a = new test();


///////////////////////////////////

// lib file :-

// import {months,year,us} from "./lib.js"
// console.log(months);
// console.log(year);

// console.log(us);
// let b = new us();
// console.log(b);
 

// import {sayHi, sayBye} from './lib.js';

// sayHi('John'); 
// sayBye('kishan');
