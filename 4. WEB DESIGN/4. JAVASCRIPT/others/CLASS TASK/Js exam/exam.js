// 1. What is JavaScript?

// JavaScript is the Programming Language for the Web.
// JavaScript can update and change both HTML and CSS.
// JavaScript can calculate, manipulate and validate data.


// 2. What are JavaScript Data Types?

// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.


// 3. Is it possible to break JavaScript Code into several lines?

// We can break JavaScript code into several lines by using the backslash () at the end of the line.



// 4. What are undeclared and undefined variables?

// Undefined: It occurs when a variable has been declared but has not been assigned any value. Undefined is not a keyword.
// Undeclared: It occurs when we try to access any variable that is not initialized or declared earlier using the var or const keyword

// 5. Write the code for adding new elements dynamically?

// {
//     var newelement=document.createElement("h3");
//     newelement.textContent="hello world";
//     document.body.appendChild(newelement); 

//     var newelement=document.createElement("marquee");
//     newelement.textContent="hello world";
//     document.body.appendChild(newelement); 

//     var newelement=document.createElement("p");
//     newelement.textContent="kishan bhalala";
//     document.body.appendChild(newelement); 
// }



// 6. What are global variables? How are these variables declared?

// Global Variables are the variables that can be accessed from anywhere in the program. 
// These are the variables that are declared in the main body of the source code and outside all the functions. These variables are available to every function to access. 
// Var keyword is used to declare variables globally.
// {
//     var x = 5; // global
//     var y = 5;

//     function someThing() {
//         console.log( x + y);
//     }
//     someThing()
// }



// 7. What is a prompt box?

//  A prompt box is often used if you want the user to input a value before entering a page.
//  When a prompt box pops up, the user will have to click either "OK" or "Cancel"  to proceed after entering an input value. 
//  If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.



// 8. What is the === operator?

// ===	equal value and equal type
// {
//     var a = 10;
//     var b = 20;
//     var c = a === b;   //value and datatype same hoi to j true nkr false 
//     console.log(c);
// }



// 9. Difference between “==” and “===”?

// The main difference between the two is == check for same values and '===' also checks for 
// the datatype to be same as well. === is a strict comparison operator
// {
// var a = 12;
// var b = 12;

// var c = a == b;    //value same hoi to true nkr false
// var c = a === b;   //value and datatype same hoi to j true nkr false
// console.log(c);
// }




// 10. What would be the result of 3+2+”7″?
// {
//     console.log(3+2+"7")              // 57
// }



// 11. What is an undefined value in JavaScript?

// A variable that has not been assigned a value is of type undefined . 
// A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.
// A function returns undefined if a value was not returned .
// {
//     var x;
//     console.log(x);
// }




// 12. What are all the types of Pop up boxes available in JavaScript?

// JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box. 




// 13. What is the difference between an alert box and a confirmation box?

// alert(message): Display a popup box with the specified message with the OK button. 
// confirm(message): Display a popup box with the specified message with OK and Cancel buttons.



// 14. What a pop()method in JavaScript is?

// The pop() method removes (pops) the last element of an array. 



// 15. What are break and continue statements?

// Break statement stops the entire process of the loop.
// Continue statement only stops the current iteration of the loop.
// example:-
// break  
// {
//     for(let a =1; a <= 10; a++)
//     {
//         if(a == 5)
//         {
//             break;
//         }
//         document.write(a);
//         document.write("<br>");
//     }
// }

// continue 
// {
//     for(let a =1; a <= 10; a++)
//         {
//             if(a == 5)
//             {
//                 continue;
//             }
//             if(a == 8)
//             {
//                 continue;
//             }
//             document.write(a);
//             document.write("<br>");  
//         }
// }



// 16. What is the use of a type of operator?

// You can use the typeof operator to find the data type of a JavaScript variable.
// {
// document.getElementById("demo").innerHTML = 
// "'John' is " + typeof "John" + "<br>" +
// "3.14 is " + typeof 3.14 + "<br>" +
// "NaN is " + typeof NaN + "<br>" +
// "false is " + typeof false + "<br>" +
// "[1, 2, 3, 4] is " + typeof [1, 2, 3, 4] + "<br>" +
// "{name:'John', age:34} is " + typeof {name:'John', age:34} + "<br>" +
// "new Date() is " + typeof new Date() + "<br>" +
// "function () {} is " + typeof function () {} + "<br>" +
// "myCar is " + typeof myCar + "<br>" +
// "null is " + typeof null; 
// }



// 17. What are the different types of errors in JavaScript?

// There are 7 types of JavaScript errors: 
//  Syntax error,
//  Reference Error, 
//  Type Error, 
//  Evaluation Error,
//  RangeError, 
//  URI Error 
//  Internal Error.



// 18. What is the unshift method in JavaScript?

// The JavaScript Array unshift() Method is used to add one or more elements to the beginning of the given array. 



// 19. What is the difference between JavaScript and Jscript?

// javascript :-
// It is a scripting language whose trademark is Oracle Corporation
// It was developed in 1995.
// It does not support active content creation.
// All modern browsers support JavaScript.
// It’s code can run in any web browser.
// It cannot access web browser objects

// JScript :-
// It is also a scripting language but owned by Microsoft. 
// It was developed in 1996.
// It can create active online content for WWW.
// It’s only support is Microsoft Internet Explorer.
// It’s code only run in Microsoft browser.



// 20. How can you create an Array in JavaScript?

// const array_name = [item1, item2, ...];    



// 21. What are the scopes of a variable in JavaScript?

// Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
// Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.



// 22. What is the difference between null & undefined?

// Undefined :-
// Undefined means a variable has been declared but has yet not been assigned a value.

// Null :-
// Null is an assignment value. It can be assigned to a variable as a representation of no value.
// Null means an empty value or a blank value. 



// 23. Which is a more efficient JavaScript code snippet?

// Code 1 :
// for loop in javascript
// for(var num=10;num>=1;num--)
// {
//     document.write(num + "<br>");
// }

// Code 2 :
// var num=10;
// while(num>=1)
// {
//     document.write(num);
//     num++;
// }

// a) Code 1       //right answer
// b) Code 2
// c) Both Code 1 and Code 2
// d) Cannot Compare




// 24. What happens in the following JavaScript code snippet?

// var js = 0;
// while (js < 10)
// {
// console.log(js);
// Js++;
// }

// a) An exception is thrown
// b) The values of js are logged or stored in a particular
//     location or storage
// c) The value of js from 0 to 9 is displayed in the console
// d) An error is displayed              //right answer



// 25. What will be the output of the following JavaScript code?

// var quiz=[1,2,3];
// var js=[6,7,8];
// var result=quiz.concat(js);
// document.write(result);

// a) 1, 2, 3, 6, 7, 8         //right answer
// b) 123
// c) 1, 2, 3
// d) Error



// 26. What will be the output of the following JavaScript code?

// int a = 0;
// for(a; a < 5; a++);
// console.log(a);

// a) 4
// b) 5
// c) 0
// d) error    //right answer



// 27. Which of the following is not a framework?

// a) JavaScript .NET
// b) JavaScript         //right answer
// c) Cocoa JS
// d) jQuery



// 28. What will be the output of the following JavaScript code?

// int sanfoundry=1;
// char javascript=1;

// {
//     if (sanfoundry.tostring() === javascript) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// a) runtime error
// b) logical error    //right answer
// c) true
// d) false



// 29.What will the code below output to the console and why?

// var a = b = 3;
// console.log("a defined? " + (typeof a !== 'undefined'));       //true
// console.log("b defined? " + (typeof b !== 'undefined'));       //true



// 30.What will the code below output? Explain your answer.

// console.log(0.1 + 0.2);               //0.30
// console.log(0.1 + 0.2 == 0.3);        // false



// 31.What will the code below output to the console and why?

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// answer: output
// array 1: length=5 last=j,o,n,e,s
// exam.js:349 array 2: length=5 last=j,o,n,e,s



// 32.What will the code below output to the console and why ?

// console.log(1 + "2" + "2");          // 122
// console.log(1 + +"2" + "2");         // 32
// console.log(1 + -"1" + "2");         // 02
// console.log(+"1" + "1" + "2");       // 112
// console.log( "A" - "B" + "2");       // NaN2
// console.log( "A" - "B" + 2);         // NaN



// 33.What will be the output when the following code is executed? Explain.

// console.log(false == '0')          // true
// console.log(false === '0')         // false



// 34.What do the following lines output, and why?

// console.log(1 < 2 < 3);          //true
// console.log(3 > 2 > 1);          //false



// 35.Imagine you have this code:

// var a = [1, 2, 3];
// // a) Will this result in a crash?
// a[10] = 99;
// // b) What will this output be ?
// console.log(a[6]);

// answer :-
// undefined



// 36. Write all string methods in javascript without examples.

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()



// 37. Write a javascript array method shift() and unshift() with examples.

// The shift() method is used to remove an element/item from the starting point of an array.
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.write(cars + "<br>");
//     cars.shift()
//     cars.shift()
//     document.write(cars);
// }
// The unshift() method is used to add an element/item to the starting point of an array.
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.write(cars + "<br>");
//     cars.unshift("farari")
//     document.write(cars);
// }



// 38. Difference var , let and const?

// var :- Always declare variables

// let :- Variables defined with let cannot be Redeclared
//        Variables defined with let must be Declared before use
//        Variables defined with let have Block Scope

// const :- Variables defined with const cannot be Re-declared
//          Variables defined with const cannot be Re-assigned
//          Variables defined with const have Block Scope


// 39. Write all Math methods in javascript without examples

// abs()
// ceil()
// floor()
// max()
// min()
// pow()
// random()
// round()
// sqrt()
// trunc()
// sign()
