// 1. Display Alert in JavaScript
{
    // alert() - shows a message. 

    // alert("hello i am kishan bhalala");
}

// 2. Display Confirmation box using JavaScript 
{
    // confirm() - shows a message, confirm with "ok" or "cancel". it returns true for OK and false 
    //             for cancel/Esc.

    // let message = confirm("this is javascript?");
    // document.write(message);
}

// 3. Display Prompt box using JavaScript 
{
    //  prompt() - shows a message, input text. it returns the text on ok or, if cancel button or
    //             Esc is clicked ,Null. 

    // let message = prompt("Age");
    // document.write(message);
}

// 4. mouseover and mouseout in javascript 
{
    // onmouseover	The mouse pointer is moved over an element
    // {
    //     function over(x) {
    //         x.style.color = "green";
    //     }
    // }
    // // onmouseout	The mouse pointer moves out of an element
    // {
    //     function out(x) {
    //         x.style.color = "red";
    //     }
    // }
}

// 5. Use keypress In JavaScript to Display Alerts
// {
//     function key() {
//         alert("Enter press key!")
//     }
// }

// 6. JavaScript Validation Examples
// {
//     function myFunction() {
//         let x = document.getElementById("numb").value;
//         let text;
//         if (isNaN(x)) {
//             text = "Input Not Valid";   
//         } else {
//             text = "Input OK";
//         }
//         document.getElementById("demo").innerHTML = text;
//     }
// }

// 7. Textbox required validation in javascript
// {
//     function text() {
//         var x = document.getElementById("demo").value;
//         if (x.trim() == "" || Number(x)) {
//             alert("not a text");
//         }
//         else {
//             alert("successfully!");
//         }
//     }
// }

// 8. Email validation in JavaScript
// {
//     var n = document.getElementById("demo");
//     function email() {
//         var x =  /\S+@\S+\.\S+/;
//         if(n.value.match(x)){
//             alert("Valid email");
//         }
//         else{
//             alert("Invalid email");
//         }
//     }
// }

// 9. Letter Validation in JavaScript
// {
//     var n = document.getElementById("demo");
//     function letter() {
//         var x = /^[A-Za-z]+$/;
//         if(n.value.match(x)){
//             alert("Valid input")
//         }
//         else{
//             alert("Invalid input")
//         }
//     }
// }

// 10. Number Validation in JavaScript 
// {
//     function number() {
//         let x = document.getElementById("numb").value;
//         let text;
//         if (isNaN(x)) {
//             text = "Input Not Valid";
//         } else {
//             text = "Input OK";
//         }
//         document.getElementById("demo").innerHTML = text;
//     }
// }

// 11. Letter and Number Validation in JavaScript
// {
//     var n = document.getElementById("demo");
//     function LetNum() {
//         var available = /^[A-Za-z0-9]*$/;
//         if(n.value.match(available)) {
//             alert("Valid");
//         }
//         else
//         {
//             alert("wrong");
//         }
//     }
// }

// 12. IP Address Validation in JavaScript
// {
//     function ip(ipAddress) {
//         var regEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//         if (ipAddress.value.match(regEx)) {
//             alert("valid ip Address")
//         }
//         else {
//             alert("Please enter a valid ip Address.");
//         }
//     }
// }

// 13. Retrieve Today’s Date in JavaScript
// {
//    const date = new Date();
//    document.write(date);
// }

// 14. Reverse array javascript
// {
//     let arr = ["kishan","jeegar","sagar"];
//     document.write("current array : " + arr + "<br>")
//     document.write("revrse array : " + arr.reverse());
// }

// 15. JavaScript concate or merge two Arrays
// {
//     let arr1 = ["red","yellow","blue","pink"];
//     document.write("current array1 : " + arr1 + "<br>");
//     let arr2 = ["innova","farari","BMW"];
//     document.write("current array2 : " + arr2 + "<br>");

//     let x = arr1.concat(arr2);
//     document.write("<br> concat array : " + x);
// }

// 16. Reverse String in JavaScript
// {
//     let str = prompt("enter a string");
//     document.write("current string : " + str + "<br>");
//     let rev = str.split("").reverse().join("");
//     document.write("revrse string : " + rev);
// }

// 17. JavaScript Open a page using window.open() method
// syntax :- window.open(URL, name, specs, replace)
// {
//     function openWindow() {
//         window.open("https://translate.google.co.in/");
//     }
// }

// 18. if else statement in JavaScript
// {
//     let age = prompt("enter age");
//     if (18 > age) {
//         document.write(age + " = You can not Vote!");
//     }
//     else {
//         document.write(age + " = You can Vote!");
//     }
// }

// 19. Insert element in array javascript
// {
//     let insert = [1,2,3,4,5];
//     document.write("current :- " + insert +"<br>");
//     insert.push(600);
//     document.write("insert element :- "+ insert);
// }

// 20. get current url javascript
// {
//     document.getElementById("demo").innerHTML =
//         "The full URL of this page is:<br>" + window.location.href;
// }

// 21. getElementsByClassName() method in JavaScript
// {
//     let x = document.getElementsByClassName("example");
//     x[0].innerHTML = "PUSHPA"
// }

// 22. getElementByTagName() method in JavaScript
// {
//     let x = document.getElementsByTagName("h1");
//     x[0].style.color = "red";
// }

// 23. Disable Browser back and forward button in browser using JavaScript
// 24. Disable back button in browser using javascript
// 25. Disable Forward button in browser using JavaScript:
// 26. Disable Forward button in browser using JavaScript:

// 27. Disable Dropdown list using JavaScript
// {
//     function disable() {
//         document.getElementById("mySelect").disabled = true;
//     }
// }

// 28. Enable Dropdown list using JavaScript
// {
//     function enable() {
//         document.getElementById("mySelect").disabled = false;
//     }
// }

// 29. Disable mouse right click using javascript
// {
//     const div = document.getElementById("dis");
//     div.addEventListener("contextmenu", (e) => { e.preventDefault() });
// }

// 30. JavaScript Date Countdown Timer
// {
//     function updateCountdown() {
//         const targetDate = new Date("25 sep 2023").getTime();
//         const currentDate = new Date().getTime();
//         const timeLeft = targetDate - currentDate;

//         if (timeLeft <= 0) {
//             document.getElementById("countdown").innerHTML = "Countdown expired!";
//         } else {
//             const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//             document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//                 + minutes + "m " + seconds + "s ";
//         }
//     }
//     updateCountdown();
//     setInterval(updateCountdown, 1000);
// }

// 31. Checkbox validation using JavaScript (javascript checkbox checked)
// {
//     function check() {
//         document.getElementById("check").checked =  true;
//     }
//     function uncheck() {
//         document.getElementById("check").checked = false;
//     }
// }

// 32. get query string value in javascript

// 33. JavaScript get or set radio button value 

// 34. Get radio button selected value using JavaScript 
// {
//     function radiobtn() {
//         var x = document.getElementsByName("gender");
//         for(i = 0; i < x.length; i++) {
//             if(x[i].checked)
//             document.getElementById("result").innerHTML = "gender : " + x[i].value;
//         }
//     }
// }

// 35. Set radio button value using JavaScript 
// {
//     const btn = document.getElementById("yes");
//     btn.checked = true;
//     btn.checked = false;
// }

// 36. JavaScript screen height
// {
//     let height = screen.height;
//     document.getElementById("demo").innerHTML = height + "px";
// }

// 37. auto refresh page javascript 
// {
//         setTimeout(() => {
//                 window.location.reload();
//         },2000)
// }

// 38. Convert Celsius Value to Farenheit Value in JavaScript 
// fahrenheit = celsius * 1.8 + 32 
// celsius = (fahrenheit - 32) / 1.8 

// {
//     const celsius = prompt("Enter a celsius value: ");
//     const fahrenheit = (celsius * 1.8) + 32;
//     document.write(celsius + " degree celsius is equal to " + fahrenheit.toFixed(2) + " ferhnhit.")
// }

// 39. javascript get today’s date 

// {
//     const date = new Date();
//     const x = date.toDateString();
//     document.write(x);
// }

// 40. Scroll Down Event in JavaScript 

// {
//     function scrolldown() {
//         window.scrollBy(0,20);
//     }
// }

// 41. JavaScript Animation example 

// {
//     image.onclick = function () {
//         let start = Date.now();
//         let timer = setInterval(function () {
//             let timePassed = Date.now() - start;
//             image.style.left = timePassed / 5 + 'px';
//             if (timePassed > 2000) clearInterval(timer);
//         }, 20);
//     }
// }

// 42. Play and Pause video in JavaScript 
// {
//     let vid = document.getElementById("myvideo");
//     function playvid() {
//         vid.play();
//     }
//     function pausevid() {
//         vid.pause();
//     }
// }

// 43. Change background colour of div javascript 
// {
//     function myFunction() {
//         document.body.style.backgroundColor = "red";
//       }
// }

// 44. Change the page colour in Every 5 sec in JavaScript 
// {
//     setInterval(
//         function () {
//           var randomColor = Math.floor(Math.random()*16777215).toString(16);
//           document.body.style.backgroundColor = "#"+randomColor;
//         },5000);
// }

// 45. Display Message every 3 second using Javascript
// {
//     const element = document.getElementById("demo");
//     setInterval(function () { 
//         element.innerHTML += "kishan bhalala" + "<br>"
//     }, 3000);
// }

// 46. JavaScript get max value in array of objects
// {
//     const arr = [{ id: 10 }, { id: 7 }, { id: 3 }, { id: 14 }];

//     const ids = arr.map(object => {
//         return object.id;
//     });
//     document.write(ids + "<br>");

//     const max = Math.max(...ids);
//     document.write("max value : " + max +"<br>");

//     const min = Math.min(...ids);
//     document.write("min value : " + min + "<br>");
// }

// 47. Sort and Reverse an array of Objects using JavaScript
// {
//     var students = [
//         { name: "kishan", age: 25},
//         { name: "jeegar", age: 24 },
//         { name: "sagar", age: 27 },
//         { name: "anil", age: 22 }
//     ];
//     var sorted = students.sort(function(a, b) {
//         return a.age - b.age;
//     });
//     console.log(sorted)

//     var x = students.reverse(sorted);
//     console.log(x);
// }

// 48. Find index of Largest value in An Array in JavaScript
// {
//     const arr = [20,23,12,22,55,32,7,67,9];
//     document.write("current array : - " + arr);

//     const max = Math.max(...arr);
//     document.write("<br>max value :- " + max);

//     const index = arr.indexOf(max);
//     document.write("<br>index of max value :- " + index)
// }

// 49. Try and Catch in JavaScript
// {
//     try {
//         adddlert("Welcome guest!");
//       }
//       catch(err) {
//         document.write(err.message);
//       }
// }

// 50. Return Boolean value of an Integer In JavaScript
// {
//     let x = new Boolean(23);
//     document.write(x.valueOf());
// }

// 51. JavaScript Check an object is an array or not
// {
//     var k1 = {name: "kishan", age: 25};
//     var k2 = ["red",2,5,"green",7,"yellow"];

//     document.write(Array.isArray(k2));
// }

// 52. Display Table Number in JavaScript
// {
//     const number = prompt("enter the number");
//     for (let i = 1; i <= 10; i++) {
//         const result = i * number;
//         document.write(number + " * " + i + " = " + result + "<br>");
//     }
// }

// 53. Reload page JavaScript
// {
//     location.reload();
// }


// 54. Break and Continue in JavaScript
// {    
//     document.write("break statement :- <br>");
//     for (let i = 0; i < 10; i++) {
//         if (i == 3) {
//             break;
//         }
//         document.write(i + "<br>");
//     }

//     document.write("<br> continue statement :- <br>");
//     for (let i = 0; i < 10; i++) {
//         if (i == 3) {
//             continue;
//         }
//         document.write(i + "<br>");
//     }
// }


// 55. JavaScript Conditional Operator
// {
//     let age = prompt("enter age");
//     let result = age > 18 ? 'young' : 'child';
//     document.write(result); 
// }


// 56. Example of this KeyWord in JavaScript
// {
//     const person = {
//         firstName: "kishan",
//         lastName: "bhalala",
//         fullName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     };
//     document.write(person.fullName());
// }

// 57. JavaScript Validation API
// {
//     function myFunction() {
//         let text;
//         if (document.getElementById("id1").validity.rangeOverflow) {
//             text = "Value too large";
//         } else {
//             text = "Input OK";
//         }
//         document.getElementById("demo").innerHTML = text;
//     }
// }


// 58. JavaScript Set dropdown value on Button Click
// {
//     function myFunction() {
//         document.getElementById("mySelect").selectedIndex = "2";
//       }
// }


// 59. Display Images Based on User Selection
// {
//     const x = document.getElementById("my-image1");
//     const y = document.getElementById("my-image2");
//     const z = document.getElementById("my-image3");
//     function show1() {
//         x.style.display = "block";
//     }
//     function show2() {
//         y.style.display = "block";
//     }
//     function show3() {
//         z.style.display = "block";
//     }
// }

// 60. JavaScript Bind Arrays Value into Dropdown list
// {
//     const arr = ["kishan", "jeegar", "sagar", "Anil"];
//     const dropdown = document.getElementById("dropdownList");
//     for (const value of arr) {
//         const option = document.createElement("option");
//         option.value = value;
//         option.text = value;
//         dropdown.appendChild(option);
//     }
// }

// 61. javascript browser detection
// {
//     const userAgent = navigator.userAgent;
//     if (userAgent.includes("Chrome")) {
//         document.write("User is using Chrome");
//     } else if (userAgent.includes("Firefox")) {
//         document.write("User is using Firefox");
//     } else if (userAgent.includes("Safari")) {
//         document.write("User is using Safari");
//     } else if (userAgent.includes("Edge")) {
//         document.write("User is using Microsoft Edge");
//     } else if (userAgent.includes("Opera")) {
//         document.write("User is using Opera");
//     } else {
//         document.write("User is using an unknown browser");
//     }
// }


// 62. How to sort array value using sort() method in JavaScript
// {
//     const sorting = ["kishan","sagar","jeegar","jenish","urvesh","prashant"];
//     sorting.sort();
//     document.write(sorting)
// }
// {
//     const arr = [40, 100, 1, 5, 25, 10];
//     arr.sort(function (a, b) { return a - b });
//     document.write(arr);
// }
 ``