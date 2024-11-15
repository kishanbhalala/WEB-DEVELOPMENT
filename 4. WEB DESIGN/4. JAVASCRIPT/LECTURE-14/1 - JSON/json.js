// ****** JavaScript and JSON ****** 

// JSON stands for JavaScript Object Notation.
// JSON is a text format for storing and transporting data.
// JSON is "self-describing" and easy to understand.
// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.
// It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

// JSON એ JavaScript ઑબ્જેક્ટ નોટેશન માટે વપરાય છે.
// JSON એ ડેટા સ્ટોર કરવા અને પરિવહન કરવા માટેનું એક ટેક્સ્ટ ફોર્મેટ છે.
// JSON એ "સ્વ-વર્ણન" અને સમજવા માટે સરળ છે.
// JSON એ Javascript ઑબ્જેક્ટ નોટેશન માટે વપરાય છે. JSON એ ટેક્સ્ટ-આધારિત ડેટા ફોર્મેટ છે જેનો ઉપયોગ ડેટા સ્ટોર કરવા અને ટ્રાન્સફર કરવા માટે થાય છે.
// તેનો ઉપયોગ સામાન્ય રીતે વેબ એપ્લિકેશન્સમાં ડેટા ટ્રાન્સમિટ કરવા માટે થાય છે (દા.ત., સર્વરમાંથી અમુક ડેટા ક્લાયન્ટને મોકલવા માટે, જેથી તે વેબ પેજ પર પ્રદર્શિત થઈ શકે, અથવા તેનાથી ઊલટું).

{
    // // JSON syntax
    // {
    //     "name": "John",
    //     "age": 22,
    //     "gender": "male",

    // }
}

// In JSON, the data are in key/value pairs separated by a comma ,.

// JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.

// Note: JavaScript Objects and JSON are not the same. You will learn about their differences later in this tutorial.


// JSON Data

// SON data consists of key/value pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon :. For example,

{
    // JSON data
    // "name": "John"
}

// Note: JSON data requires double quotes for the key.


// JSON Object

// The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,

{
    // JSON object
    // { "name": "John", "age": 22 }
}

// JSON Array

// JSON array is written inside square brackets [ ].

{
    // // JSON array
    // [ "apple", "mango", "banana"]
    // // JSON array containing objects
    // [
    //     { "name": "John", "age": 22 },
    //     { "name": "Peter", "age": 20 },
    //     { "name": "Mark", "age": 23 }
    // ]
}

// Note: JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot contain functions as values.

// Accessing JSON Data

// You can access JSON data using the dot notation.

{
    // // JSON object
    // const data = {
    //     "name": "John",
    //     "age": 22,
    //     "hobby": {
    //     "reading" : true,
    //     "gaming" : false,
    //     "sport" : "football"
    //     },
    //     "class" : ["JavaScript", "HTML", "CSS"]
    // }

    // // accessing JSON object
    // console.log(data.name); // John
    // console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

    // console.log(data.hobby.sport); // football
    // console.log(data.class[1]); // HTML
}

// We use the . notation to access JSON data. Its syntax is: variableName.key

// You can also use square bracket syntax [] to access JSON data. 

{
    // // JSON object
    // const data = {
    //     "name": "John",
    //     "age": 22
    // }

    // // accessing JSON object
    // console.log(data["name"]); // John
}

// JavaScript Objects VS JSON

// Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.

// image here...........

// Converting JSON to JavaScript Object

// You can convert JSON data to a JavaScript object using the built-in JSON.parse() function.

{
    // // json object
    // const jsonData = '{ "name": "John", "age": 22 }';

    // // converting to JavaScript object
    // const obj = JSON.parse(jsonData);

    // // accessing the data
    // console.log(obj.age); // John
}


// Converting JavaScript Object to JSON

// You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify() function. 

{
    // // JavaScript object
    // const jsonData = { "name": "John", "age": 22 };

    // // converting to JSON
    // const obj = JSON.stringify(jsonData);

    // // accessing the data
    // console.log(obj);
}

// Use of JSON

// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

// JSON is language independent. You can create and use JSON in other programming languages too.


// how to install JSON :-
// only one time install krvu globaly

// npm install -g json-server 
// json-server --watch filename.json 


// example - $.get ajax ni help thi server pr thi data lavva ma kam aave
// {
//     function prom() {
//         return new Promise(function (resolev, reject) {
//             console.log("fatching data,please wait.");
          
//             setTimeout(() => {
//                $.get("https://jsonplaceholder.typicode.com/posts",function(data){
//                 resolev(data);
//                }).fail(err => {
//                 reject("fail to load JSON.")
//                })
//             }, 2000)
//         });
//     }
//     prom().then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     });
// }
