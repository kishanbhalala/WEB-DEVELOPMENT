/* --- JavaScript CallBack Function --- */

//// simple function calling 
// {
//     function greet(name) {
//         console.log('hey' + " " + name);
//     }
//     greet('kishan')
// }


// callback function 
// {
//     function abc(name, callback) {
//         console.log("hiii" + " " + name);
//         callback();
//     }

//     // callback function 
//     function callme() {
//         console.log("i am first callback function");
//     }

//     // passing function as an argument 
//     abc("kishan" , callme)
// }


/* --- JavaScript Arrow Function --- */

// Arrow function is one of the features introduced in the ES6 version of JavaScript. 
// It allows you to create functions in a cleaner way compared to regular functions.

//// function expression
// {
//     let store = function (x, y) {
//         return x * y;
//     }
//     console.log(store(10,20));
// }

//// using Arrow function 
// {
//     let x = (a, b) => a * b;
//     console.log(x(11,22));
// }



// 1.Arrow function syntax 

{
    // let myFunction = (arg1, arg2, ...argN) => {
    //     statement(s)
    // }

    // // myFunction is the name of the function
    // // arg1, arg2, ...argN are the function arguments
    // // statement(s) is the function body
}
{
    // let myFunction = (arg1, arg2, ...argN) => expression
}

// 2.Arrow Function with No Argument

// {
//     let greet = () => console.log('kishan');
//     greet();
// }

// 3.Arrow Function with One Argument

// {
//     let greet = x => console.log(x);
//     greet('Hello');
// }


// 4.Arrow Function as an Expression

// {
//     let age = 17;
//     //ternary oprator
//     let welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult');
//     welcome();
// }

// 5.Multiline Arrow Functions

// {
//     let sum = (a, b, c) => {
//         let result = a + b + c;
//         return result;
//     }
//     let res = sum(10,20,30);
//     console.log(res);
// }


// 6.this(key) with Arrow Function

{
    // Inside a regular function

    // function person() {
    //     this.name = 'kishan',
    //     this.age = 25,

    //     this.sayname = function () {
    //         // this is accessible
    //         console.log(this.age);

    //         function innerfun () {
    //             // this refers to the global object
    //             console.log(this.age);
    //         }
    //         innerfun()
    //     }
    // }
    // let x = new person();
    // x.sayname();
}

// {
//     // Inside an arrow function

//     function person() {
//         this.name = 'kishan',
//         this.age = 25,

//         this.sayName = function () {
//             console.log(this.name);

//             let innerFunc = () => {
//                 console.log(this.age);
//             }
//             innerFunc();
//         }
//     }

//     const x = new person();
//     x.sayName();
// }

// 7.You should not use arrow functions to create methods inside objects.

// {
//     let person = {
//         name: 'kishan bhalala',
//         age: 25,

//         sayName: () => {
//             console.log(this.age);
//         }
//     }
//     person.sayName();
// }


// --- Javascript Function call() ---

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// The call() method calls a function by passing this and specified values as arguments.

// // Using call() Method
// {
//     function sum(a, b) {
//         return a + b;
//       }

//     // invoking sum() by passing this and 'a', 'b' arguments
//     let result = sum.call(this, 5, 10);
//     console.log(result);
// }


// With and Without Using call() Method

// {
//     // function that finds product of two numbers
//     function product(a, b) {
//         return a * b;
//     }
//     // invoking product() without using call() method
//     let result1 = product(10, 20);
//     console.log("Return value Without using call() method : " + result1);

//     // invoking product() using call() method
//     let result2 = product.call(this, 20, 20);
//     console.log("Return value Using call() method: " + result2);
// }