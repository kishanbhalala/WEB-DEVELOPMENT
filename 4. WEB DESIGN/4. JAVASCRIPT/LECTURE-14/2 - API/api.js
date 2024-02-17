// 1. fetch() :-

// built in javascript.
// fetch() is a built-in javascript function that allows you to make HTTP requests to fetch resources (including Data) from a network.
// it uses promises, which makes it easier to handle asyncronous operations.

// {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log('Error...', error));
// }


// 2. axios() :-

// client library for data fetching.
// Axios is a popular HTTP client library for making requests from browesers or Node.js applications.
// it is simpler to the built-in fetch() API, with additional features such as request & response interceptors, automatic JSON parsing, and more.

// {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => console.log(response.data))
//         .catch(err => console.log('Error...', err))
// }



// 3. ajax() :-

// when working with jQuery.
// ajax stand for Asynchronous javascript and XML.
// Read data from a web server - after a web page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the background
// if you're working with jQuery, you can use the $.ajax() function to make HTTP requests.
// if provides a simple interface for making AJAX requests and handling response.

// {
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         method: 'GET',
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, status, error) {
//             console.log("Some Error Occured", error);
//         }
//     });
// }

// 4. XMLHttpRequest() :-

// built in js more lower level.
// it's built-in javascript object that provides an easy way to fetch data from a URL without a page refresh.
// it's bit lower-level compared to fetch() or libraries like Axios, but it's still widely used in many applications.

// ****** //
// {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//         } else {
//             console.log('error...', xhr.statusText);
//         }
//     };
//     xhr.send();
// }

// ****** //
// {
//     function loaddata() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 console.log(this.responseText);
//             } else if (this.readyState == 4 && this.statusText == 404) {
//                 document.getElementById("demo").innerHTML = "File Not Found!!!!"
//             }
//         };
//         xhttp.open('GET', "https://jsonplaceholder.typicode.com/posts", true);
//         xhttp.send();
//     }
// }
