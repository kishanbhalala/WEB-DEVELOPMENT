// what is Array :-

// Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
// JavaScript Array is a single variable that is used to store elements of different data types.
// JavaScript arrays are zero-indexed. The Javascript Arrays are not associative in nature.
// An array allows you to store several values with the same name and access them by using their index number.
// Arrays are used when we have a list of items.

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

// ********************** //

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
//     const cars = ["audi","BMW","jaguar","innova"];
//     console.log(cars);
//     console.log("length = " + cars.length)
//     console.log("convert string = "  + cars.toString());
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
// Numeric Sort = number ne sorting kri ne aape (small number thi start kre)
// Reversing Array = array ne reverse kri ne aape
// fill("1") = array ma bdha j element ni jgya a new element fill kri aape (all same) --fill("1",3) 3 element pchi 1 print kri aape jya sudhi array hoi tya sudhi
// copywithin(3) = array ma start thi 3 element copy kre -- pchi aagad na element continue rakhe
// valueof() = array same to same print kri ne aape
// flat = sub-array ne concat kri aape
// flatMap() = flatMap ma infinity depth sudhi na ly jy sko... only by default 1 depth sudhi j ly jy sko.

// ---array .isArray ---
// {
//     let book = ["math","english","gujrati","hindi"];   //true
//     let books = "string";                              // false
//     console.log(Array.isArray(book));
// }

// ---sorting array---
{
  //charcter line ma kri dese
  // let alphabet = ["zebra","monkey","cat","kites","apple","dog"];
  // let a = alphabet.sort();
  // console.log(a);
}

// ---Numeric Sort ---
// {
//     let num1 = [44,22,65,233,88,12,54,67];
//     document.write(num1);
//     document.write("<br>");
//     let num2 = num1.sort(function (a , b){return a - b});
//     document.write(num2);
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
// const newArr = myArr.flat(Infinity);
//     console.log(newArr);
// }

// ---JavaScript Array flatMap()---

// flatMap() creates a new array from calling a function for every array element.
// flatMap() does not execute the function for empty elements.
// flatMap() does not change the original array.

// {
//     const myArr = [1, 2, 3, 4, 5, 6];
//     const newArr = myArr.flatMap((x) => x * 2);
//     document.getElementById("demo").innerHTML = newArr;
// }

// {
//   var arr = ["welcome to","javascript","programing language"]
//   arr = arr.flatMap((e) => {
//       return e.split(" ");
//   })
//   console.log(arr);
// }

// *****************************//
// Array method for looping  //
// *****************************//

// map()           :- It creates a new array populated with the results of calling a provided function on every element in the calling array.
// reduce()        :- It runs a function on each array element to produce (reduce it to) a single value. It works from left-to-right.
// filter()        :- It creates a new array with all elements that pass the test implemented by the provided function.
// forEach()       :- It executes a provided function once for each array element.
// some()          :- array ma test kravti vkhte koi pn ek first value mdi jaay to  true kri dese nkr false
// every()         :- array ma test karavti vkhte bdhi j value check krse...ane te condition pramane sachi hoi bdhi value to true nkr false
// Max()           :-  moti value find kri ne aape
// Min()           :-  nani value find kri ne aape

// ---JavaScript Array map()---

// array.map((element, index) => {
//     // code block to be executed
// })

// -> map mathod ek new array return kre .....je retun kre tene newarray ma store kri devanu
// -> map method callback functon accept kre..
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

// --- JavaScript Array reduce() ---

// -> two argument aave prev and current value
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().

// {
//     const numbers = [175, 50, 25];
//     document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

//     function myFunc(total, num) {
//         return total - num;
//     }
// }
// {
//   const array1 = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ];
//   const result = array1.reduceRight((accumulator, currentValue) =>
//     accumulator.concat(currentValue),
//   );
//   console.log(result);
// }


// ---JavaScript Array filter()---

// -> filter method ek new array retun kre
// -> condition pramane je je value test ma clear thay te print kri ne aape
// The filter() method creates a new array with array elements that pass a test

// {
//     const a = [45, 4, 9, 16, 25];
//     const b = a.filter(myFunction);

//     function myFunction(age)
//     {
//         return age > 18;
//     }
//     document.getElementById("demo").innerHTML = b;
// }

// ---JavaScript Array forEach()---

// array.forEach((element, index) => {
//     // code block to be executed
// })

// forEach kyrey return naa kre... oraginal array ma j change kre
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

// ---JavaScript Array some()---

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
// It doesn't modify the array.

// {
//     const numbers = [45, 4, 9, 16, 25];
//     let someOver18 = numbers.some(myFunction);
//     function myFunction(value, index, array) {
//      return value > 18;
//     }
//     console.log(someOver18);
// }

// ---JavaScript Array every()---

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// {
//       const numbers = [45, 4, 9, 16, 25];
//       let allOver18 = numbers.every(myFunction);
//       function myFunction(value, index, array) {
//       return value > 18;
//     }
//     console.log(allOver18);
// }

// ---- practice ----  :-
// {
// let arr = [1, 2, 3, 4, 5, 6];
//     let b = arr.map((item) => item).filter((item) => item > 4).reduce((acc, curr) => acc + curr , 0)
//     console.log(b);
// }

// *********************************** //
// *********************************** //

// indexOf("search item" ,start) = array ma koi pn element ni index search kri ne aape
// lastindexOf("search item" ,start) = array ma last thi search kre pchi teni index aape

// entries() = key and value print kri ne aape
// includes() = array ma value che ke ny te check kre hoi to true nkr false
// find() = array ma condition pramane element check karavti vkhte first value mdi jaay te value print kri dese and pchi ni value check pn ny kre
// findIndex() = find ni jem j kam kre pn value ni jgya a teni index print krse

// Array entries():-
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// {
//     const array1 = ['a', 'b', 'c'];
//     const iterator1 = array1.entries();
//     console.log(iterator1.next().value);
//     console.log(iterator1.next().value);
//     console.log(iterator1.next().value);
// }

// {  let arr1 = ["ss", "gg", "kk"];
//   for(let [index,ele] of arr1.entries()){
//     console.log(index, ele);
//   }
// }

// ---- Array includes()---- :-

// The Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
// The Array.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     console.log(fruits.includes("Mango"));
// }

// ---- Array find() ---- :-

// The find() method returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

// {
//     const numbers = [4, 9, 16, 25, 29];
//     let first = numbers.find(myFunction);
//     function myFunction(value, index, array) {
//         return value > 18;
//     }
//     console.log(first);
// }

// ---- Array findIndex() ---- :-

// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.

// {
//     const numbers = [4, 9, 16, 25, 29];
//     let first = numbers.findIndex(myFunction);
//     function myFunction(value, index, array) {
//         return value > 18;
//     }
//     console.log(first);
// }

// ---- Array Max()---- :-

// The Math.max.apply to find the highest number in an array.

// {
//     const points = [40, 100, 1, 5, 25, 10];
//     function myArrayMax(arr) {
//         return Math.max.apply(null, arr);
//     }
//     console.log(myArrayMax(points));
// }

// ---- Array Min()---- :-

// The Math.min.apply to find the lowest number in an array.

// {
//     const points = [40, 100, 1, -5, 25, 10];
//     function myArrayMin(arr) {
//         return Math.min.apply(null, arr);
//     }
//     console.log(myArrayMin(points));
// }

// without Math method max and min value :-
// {
//     const array = [-2, -1, 0, 1, 2, 3]
//     let max = array[0], min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }
//     console.log("max = ", max);
//     console.log("min = ", min);
// }

// second largest number :-
// {
//   var array1 = [22,33,2,22,256,31]
//   var array2 = [25,31,2,22,2,31]

//   function secondLarge(arr) {

//       var uniq = [...new Set(arr)]
//       const disc = uniq.sort((a,b) => b - a)
//       return  disc[1];
//   }
//   console.log(secondLarge(array1));
//   console.log(secondLarge(array2));
// }   

//************************************************ */
//************************************************ */

// ---- array vs object ----

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
