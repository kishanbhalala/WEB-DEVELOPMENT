// ***** 1. what is javascript  :- 

// JavaScript is the Programming Language for the Web
// JavaScript can update and change both HTML and CSS.
// JavaScript can calculate, manipulate and validate data.


// ***** 2.what are javascript data types?  :- 

// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.


// ***** 3.what is the use of isNaN function? :-

// In JavaScript NaN is short for "Not-a-Number".
// The isNaN() method returns true if a value is NaN.
// The isNaN() method converts the value to a number before testing it.

// example:-

// isNaN('123');              //false
// isNaN('Hello');            //true
// isNaN('2005/12/12');       //true


// ***** 4.is it possible to break javascript code into several lines? :-   backslash()

// We can break JavaScript code into several lines by using the backslash () at the end of the line.



// ***** 5.which company developed javascript :-

// JavaScript was created at Netscape Communications by Brendan Eich in 1995. 
// Netscape and Eich designed JavaScript as a scripting language for use with the company's flagship web browser, Netscape Navigator.



// ***** 6.write the code for adding new elements dynamically? with example :-

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


// ***** 7.what are global variables ? how are these variables declared? :-

// Global Variables are the variables that can be accessed from anywhere in the program
// These are the variables that are declared in the main body of the source code and outside all the functions. These variables are available to every function to access. 
// Var keyword is used to declare variables globally.

// {
//     var a = "kishan";     //global var

//     function hello()
//     {
//         var b = "bhalala"      //local var
//         document.write(a + "<br>")
//     }
//     hello();
//     document.write(a)

// }


// ***** 8.what is the '===' operator? 

//     ===	equal value and equal type
// {
//     var a = 10;
//     var b = 20;
//     var c = a === b;   //value and datatype same hoi to j true nkr false 
//     console.log(c);
// }



// ***** 9. what are all the looping structures in javascript

// while (condition) {
//     code to be executed
//      increment
// }

// do{
//     code to be executed
//      increment
// }while (condition);

// {
//     for(initialization; condition: increment)
//     {
//         code to be executed
//     }
// }



// ***** 10. difference between == and === in javascript

// The main difference between the two is == check for same values and '===' also checks for 
// the datatype to be same as well. === is a strict comparison operator

// var a = 12;
// var b = 12;

// var c = a == b;    //value same hoi to true nkr false
// var c = a === b;   //value and datatype same hoi to j true nkr false
// console.log(c);



// ***** 11. what is an undefined value in javascript 

// let x;
// if (x === undefined) {
//   text = "x is undefined";
// } else {
//   text = "x is defined";
// }
// document.getElementById("demo").innerHTML = text;



// ***** 12. what are all the types of pop up boxes available in javascript

// Alert box, Confirm box, and Prompt box.




// ***** 13. how can you create an object in javacript

// Using an object literal, you both define and create an object in one statement.
// An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

// example :-
// {
//     const person = {
//         firstName: "John",
//         lastName: "Doe",
//         age: 50,
//         eyeColor: "blue"
//       };
//       document.write(person.firstName + " is " + person.age)
// }




// ***** 14. how can you create an array in javacript

// const cars = ["Saab", "Volvo", "BMW"];
// document.write(cars)



// ***** 15. what are the scopes of a variable in javascript ? (with example)

// Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
// Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.



// ***** 16.what will be the output of the following code snippet 

// {
//     var a = "skillqode";
//     var b = a.substring(2,4);
//     document.write(b);                   //il
// } 



// ***** 17. what is the output of the following code snippet

// {
//     console.log(NaN === NaN);         //false
// }



// ***** 18. what is the output of the following code snippet

// {
//     console.log(typeof(NaN));      //number
// }



// ***** 19. what is the output of the following code snippet

// {
//     a = [1,2,3,4,5]
//     console.log(a.slice(2,4));    //3,4
// }




// ***** 20. what is the output of the following code snippet
{
    // var a = "hello";
    // var sum = 0;
    // for(var i = 0; i < a.length; i++)
    // {
    //     sum += (a.charCodeAt(i) - 'a'.charCodeAt(0))
    // }
    // console.log(sum);          //47
}



// ***** 21. what is the output of the following code snippet

// {
//     const example = ({ a, b, c }) => {
//         console.log(b * 2, a * 0, c * 2);
//     };
//     example({ a: 0, b: 1, c: 2 })                        //output =  2 0 4
// }



// ***** 22. what is the output of the following code snippet

// {
//     let s = "00000001111111";
//     let l = 0, r = s.length - 1, ans = -1;
//     while(l <= r)
//     {
//         var mid = Math.floor((l + r) / 2);
//         if (s[mid] == '1') {
//             ans = mid;
//             r = mid - 1;
//         }
//         else
//         {
//             l = mid + 1;
//         }
//     }
//     console.log(ans);          //answer 7
//}



// ***** 23. what is the output of the following code snippet

// {
//     const obj1 = {Name: "hello", Age: 16}
//     const obj2 = {Name: "hello", Age: 16}
//     console.log(obj1 === obj2);
// }



// ***** 24. what is the output of the following code snippet

// {
//     const obj1 = {first: 20, second: 30, first: 50}
//     console.log(obj1);

//     // answer:-
//     // first: 50
//     // second:30
// }



// ***** 25. string pettern
// {
//     var a = ["j","a","v","a","s","c","r","i","p","t"];
//     for(let i = 0; i<10; i++)
//     {
//         for(let j = 0; j<=i; j++)
//         {
//             document.write(a[j] + "&nbsp");
//         }
//         document.write("<br>");
//     }
// }


// ***** 26. what is the output of the following code snippet
// {
//     let a = 1;
//     if(a != null){
//     console.log(1);       // right ans 1
//     }
//     else{
//         console.log(0);
//     }
// }


// ***** 27. what is the output of the following code snippet()
// {
//     function test(javascript) {
//         return (javascript ? "yes" : "no");
//     }
//     ans = true;
//     console.log(test(ans));
// }


// ***** 28. write a javascript function that returns a string with letters in alphabetical order
// {
//     function alpha(str){
//         return str.split('').sort().join('');
//     }
//     console.log(alpha("kishan"));
// }


// ***** 29. write a javascript function that accepts a string as a parameter and finds the longest word within the string
// {
//     function getLongestWord(str) {
//         let words = str.split(' ');
//         let maxLength = 0;
//         let longestWord = '';

//         for (let i = 0; i < words.length; i++) {
//             if (words[i].length > maxLength) {
//                 maxLength = words[i].length;
//                 longestWord = words[i];
//             }
//         }
//         console.log(maxLength);
//         console.log(longestWord);
//     }
//     getLongestWord('This is a string, the longest word and its length will be printed on the console. Isn\'t it incredible ?');
// }




// react task :- 

// {
//    let tea = "tea";
//    let coffee = "coffee";

//    let receipe = prompt("choice");

//     if (tea == receipe) {
//         document.write("It is one of the most popular hot beverages in world and especially in India. A cup of milk tea (chai) in morning gives refreshing feel and put you on track of long hard day. It can be prepared with milk or milk powder and various types of plain or flavored tea powders. This recipe prepares Indian tea using milk, sugar, tea powder and water");
//     }
//     else if (coffee == receipe) {
//         document.write("Our easy whipped coffee recipe is simple enough to make at home. This frothy drink, known as dalgona coffee, might just be your new favourite caffeine kick");
//     }
//     else{
//         document.write("wrong");
//     }
// }


// {
//     let text;
//     let recepie = prompt("choice");
//     switch (recepie) {
//         case "tea":
//             text = "It is one of the most popular hot beverages in world and especially in India. A cup of milk tea (chai) in morning gives refreshing feel and put you on track of long hard day. It can be prepared with milk or milk powder and various types of plain or flavored tea powders. This recipe prepares Indian tea using milk, sugar, tea powder and water"
//             break;
//         case "coffee":
//             text = "Our easy whipped coffee recipe is simple enough to make at home. This frothy drink, known as dalgona coffee, might just be your new favourite caffeine kick"
//             break;
//         default:
//             text = "wrong"
//     }
//     document.write(text)
// }




// insta :-

// {
//     function kishan(names) {
//         this.n = names;   
//     }
//     const jeegar = new kishan("buddy");
//     console.log(jeegar instanceof kishan);
// }


// getter setter 
// {
//     const magicObject = {
//         flag : 1,
//         get value(){
//             return this.flag++;
//         }
//     };

//     if (magicObject.value === 1 && magicObject.value === 2 && magicObject.value === 3) {
//         console.log("i love js");
//     }
// }

// find non repet charcter 
// {
//     const str = 'aabbcddeeeefffk'
//     const non = str => str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char))

//     console.log(non(str));
// }



