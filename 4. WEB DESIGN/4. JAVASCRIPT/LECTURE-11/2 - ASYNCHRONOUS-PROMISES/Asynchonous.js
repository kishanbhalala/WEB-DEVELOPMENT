// ***** Asynchronous JavaScript *****

// js is not asynchronous :- sigle threading che
// main stack and side stack vche ni puchtach ne   :-  event loop kevay

// syncronous and asyncronous ?
// syncronous :-
// sync mtlb ek command complate thay pchi j bijo command start thay, line by line output aave.

// asyncronous :-
// async mtlb bdha comaand ek sathe start kri aapva, je kaam pehla thay eno answer aapi dese.
// aama thi koi method use kro cho to tee asyncronous method che :-
// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest


// **************************************** //
// --- Javascript setTimeout() ---
// **************************************** //

// The setTimeout() method calls a function after a number of milliseconds.
// 1 second = 1000 milliseconds.

// syntax :-
{
  // setTimeout(function, milliseconds, param1, param2, ...)
  // function - a function containing a block of code
  // milliseconds - the time after which the function is executed
  // The setTimeout() method returns an intervalID, which is a positive integer.
}

// 1. Display a Text Once After 3 Second

// {
//     function greet() {
//         console.log('hey kishan');
//     }

//     setTimeout(greet, 3000);
//     console.log('this message is shown first');

//      // the setTimeout() method calls the greet() function after 3000 milliseconds (3 second).
// }

// 2.  The setTimeout() method returns the interval id.
// {
//     function greet() {
//         console.log('hello kishan');
//     }
//     let intervalID = setTimeout(greet, 3000);
//     console.log('ID : ' + intervalID);
// }

// 3.  Display Time Every 3 Second
// {
//     function showTime() {
//         let date = new Date();
//         let time = date.toLocaleTimeString();
//         console.log(time);
//         setTimeout(showTime, 3000);
//     }
//     showTime();
// }


// **************************************** //
// --- JavaScript clearTimeout() ---
// **************************************** //

// The clearTimeout() method clears a timer set with the setTimeout() method.
// As you have seen in the above example, the program executes a block of code after the specified time interval.
// If you want to stop this function call, you can use the clearTimeout() method.

// The syntax of clearTimeout() method is
{
  // clearTimeout(intervalID);
}

// example 1:-
{
  // const myTimeout = setTimeout(myGreeting, 3000);
  // function myGreeting() {
  //     document.getElementById("demo").innerHTML = "Happy Birthday!"
  // }
  // function myStopFunction() {
  //     clearTimeout(myTimeout);
  // }
}

// example 2:- start and stop counter
// {
//     let count = 0;
//     let timeOut;
//     let timeOn = 0;

//     function timecount() {
//         document.getElementById("demo1").innerHTML = count;
//         count++;
//         timeOut = setTimeout(timecount,1000);
//     }
//     function startcount() {
//         if(!timeOn) {
//             timeOn = 1;
//             timecount();
//         }
//     }
//     function stopcount() {
//         clearTimeout(timeOut);
//             timeOn = 0;
//     }
// }

// --- JavaScript CallBack Function ---

// callback always function j hoy

// A function is a block of code that performs a certain task when called.
// {
//     function greet (name) {
//         console.log('hiii' + " - " + name);
//     }
//     greet('kishan');
// }

// Program with setTimeout()
// {
//     //  program that shows the delay in execution
//     function greet() {
//         console.log('hello world');
//     }

//     function sayname(name) {
//         console.log('hiii' + " - " + name);
//     }

//     setTimeout(greet, 2000);
//     sayname("kishan");
// }


// ****** JavaScript Promise and Promise Chaining  ******


// In JavaScript, a promise is a good way to handle asynchronous operations.
// It is used to find out if the asynchronous operation is successfully completed or not.
// JavaScript માં, વચન એ અસુમેળ કામગીરીને હેન્ડલ કરવાની સારી રીત છે.
// અસુમેળ કામગીરી સફળતાપૂર્વક પૂર્ણ થઈ છે કે નહીં તે શોધવા માટે તેનો ઉપયોગ થાય છે.

// A promise may have one of three states :-
// Pending
// Fulfilled
// Rejected

// A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.
// For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

// Create a Promise syntex :-
// To create a promise object, we use the Promise() constructor.
{
  // let promise = new Promise(function(resolve, reject){
  //     //do something
  // });
  // // The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().
  // // If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.
}

// Program with a Promise

// {
//     const count = true;
//     let countvalue = new Promise(function (resolve, reject) {
//         if (count) {
//             resolve("there is count value");
//         }
//         else {
//             reject("there is no count value");
//         }
//     });
//     console.log(countvalue);
// }

// --- JavaScript Promise Chaining ---

// Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.
// You can perform an operation after a promise is resolved using methods then(), catch() and finally().
// વચનો ઉપયોગી છે જ્યારે તમારે એક પછી એક કરતાં વધુ અસુમેળ કાર્યને હેન્ડલ કરવું પડે. તે માટે, અમે વચન સાંકળનો ઉપયોગ કરીએ છીએ.
// પછી(), પકડ() અને છેલ્લે() પદ્ધતિઓનો ઉપયોગ કરીને વચન ઉકેલાઈ જાય પછી તમે ઓપરેશન કરી શકો છો.

// - JavaScript then() method -

// The then() method is used with the callback when the promise is successfully fulfilled or resolved.

// The syntax of then() method is

{
  // promiseObject.then(onFulfilled, onRejected);
}

// Chaining the Promise with then() method :-

// the then() method is used to chain the functions to the promise. The then() method is called when the promise is resolved successfully.

// You can chain multiple then() methods with the promise.

// {
//     // returns a promise
//     let countvalue = new Promise(function (resolve,reject) {
//         resolve("promise resolevd");
//     });

//     // executes when promise is resolved successfully
//     countvalue.then(function successvalue(result) {
//         console.log(result);
//     })

//     countvalue.then(function successvalue1() {
//         console.log("you can call multiple functions this way");
//     });
// }

// - JavaScript catch() method -

// The catch() method is used with the callback when the promise is rejected or if an error occurs.

// {
//     let countvalue = new Promise(function (resolve,reject) {
//         reject("promise rejected");
//     });

//     countvalue.then(
//         function a(result) {
//             console.log(result);
//         },
//     )
//     countvalue.catch(
//         function error(result) {
//             console.log(result);
//         }
//     );
// }

// - JavaScript finally() method -
// {
// // You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.
//     let countValue = new Promise(function (resolve, reject) {
//         // could be resolved or rejected
//         resolve('Promise resolved');
//     });
//     // add other blocks of code
//     countValue.finally(
//         function greet() {
//             console.log('This code is executed.');
//         }
//     );
// }

// Best example for promise 1:-
// {
//     function prom(a, b) {
//         return new Promise(function (resolev, reject) {
//             console.log("fatching data,please wait.");
//             c = a / b;
//             setTimeout(() => {
//                 if (a, b) {
//                     resolev(`you answer : ${c}`);
//                 } else {
//                     reject("failed....");
//                 }
//             }, 2000)
//         });
//     }
//     prom(5, 4).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     });
// }

// Best example for promise 2:-

// {
//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('the first promise has resolved..');
//             resolve(10);
//         }, 1 * 1000);
//     });
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('the second promise has resolved..');
//             resolve(20);
//         }, 2 * 1000);
//     });
//     let p3 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('the third promise has resolved..');
//             resolve(30);
//         }, 3 * 1000);
//     });

//     var total = 0;
//     Promise.all([p1, p2, p3]).then((result) => {

//         for (var i in result) {
//             total += result[i];
//         }

//         console.log(`result: ${result}`);
//         console.log(`total: ${total}`);

//     }).catch((error) => {
//         console.log(`error: ${error}`);
//     });
// }

//code sort krine promise use krel
// {
//     let promiseCall = function (returndata, message) {
//         return function (resolve, reject) {
//             setTimeout(() => {
//                 console.log(`the ${message} promise has resolved`);
//                 resolve(returndata);
//             }, returndata * 100);
//         }
//     };
//     let p1 = new Promise(promiseCall(10, "first"));
//     let p2 = new Promise(promiseCall(20, "second"));
//     let p3 = new Promise(promiseCall(30, "third"));
//     let p4 = new Promise(function (resolve, reject) {
//         reject("the 4th promise has rejected.")
//     });

//     var total = 0;
//     Promise.all([p1, p2, p3, p4]).then((result) => {

//         for (var i in result) {
//             total += result[i];
//         }

//         console.log(`result: ${result}`);
//         console.log(`total: ${total}`);

//     }).catch((error) => {
//         console.log(`error: ${error}`);
//     });
// }

// example 1:-
// var ans = new Promise(function (resolve, reject) {
//     return resolve("sbse pele ghr pr jao")
// })
// var p2 = ans.then(function(data) {
//     console.log(data);
//     return new Promise(function(resolve,reject){
//         return resolve("gate kholo")
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(resolve,reject){
//         return resolve("khana khao")
//     })
// })
// var p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise(function(resolve,reject){
//         return resolve("so jaao")
//     })
// })

// example 2:-
// var ans = new Promise((resolve, reject) => {
//     var n = Math.floor(Math.random() * 10);

//     if (n < 5) {
//         return resolve();
//     }
//     else {
//         return reject();
//     }
// })
// ans.then(function () {
//     console.log("below");
// }).catch(function () {
//     console.log("above");
// })
