
// Function Types :- 

//1. Function declarations
//2. Anonymous function 
//3. Arrow function 
//4. Callback function 
//5. Function expressions 
//6. Immediately invoked function expression(IIFE)
//7. Higher order function 
//8. Constructor function 
//9. generator function 




// 1. (Named)Function declarations  :- 
// Lacacy / traditional way 
// It is defined using the 'function' keyword followed by a function 'name' with parenthesis(). 
// These functions are also called regular functions.

// {
//     function greet() {
//         console.log( "Hello World");
//     }
//     greet()
// }

//2. Anonymous function  :-
// These are functions without a name assigned to a variable.

// {
//     let greet = function() {
//         console.log( "Anonymus Hello World");
//     }
//     greet();
// }

// {
//     let greet = function(name) {
//         console.log(`${name}`);
//     }
//     greet("Anonymus argument");
// }

//3. Arrow function  :-
// It provides a concise syntax for writing functions, especially for short, one-liner functions omitting the function keyword
// It allows you to create functions in a cleaner way compared to regular functions.
// You should not use arrow functions to create methods inside objects.

// {
//     var greet = () => {console.log("Arrow Hello world")};
//     greet();
// }

// {
//     let x = (a, b) => a * b;
//     console.log(x(11,22));
// }

// {
    // Arrow Function as an Expression
//     let age = 17;
//     let welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult');
//     welcome();
// }

{
    // this(key) with Arrow Function
    // => 'this' no use kro cho atle ke aakha object no refrance

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

//4. Callback function :-
// Callback functions are functions passed as arguments to other functions to be executed later, commonly used in asynchronous operations, event handling, and array methods like forEach, map, filter, etc.

// {
//     function abc(name, callback) {
//         console.log("hiii" + " " + name);
//         callback();
//     }
//     // callback function 
//     function callme() {
//         console.log("i am first callback function");
//     }
//     abc("kishan" , callme)
// }



//5. Function expressions  :-
// The function keyword can be used to define a function inside an expression. 

// {
//     const getArea = function (width, height){
//         return width * height;
//     }
//     console.log(getArea(10,20));
// }

//6. Immediately invoked function expression(IIFE) :-
// Immediately Invoked Function Expressions (IIFE) Executed immediately after their creation. 
// Used to create private scopes and avoid polluting the global namespace.

// {
//     (function(){
//         let str = "hey kishan"
//         console.log(str);
//     })();
// }

//7. Higher order function :-
//  
// eg: map(), filter (), reduce()

// {
//     const numbers = [3, 9, 18];
//     const newArray = numbers.map((e) => e + 10)
//     console.log(newArray);
// }

//8. Constructor function :- 
// Used as blueprints for creating objects with similar properties and methods. 
// They are invoked using the new keyword to create instances of objects.

// {
//     function person(name,age){
//         this.name= name;
//         this.age = age;
//     }
//     let user1 = new person("kishan",25)

//     console.log(`${user1.name} is age ${user1.age}`);
// }

//9. generator function :-
// Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous.

// {
//     function *GeneratorFun(){
//         let x = 100
//         yield "first step";   

//         yield 20; 

//         let y = "kishan"; 
//         yield y;

//         console.log("last exucate");
//     } 
    
//     var GF = GeneratorFun();
//     console.log(GF.next());
//     console.log(GF.next());
//     console.log(GF.next());
//     console.log(GF.next());
// }