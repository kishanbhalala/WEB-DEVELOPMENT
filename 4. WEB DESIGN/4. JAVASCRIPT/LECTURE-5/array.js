// what is Array :-

// Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
// JavaScript Array is a single variable that is used to store elements of different data types. 
// JavaScript arrays are zero-indexed. The Javascript Arrays are not associative in nature.
// Arrays are used when we have a list of items. 
// An array allows you to store several values with the same name and access them by using their index number.

// ***** JAVASCRIPT ARRAY *****

// const cars = [];
// cars.push("audi" , "BMW" , "jaguar");
// console.log(cars.length);
// cars[7] = "innova";
// console.log(cars[5]);
// console.log(Object.keys(cars));
// console.log(cars.length)
// cars.length = 10;
// console.log(cars)
// console.log(Object.keys(cars));
// console.log(cars.length)
// console.log(cars[9]);
// cars.length = 3;
// console.log(Object.keys(cars));
// console.log(cars.length)


// array length properties 
// accessing  the first  array Element
// accessing  the last  array Element
// adding array Element
// converting arrays to strings


// array index start with 0:
// [0] is the first array Element
// [1] is the second 
// [2] is the third...

// {
// let array = ["kishan", "jeegar", "sagar", "anil"];
// console.log(array[0],array[2]);
// }

// {
//     const array = [
//         "one",
//           "two",
//              "three",
//                  "four"];  //javascript array

//     array[1] = "five"; //changing arrays element
//     console.log(array)
// }


// ---accessing  the first  array Element---
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     console.log(cars[3]);
// }

// ---accessing  the last  array Element---
// {
//     var cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars[cars.length-2];
// }

// ---adding array Element---
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars;
//     function myFunction() {
//         cars.push("farari");
//         document.getElementById("demo-1").innerHTML = cars;
//     }
//     myFunction();
// }



// the length property provides an easy way to append new elements to an array without using the push() method 

// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars;
//     function myFunction(){
//         cars[cars.length] = "farari";
//         document.getElementById("demo-1").innerHTML = cars;
//     }
//     myFunction();
// }
// {
//     let a = ["dd","ee","rr"];
//     console.log(a);
//     a[a.length] = "pp"
//     console.log(a);
// }


// adding elements with high indexes can create undefined "holes" in an Array. 
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     cars[7] = "farari";
//     console.log(cars);
//     let a = cars.length;
//     let text = " ";
//     for(i = 0; i < a; i++)
//     {
//         text += cars[i] + "<br>"
//     }
//     document.getElementById("demo").innerHTML = text;
// }


// **** ARRAY (12) METHOD ****  

// Array length  =  array na element ni length count kri ne aape  --index (0) thi start thay
// Array toString() = array ne string ma covert kri aape
// Array pop()  = array ma last thi element remove kre
// Array push("farari") = array ma new element add kre (last thi add kre)
// Array shift() = array ma start thi element remove kre
// Array unshift("farari") = array ma start thi element add kre
// Array join(" - ") = array ma element ni vche join kri skye
// Array delete() = array mathi koi pn index pr rahelo element delete kri skye -- and te index pr element add pn kri skye
// Array concat() = badha array ne concat kri dey (merge) 
// Array flat() = sub array na element ne concat kri aape 
// Array splice(0,2) =  element delete kri sakay and add pn kri sakay - je range aapye tya sudhi delet thay = splice(index, howmany delet, "new add")
// Array slice(1, 3)  = index ni range aapine array mathi koi pn element kadhi skye ane new array ma store kri skye = slice(start, end)


// ---Array length ---
// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     // let size = fruits.length;
//     console.log(fruits.length)
// }

// ---converting arrays to strings---
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     console.log(cars.toString());
//     console.log(cars.length)
//     let a = toString().length;
//     console.log(a);
// }

// ---Array pop()--- 
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars;
//     cars.pop();
//     cars.pop();
//     document.getElementById("demo-1").innerHTML = cars;
// }

// The pop() method returns the value that was "popped out": 
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars.pop();
//     document.getElementById("demo-1").innerHTML = cars;
// }

// ---Array push()--- 
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars;
//     cars.push("farari")
//     document.getElementById("demo-1").innerHTML = cars;
// }
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars.push("farari"); 
//     document.getElementById("demo-1").innerHTML = cars;
// }

// ---Array shift()--- 

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars;
//     cars.shift()
//     cars.shift()
//     document.getElementById("demo-1").innerHTML = cars;
// }

// The shift() method returns the value that was "shifted out":
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars.shift(); 
//     document.getElementById("demo-1").innerHTML = cars.length;
// }

// ---Array unshift()--- 

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars;
//     cars.unshift("farari")
//     document.getElementById("demo-1").innerHTML = cars;
// }

// The unshift() method returns the new array length: 
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars.unshift("farari"); 
//     document.getElementById("demo-1").innerHTML = cars;
// }   

// ---Array join()--- 
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars.join(" - ");
// }

// ---Array delete()--- 

// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = cars;
//     delete cars[2];
//     cars[2] = "farari";
//     document.getElementById("demo-1").innerHTML = cars;
// }

// ---Merging (Concatenating) Arrays--- 
// The concat() method does not change the existing arrays. It always returns a new array. 
// {
//     const girls = ["pinsu","daya","shrushti"];
//     const boys = ["kishan","jeegar","sagar"];
//     const kids = ["om","devu","priya"];
//     const all = girls.concat(boys , kids,"vipul");
//     document.getElementById("demo").innerHTML = all;
//     console.log(all);
// }   

// ---Array flat()--- 
// The flat() method creates a new array with sub-array elements concatenated to a specified depth. 
// {
//     const myArr = [[1, 2], [3, 4], [5 , 6]];

//     const newArr = myArr.flat();
//     document.getElementById("demo").innerHTML = newArr;
// }

// ---Array splice()--- 
// The splice() method can be used to add new items to an array and remove:
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova"];
//     document.getElementById("demo").innerHTML = "original array : <br>" + cars;
//     let remove = cars.splice(1,2,"lumo","bugati")
//     document.getElementById("demo-1").innerHTML = "remove item : <br>" + remove;
//     document.getElementById("demo-2").innerHTML = "new array : <br>" + cars;
// }

// ---Array slice()---
// {
//     const cars = ["audi" , "BMW" , "jaguar", "innova", "lumo"];
//     newremove = cars.slice(1,3)
//     document.getElementById("demo").innerHTML = cars + "<br><br>" + newremove;
// }


// ******** (8) method ***************//    

// array .isArray  = array check krva mate use thay -- array hoi to true nkr false
// sorting array = array sorting kri ne aape (alphabet) hoi to abcd ni rite line ma kri aape
// Reversing Array = array ne reverse kri ne aape
// Numeric Sort = number ne sorting kri ne aape (small number thi start kre)
// fill("1") = array ma bdha j element ni jgya a new element fill kri aape (all same) --fill("1",3) 3 element pchi 1 print kri aape jya sudhi array hoi tya sudhi
// copywithin(3) = array ma start thi 3 element copy kre -- pchi aagad na element continue rakhe
// valueof() = array same to same print kri ne aape
// flat = sub-array ne concat kri aape




// ---array .isArray --- 
// { 
//     let book = ["math","english","gujrati","hindi"];   //true
//     let books = "string";                              // false
//     console.log(Array.isArray(book)); 
// }

// ---sorting array--- 
// {
//     //charcter line ma kri dese
//     let alphabet = ["zebra","monkey","cat","kites","apple","dog"];
//     let a = alphabet.sort();
//     console.log(a);
// }

// ---Reversing Array---
// {
//     let alphabet = ["zebra","monkey","cat","kites","apple","dog"];
//     console.log(alphabet);
//     let rev = alphabet.reverse();
//     console.log(rev);
//     let b = rev.sort();
//     console.log(b);
// } 

// ---Numeric Sort ---
// {
//     let num1 = [44,22,65,233,88,12,54,67];
//     document.write(num1);
//     document.write("<br>");
//     let num2 = num1.sort(function (a , b){return a - b});
//     document.write(num2);
// }


// ---fill method--- 
// Fill all the elements with a value: 
// {
//     const cars = ["farari","volvo","creta","bmw","lumo"];
//     const newfill = cars.fill("1",2);
//     document.write(newfill);
// }

// ---copywithin()--- 
// The copyWithin() method copies array elements to another position in the array. 
// {
//     const cars = ["farari","volvo","creta","bmw","lumo","","",""];
//     const newfill = cars.copyWithin(3);
//     document.write(newfill);
// }

// ---valueof()--- 
// valueOf() returns the same as
// {
//     const cars = ["farari","volvo","creta","bmw","lumo","cooper","jaguar","innova"];
//     const newfill = cars.valueOf();
//     document.write(newfill);
// }

// ---flat()--- 
// The flat() method concatenates sub-array elements. 
// {
//     const myArr = [1, 2, 3, [4, [5, 6, [7, 8,9]]]];
//     const newArr = myArr.flat(3);
//     console.log(newArr);
// }


// *****************************//
// JavaScript Array Iteration

// ---JavaScript Array forEach()--- 
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// {
//     const numbers = [45, 4, 9, 16, 25];

//     let txt = "";
//     numbers.forEach(myFunction);
//     document.getElementById("demo").innerHTML = txt;

//     function myFunction(value, index, array) {
//         txt += value * 2 + "<br>";
//     }
// }

// ---JavaScript Array map()---
// -> map mathod ek new array return kre .....je retun kre tene newarray ma store kri devanu
// -> map method callback functon accept kre 
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// {
//     const a = [4, 46, 6, 16, 25];
//     const b = a.map(myFunction);
//     document.getElementById("demo").innerHTML = b;

//     function myFunction(value, index, array) {
//         return value;
//     }
// }


// ---JavaScript Array flatMap()--- 
// The flatMap() method maps all array elements and creates a new flat array.
// flatMap() creates a new array from calling a function for every array element.
// flatMap() does not execute the function for empty elements.
// flatMap() does not change the original array.

// {
//     const myArr = [1, 2, 3, 4, 5, 6];
//     const newArr = myArr.flatMap((x) => x * 2);
//     document.getElementById("demo").innerHTML = newArr;
// }

// ---JavaScript Array filter()--- 
// -> filter method ek new array retun kre 
// -> map method callback functon accept kre 
// condition pramane je je value test ma clear thay te print kri ne aape 
  
// {
//     const a = [45, 4, 9, 16, 25];
//     const b = a.filter(myFunction);

//     function myFunction(age)
//     {
//         return age > 18;
//     }
//     document.getElementById("demo").innerHTML = b;
// }

// --- JavaScript Array reduce() ---
// -> map method callback functon accept kre 
// -> two argument aave prev and current value 
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// {
//     const numbers = [175, 50, 25];
//     document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

//     function myFunc(total, num) {
//         return total - num;
//     }
// }


// *********************************** //

// indexOf("search item" ,start) = array ma koi pn element ni index search kri ne aape
// lastindexOf("search item" ,start) = array ma last thi search kre pchi teni index aape
// includes() = array ma value che ke ny te check kre hoi to true nkr false
// array some() = array ma test kravti vkhte koi pn ek first value mdi jaay to  true kri dese nkr false
// array every() = array ma test karavti vkhte bdhi j value check krse...ane te condition pramane sachi hoi bdhi value to true nkr false
// array find() = array ma condition pramane element check karavti vkhte first value mdi jaay te value print kri dese and pchi ni value check pn ny kre
// array findIndex() = find ni jem j kam kre pn value ni jgya a teni index print krse



// array vs object

// Array :-
// Arrays are best to use when the elements are numbers.
// The data inside an array is known as Elements.
// The elements can be manipulated using [].
// The elements can be popped out of an array using the pop() function.
// Iterating through an array is possible using For loop, For..in, For..of, and ForEach().


// Array of objects :-
// Objects are best to use when the elements’ strings (text).
// The data inside objects are known as Properties which consists of a key and a value.
// The properties can be manipulated using both.DOT notation and [].
// The keys or properties can be deleted by using the delete keyword.
// Iterating through an array of objects is possible using For..in, For..of, and ForEach().
