/*  JavaScript Function and Function Expressions */

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.
// JavaScript also has a huge number of inbuilt functions. For example, Math.sqrt() is a function to calculate the square root of a number.



/*   Benefits of Using a Function :-  */
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.



// --- Function Declarations ---

// {
//     function nameofFunction() 
//     {
//         //function body
//     }
// }

// A function is declared using the function keyword.
// The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. 
// For example, if a function is used to add two numbers, you could name the function add or addNumbers.
// The body of function is written within {}.

// {
//     // declaring a function named greet()
//     function greet()
//     {
//         document.write("hi i am kishan")
//     }
//     // function call
//     greet();
// }


// --- 1.Function Parameters --- 

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.

// {
//     function greet(name)
//     {
//         document.write("hello " + name );
//     };
//     let name = prompt("enter the name : ");

//     greet(name);

// }


// --- 2.Add two number ---

// The function is declared with two parameters a and b.

// {
//     function add(a, b) {
//         console.log(a + b);
//     }
//     add(10, 20);
//     add(20, 70);
// }


// --- 3. function return ---

// The return statement can be used to return the value to a function call.
// The return statement denotes that the function has ended. Any code after return is not executed.
// If nothing is returned, the function returns an undefined value.

// {
//     function add(a, b) {
//         return a * b;
//     }
//     let num1 = parseFloat(prompt("enter first number : "));
//     let num2 = parseFloat(prompt("enter second number : "));

//    let result = add(num1, num2);

//    console.log("total " + result);
// }



// --- 4.function Expressions ---

// {
//     // program to find the square of a number
//     // function is declared inside the variable
//     let x = function (num) { return num * num };
//     console.log(x(4));

//     // can be used as variable value for other variables
//     let y = x(3);
//     console.log(y);

//     // variable x is used to store the function. Here the function is treated as an expression. And the function is called using the variable name.
//     // The function above is called an anonymous function.
// }



