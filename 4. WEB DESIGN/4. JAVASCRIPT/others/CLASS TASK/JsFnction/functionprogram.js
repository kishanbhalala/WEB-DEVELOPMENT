// JAVASCRIPT FUNCTION PROGRAM

// 1.) Write a JavaScript function that reverse a number.

// {
//     function rev() {
//         result = x.split("").reverse().join("");
//         return result; 
//     }   
//     let  x = prompt("enter :- ");
//     console.log(Number(rev()));  
// }


// 2.) Write a JavaScript function that returns a passed string with letters in alphabetical order.

{
    function alpha(str) {
        var arr = str.split(""); 
        res = arr.sort().join(" ").trimStart(); 
        return res
    }
    console.log(alpha("hey i am kishan bhalala"));
}


// 3.) Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// {
//     function vowel(str) {
//         const a = /[aeiou]/gi;          
//         const strmatch = str.match(a);

//         if (strmatch) {
//             return strmatch.length
//         }
//         else {
//             return 0;
//         }
//     }
//     let  x = prompt("enter string :- ");
//     let len = vowel(x);
//     console.log("total vowel lenght : " + len);
// }


// 4.) Write a JavaScript program to get the current date.

// {

//     function currentdate() {
//        let date = new Date();
//        console.log(date.toDateString());
//     }
//     currentdate();
// }

// 5.) Write a JavaScript program to calculate number of days left until next Christmas.

// {
//     function calculateDates(christmasDate, todayDate) {
//         let dayMilliseconds = 1000 * 60 * 60 * 24;
//         let daysLeft = Math.ceil(
//             (christmasDate.getTime() - todayDate.getTime()) /
//             (dayMilliseconds)
//         );
//         console.log("The number of days left for christmas is: ")
//         console.log(daysLeft)
//     }

//     let todayDate = new Date();
//     console.log("current Dates : ", todayDate)

//     let christmasYear = todayDate.getFullYear();
//     if (todayDate.getMonth() == 11 && todayDate.getDate() > 25) {
//         christmasYear = christmasYear + 1;
//     }

//     let christmasDate = new Date(christmasYear, 11, 25);
//     calculateDates(christmasDate, todayDate);
// }


// 6.) Write a JavaScript program to calculate multiplication and division of two numbers. (input from user).

// {
//     function multiply(a, b) {
//         return a * b;
//     }
//     let num1 = parseFloat(prompt("enter first number : "));
//     let num2 = parseFloat(prompt("enter second number : "));

//     result = multiply(num1, num2);
//     console.log("Total : " + result);
// }

// {
//     function division(a, b) {
//         return a / b;
//     }
//     let num1 = parseFloat(prompt("enter first number : "));
//     let num2 = parseFloat(prompt("enter second number : "));

//     result = division(num1, num2);
//     console.log("Total : " + result);
// }


// 7.) Write a JavaScript program that accept two integers and display the larger.

// {
//     function number(a, b) {
//         if (a > b) {
//             return a;
//         }
//         else {
//             return b;
//         }
//     }
//     let num1 = parseFloat(prompt("enter first number : "));
//     let num2 = parseFloat(prompt("enter second number : "));

//     result = number(num1, num2);
//     console.log("large number : " + result);
// }



// 8.) Write a function to calculate simple interest based on the principle amount.

// {

//     function SI(amount, interest, time) {
//         return (amount * interest * time) / 100;;
//     }

//     let num1 = parseFloat(prompt("enter the amount : "));
//     let num2 = parseFloat(prompt("enter the intrest : "));
//     let num3 = parseFloat(prompt("enter the time : "));

//     simpleIntrest = SI(num1, num2, num3);

//     console.log("Simple Interest = " + simpleIntrest);
// }


// 9.) Write a function to calculate compound interest based on the principle amount

// {

//     function compound(amount, interest, time) {
//         let A =  amount * (Math.pow((1 + interest / 100), time));
//         return A - amount;
//     }

//     let num1 = parseFloat(prompt("enter the amount : "));
//     let num2 = parseFloat(prompt("enter the intrest : "));
//     let num3 = parseFloat(prompt("enter the time : "));

//     a = compound(num1, num2, num3);
//     result = a.toFixed(2)
//     console.log("Compound Interest = " + result);
// }

// 10.) Write a function to generate a random number

// {
//     function random() {
//         return Math.round(Math.random() * 100 + 1);
//     }
//     console.log(random());
// }


// 11.) Write a function to find the count of a letter in a string

// {
//     function len(str) {
//         return str;
//     }
//     let a = prompt("enter the string : ");

//     console.log(len("total lenght : " + a.length));
// }


// 12.) Check if a number is odd or even in JavaScript

// {
//     let num = prompt("enetr number");

//     let oddeven = (num % 2 == 0) ? () => console.log("even number : " + num) : () => console.log("odd number : " + num);

//     oddeven();
// }


// 13.) Find the largest of two number

// {
//     let a = 17;
//     let b = 100;

//     let number = (a > b) ? () => console.log('large : ' + a) : () => console.log('large : ' + b);

//     number();
// }

// 14.) Find check if a year is leap year or not

// {
//     let year = prompt("add the year");

//     let leapyear = (year % 4 == 0) ? () =>  console.log(year + " : is leap year ") : console.log(year + " : is not leap year ");

//     leapyear()
// }


// 15.) Find the grade for input marks

// {
//     function grade(marks) {
//         if (marks > 80) {
//             console.log("marks : " + marks + " grade A");
//         }
//         else if (marks > 60 && marks <= 80) {
//             return console.log("marks : " + marks + " grade B");
//         }
//         else if (marks > 40 && marks <= 60) {
//             return console.log("marks : " + marks + " grade C");
//         }
//         else if (marks > 32 && marks <= 40) {
//             return console.log("marks : " + marks + " grade D");
//         }
//         else {
//             return console.log("marks : " + marks + " Fail");
//         }
//     }

//     let x = prompt("enter the mark");

//     grade(x);
// }