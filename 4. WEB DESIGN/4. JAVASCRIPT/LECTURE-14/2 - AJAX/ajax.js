// *** AJAX ***
// Read data from a web server - after a web page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the background



// function loaddata(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//          if(this.readyState == 4 && this.status == 200){
//               console.log(this.responseText);
//          }else if(this.readyState == 4 && this.statusText == 404){
//               document.getElementById("demo").innerHTML = "File Not Found!!!!"
//          }
//     };

//     xhttp.open('GET' , "https://jsonplaceholder.typicode.com/posts", true);
//     xhttp.send();
// }