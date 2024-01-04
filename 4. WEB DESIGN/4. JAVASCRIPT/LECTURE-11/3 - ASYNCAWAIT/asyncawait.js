// Javscript async/await :- 

// koi pn evu function jema async code lkhso, because async code che to tme promises no use kri sko cho, jyare teno answer aavse tmne then lagavu pdse, te then naa lagavu hoi to tme async await no use kri sko cho
// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

{
    // async function name(parameter1, parameter2, ...paramaterN) {
    //     // statements
    // }

    // // name - name of the function
    // // parameters - parameters that are passed to the function     
}

// Async 

// the async keyword is used before the function to represent that the function is asynchronous.

{
    // // async function example

    // async function f() {
    //     console.log('Async function.');
    //     return Promise.resolve(1);
    // }

    // f(); 
}

// this function returns a promise, you can use the chaining method then()

{
    // async function f() {
    //     console.log('Async function.');
    //     return Promise.resolve(1);
    // }

    // f().then(function(result) {
    //     console.log(result)
    // });

    // // the f() function is resolved and the then() method gets executed.
}

// JavaScript await Keyword

// The await keyword is used inside the async function to wait for the asynchronous operation.
// The syntax to use await is

{
    // let result = await promise;
}

// The use of await pauses the async function until the promise returns a result (resolve or reject) value. 

{
    // a promise
    // let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     resolve('Promise resolved')}, 4000); 
    // });

    // // async function
    // async function asyncFunc() {

    //     // wait until the promise resolves 
    //     let result = await promise; 

    //     console.log(result);
    // }
    // console.log('hello');

    // // calling the async function
    // asyncFunc();

    // // You can use await only inside of async functions.
}

// a Promise object is created and it gets resolved after 4000 milliseconds. Here, the asyncFunc() function is written using the async function.

// The await keyword waits for the promise to be complete (resolve or reject).
// hello is displayed only after promise value is available to the result variable.
// In the above program, if await is not used, hello is displayed before Promise resolved.
// This can be useful if there are multiple promises in the program.

{
    // let promise1;
    // let promise2;
    // let promise3;

    // async function asyncFunc() {
    //     let result1 = await promise1;
    //     let result2 = await promise2;
    //     let result3 = await promise3;

    //     console.log(result1);
    //     console.log(result2);
    //     console.log(result3);
    // }

    // // In the above program, await waits for each promise to be complete.
}

// Error Handling.

// While using the async function, you write the code in a synchronous manner. And you can also use the catch() method to catch the error. 

{
    // asyncFunc().catch(
    //     // catch error and do something
    // )
}

// The other way you can handle an error is by using try/catch block.

{
    //    // a promise
    //     let promise = new Promise(function (resolve, reject) {
    //         setTimeout(function () {
    //         resolve('Promise resolved')}, 4000); 
    //     });

    //     // async function
    //     async function asyncFunc() {
    //         try {
    //             // wait until the promise resolves 
    //             let result = await promise; 

    //             console.log(result);
    //         }   
    //         catch(error) {
    //             console.log(error);
    //         }
    //     }

    //     // calling the async function
    //     asyncFunc(); // Promise resolved 

    //     // we have used try/catch block to handle the errors. If the program runs successfully, it will go to the try block. And if the program throws an error, it will go to the catch block.
}

// Benefits of Using async Function

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.

// Note: These two keywords async/await were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await. 


// async await example :-

// jyare pn koi code async hoi to tmaare tena mate wait krvo pde, because tmne pn naa khbr hoi teno answer kyre aavse te..

// normal example :-
// function abcd() {
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw) {
//         return raw.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
// }
// abcd();

// real example :-
// async function abcd() {
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let ans = await raw.json();
//     console.log(ans);
// }
// abcd();





// ****************************** //
// JavaScript setInterval()
// ****************************** //

// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// The setInterval() method repeats a block of code at every given timing event.

// syntax :-
{
    // setInterval(function, milliseconds, param1, param2, ...)

    // // function - a function containing a block of code
    // // milliseconds - the time interval between the execution of the function
    // // The setInterval() method returns an intervalID which is a positive integer.
}


// 1.  Display a Text Once Every 1 Second

{
    // // program to display a text using setInterval method
    // function greet() {
    //     console.log('Hello world');
    // }
    // setInterval(greet, 1000);

    // // the setInterval() method calls the greet() function every 1000 milliseconds(1 second).
    // // Hence the program displays the text Hello world once every 1 second.
    // // Note: The setInterval() method is useful when you want to repeat a block of code multiple times. For example, showing a message at a fixed interval.
}

// 2.  Display Time Every 5 Seconds

{
    // // program to display time every 5 seconds
    // function showTime() {
    //     // return new date and time
    //     let dateTime= new Date();

    //     // return the time
    //     let time = dateTime.toLocaleTimeString();
    //     console.log(time)
    // }
    // let display = setInterval(showTime, 5000);
}

// 3. running time :-
// {
//     setInterval(myFunction = () => {
//         let d = new Date();
//         document.getElementById("demo").innerHTML =
//             d.getHours() + ":" +
//             d.getMinutes() + ":" +
//             d.getSeconds();
//     }, 1000);
// }



// ****************************** //
// JavaScript clearInterval()
// ****************************** //

// The clearInterval() method clears a timer set with the setInterval() method. 

// The syntax of clearInterval() method is
{
    //     clearInterval(intervalID);
    // // Here, the intervalID is the return value of the setInterval() method.
}


// example 1 :-  Use clearInterval() Method
{
    // // program to stop the setInterval() method after five times

    // let count = 0;

    // let interval = setInterval(function () {
    //     // increasing the count by 1
    //     count += 1;
    //     // when count equals to 5, stop the function
    //     if (count === 5) {
    //         clearInterval(interval);
    //     }

    //     // display the current time
    //     let dateTime = new Date();
    //     let time = dateTime.toLocaleTimeString();
    //     console.log(time);

    // }, 2000);

    // // the setInterval() method is used to display the current time every 2 seconds. The clearInterval() method stops the function call after 5 times.
}

// example 2 :-
// {
//     const myInterval = setInterval(myTimer, 1000);

//     function myTimer() {
//         const date = new Date();
//         document.getElementById("demo1").innerHTML = date.toLocaleTimeString();
//     }
//     function myStop() {
//         clearInterval(myInterval);
//     }
// }


// concurrency and parallelism :-
// concurrency => js me sync code and async code ek saath process ho raha tha ye hai concurrency.
// parallelism => focus jaada krta hai different  processors and unke cores pr kaam ko chaalane pr
// throttling => kisi code control krna number of executions

