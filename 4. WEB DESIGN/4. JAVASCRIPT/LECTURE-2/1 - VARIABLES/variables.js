//******** javascript variable ********* :-

// A JavaScript variable is simply a name of storage location. 
// There are two types of variables in JavaScript : local variable and global variable.
// There are some rules while declaring a JavaScript variable (also known as identifiers).
// Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
// After first letter we can use digits (0 to 9), for example value1.
// JavaScript variables are case sensitive, for example x and X are different variables.

// var :-  
// The scope of a var variable is functional scope.
// It can be updated and re-declared into the scope.
// It can be declared without initialization.

// let :- 
// The scope of a let variable is block scope.
// It can be updated but cannot be re-declared into the scope. 
// It can be declared without initialization.
l
// const :- 
// The scope of a const variable is block scope.
// It cannot be updated or re-declared into the scope.
// It cannot be declared without initialization.


// examples :-

// ** declaration var() ** 

// {
//     var x = "box" *10;
//     var foo_fa1=20;

//     incorrect declaired...

//     var 123 =50;
//     var *aa = 50;
//     console.log(x);
//     console.log(foo_fa1);

//     NaN :- not a number
// }

// {
//     var a= "rahul";
//     var b= "40";
//     console.log(a - b);
// }   


// *** declaration let() *** 
// {
//     {
//         let num=10;
//         // calling the function inside block
//         console.log(num);
//     }
//     let num=20;
//         // calling the function outside block
//         document.write(num)
// }
// {
//     let num=50;
//     console.log(num);
//     function fun() {
//         document.write(num);
//     }    
//     fun(); //calliing the function
// }
// {
//     function fun() {
//         let num=100;
//         console.log(num);
//     }
//     fun(); //calliing the function
//             // console.log(num);
// }
// {
//     let x=25;
//     {
//         let x =77;
//         {
//             let x = 22;
//             console.log(x);
//         }
//         console.log(x);
//     }
//     console.log(x);
// }
// {
//     let x=55;
//     {
//         let x= 66; //legal
//         console.log(x);
//         document.write(x);
//     }
//     let x=99; //illegal
//     console.log(x);
// }
// {
//     x=12;
//     console.log(x);
//     let x;      //before initialization
// }

// ** declaration const() ** 
{
    // const x= 12;
    // x = 13;
    // x += 1;
    // console.log(x);
}

// {
//     const x = 15;
//     {
//         const x = 93;
//         console.log(x);

//         {
//             const x = 43;
//             console.log(x);
//         }
//         {
//             const x = 33;
//             console.log(x);
//         }
//     }
//     console.log(x);
// }
// {
//     // const x;
//     x =12;
//     console.log(x);
// }
// {
//     // chaging the constent of array is possible in cost array

//     const arr1 = ["kishan","sagar","jeegar","anil"];
//     console.log(arr1.toString());

//     arr1[5] = "narayan";  //possible
//     console.log(arr1.toString());
// }

// {
//     const person = {
//         first_name:"radha",
//         last_name:"krishna",
//         age:20,
//         about:"web devloper and competitive programer"
//     };
//     console.log(person);

//     // it is possible
//     person.first_name = "sita";
//     person.last_name = "ram";
//     person.age = "22";
//     person.about = "ravan killed";
//     console.log(person);

//     // it is not possible
//     // const person={
//     //     first_name:"radha",
//     //     last_name:"krishna",
//     //     age:20,
//     //     about:"web devloper and competitive programer"
//     // }
// }

// ** string with quotes **
// {
//     let x="wor'ld";
//     let y='wor"ld';
//     let z="wor\"ld";
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// ** types of variables **
// {
//     var myInteger =12; //32-bit number (from -2,147,483,648 to 2,147,483,647)
//     var myLong = 747489433333; //64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,77 number5,807)
//     var myFloat =5.5; //32-bit floating-point number (decimal)
//     var myDouble = 74747478282394040.33; //64-bit floating-point number
//     var myBoolean = true; //1-bit true/false (0 or 1)
//     var myBoolean2 = false;
//     var myNotANumber = NaN;
//     var NaN_Example = 0/0; //NaN: Division by Zero is not possible
//     var notDefined; // undefined: we didn't define it to anything yet
//     window.alert(aRandomVariable); //undefined
//     var myNull = null; //null
//  }
