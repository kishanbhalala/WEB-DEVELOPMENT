/* ES6 AKA Ecmascript 2015 */

/* var / let / const variables */
// var :-
// second time re-declare pn kri sko. and re-assign pn kri sko.
// global scope 

// var product = 'Laptop';
// var product = 'Mobile';
// product = 'tablet'           
// console.log(product);

// let :-
// second time re-declare kri sko nhi. but re-assign kri sko.
// blockscope

// let product = 'Laptop';
// let product = 'Mobile';
// product = 'tablet'
// console.log(product);

// const :-
// second time re-declare pn kri sko nhi. and re-assign pn kri sko nhi.
// blockscope

// const product = 'Laptop';
// const product = 'Mobile';
// product = 'tablet'
// console.log(product);


/* Function scope */

// function register() {
//      var username = 'rakesh';
//      var password = 'secret';
// }
// console.log(username);


/* Hoisting */
// Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. 
// Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope  regardless of whether their scope is global or local

// console.log(age);
// let age = 20;


/* window.product */

// var box = "clothes"
// let boxes = "toys"


/* change const value using object */

// const age = {
//     years: 19,
// };
// age.years = 20;
// console.log(age);


/* Arrow Functions */

// function greet() {
//     console.log('Good morning');
// }
// greet();

// const addition = (a , b) => {
//      console.log(a+b);
// }
// addition(10, 20);



/* short method */

// const addition = (a) => {
//      console.log(a+a);
// }
// addition(10);



/* this keyword */

// console.log(this);

// const shop = {
//      purchase(){
//          console.log(this);
//      },
//  };
//  shop.purchase();

//  const shop = {
//      purchase: function(){
//          console.log(this);
//      },
//  };
//  shop.purchase();



/* parent context */

// const shop = {
//     purchase: () => {
//         console.log(this);
//     },
// };
// shop.purchase();




// {
// const myButton = document.querySelector('#myButton');
// const shop = {
//      price: 100,
//      buy: function () {
//           myButton.addEventListener('click', function () {
//                console.log(this);
//                console.log('I spent' + this.price);
//           });
//      },
// };
// shop.buy();
// }

// {
// const myButton = document.querySelector('#myButton');
// const shop = {
//      price: 100,
//      buy: function () {
//           const self = this;
//           myButton.addEventListener('click', function () {
//                console.log(this);
//                console.log('I spent ' + self.price);
//           });
//      },
// };
// shop.buy();
// }


/* Problem solve with arrow function */

// {
// const myButton = document.querySelector('#myButton');
// const shop = {
//     price: 100,
//     buy: function () {
//         myButton.addEventListener('click', () => {
//             console.log(this);
//             console.log('I spent ' + this.price);
//         });
//     },
// };
// shop.buy();
// }



/* Template literals AKA(Also Known As) backticks */


//  {
//  const firstName = 'kishan';
//  const lastName = 'bhalala';
//  console.log(firstName + ' ' + lastName);
//  }


// {
//     const message = 'hello \n' + 'how are you';
// console.log(message);
// }

// {
//     const message = `hello
// how are you
// `
// console.log(message);
// }

// const name = 'Rakesh';
// const message = `hello ${name}
// how are you
// `;
// console.log(message);
 

/* with javascrit expression */

// const name = 'Rakesh';
// const message = `hello ${5 + 6}
// how are you
// `;
// console.log(message);

// Enhanced object literals
// computed propery keys
// Method defination shorthand
// Property shorthand

// { const product = {
//      name : "Mobile",
//      price : 100,
// }
// console.log(product);}

// {const keyName = "name"
// const product = {
//      [keyName]: "Mobile",
//      price : 100,
// }
// console.log(product);}


/* Method Definiation Shorthand */

// {
// const keyName = "name"
// const product = {
//      buy: function() {
//           console.log("hello");
//      }
// }
// product.buy()
// }

// {
//     const keyName = "name"
// const product = {
//      buy(){
//           console.log("hello");
//      }
// }
// product.buy()
// }


/* Property shorthand */

// const accessToken = 'dsjfhkadhskfhk';
// const refreshToken = 'adkjfljdlffdd';

// const user = {
//     accessToken : accessToken,
//     refreshToken :  refreshToken
// };
// console.log(user);

// const user = {
//     accessToken,
//     refreshToken,
// };
// console.log(user);


/*  Destructuring */

// const user = {
//     name: 'John Doe',
//     age: 30,
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);


// {
//      const user = {
//      name: 'John Doe',
//      age: 30,
//  };
// // const { name } = user;
// // console.log(name);

// const { name , age } = user;
// console.log(name);
// console.log(age);
// }



// /* With Alias */ 

// const { name : firstName, age } = user;
// console.log(firstName);
// console.log(user.name);

/* javascript Array */ 

// const data = ['Rakesh', 30, 'Engineer'];
// console.log(data[0]);


