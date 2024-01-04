// what is string :-

// A JavaScript string stores a series of characters like "John Doe".
// A string can be any text inside double or single quotes: -
    // let carName1 = "Volvo XC60"; 
    // let carName2 = 'Volvo XC60'; 



// ***** JAVASCRIPT STRING METHOD *****  20 method

// string length   = length mapva mate use thay - space pn count kre
// string slice(3,10)  = string ma index 3 thi 10 sudhi print kre 10 mo charctor naa ley = single parameter hoi (10) to tyathi bdhu j print kre last sudhi. 
// string substring(12, -3) = pela plus ane pchi minus hoi to pelethi 12 sudhi print kre 12 mo char no ley-- only (12) add kro to 12 thi bdhu j print kre last sudhi. 
// string substr(8,15) =  string ma index 8 mi value thi 1 thi 15 sudhi print krse = single parameter hoi (8) to tyathi bdhu print kre last sudhi. 
// string replace("visit","skillqode")  = content ma jya visit hse tya replace krse bija ny kre (first visit hoi te j kre )
// string replaceAll() = jya srkha words hse tya bdhi j jgya a replace thy jase (casesensitive)
// string toUpperCase() =  badhu j capital kri dese
// string toLowerCase() =  badhu j small kri dese
// string concat()  = bne string ne bhegi kre and space mukvi hoi to pn muki skye
// string trim()   = content start thay te pela ni space... and puru thay te pchi ni space count ny kre
// string trimStart() = content start thay te pela ni space...count ny kre
// string trimEnd()  = content end thay te pchi ni space...count ny kre
// string padStart(10 , "0") =  one value ni aagad 9 var 0 print krse (5 value hse to 5 times 0(value pela) and 5 time 8 print krse) = total 10 thy jay 
// string padEnd(10 , "0") = one value ni pchi 9 var 0 print krse (5 value hse to 5 times 8 and 5 times 0(value pchi) print krse)=total 10 thy jay
// string charAt(15) = string ma index 15 pr raheli value print krse
// string charCodeAt(3) = string ma 3 number pr je character aave teni ASCII value print kre (0 thi counting thay and space pn count kre)
// string fromCharCode(90) =  je ASCII value prit karavi hoi te aa method thay (32 to 126) ASCII code
// string repeat() = aakhi string ne jetli var repeat krvi hoi etli var kri skye
// string split() = string ne break kre



// -----string length----- 
// {
//     let a = "this is javascript language";
//     let b = a.length;
//     document.write(b)
// }

// -----string slice()----- 
// {
//     let a = "apple, mango, banana, orange";
//         //   0123456789012345678901234567
//     let b = a.slice(3,10);
//     document.write(b)
// }

// -----string substring()----- 
// {
//     let a = "apple, mango, banana, orange";
//         //   0123456789012345678901234567
//     let b = a.substring(12,-3);
//     document.write(b)
// }

// -----string substr()----- 
// {
//     let a = "apple, mango, banana, orange";
//         //   0123456789012345678901234567
//     let b = a.substr(8,15);
//     document.write(b)
// }

// -----string replace()----- 
{
//     function myFunction()
//     {
//         let a = document.getElementById("para-1").innerHTML;
//         document.getElementById("para-1").innerHTML = a.replace("visit","skillqode");
//     }

    // i =   capital hoi ke small to pn change kri ne aape
//     {
//         let a = "please visit MicrOsoft microsoft microsoft";
//         let chnage = a.replace(/microSoft/i, "skillqode");
//         document.write(chnage)
//     }

    // g = words bdhi j jgya a change kri ne aapse 
//     {
//         let a = "please visit skillqode visit and visit again";
//         let chnage = a.replace(/visit/g, "kishan");
//         document.write(chnage)
//     }
}

// -----string replaceAll()-----
// {
//     let a = "i love cats. but Cats are very easy to love. Cats are very popular. but cats dengaerous";
//     let x = a.replaceAll("cats" , "qqqqq");
//     let y = a.replaceAll("Cats" , "ppppp");

//     document.write(x + "<br>");
//     document.write(y);
// }

// -----string toUpperCase()----- 
// {
//     let a = "i love cats. but Cats are very easy to love. Cats are very popular. but cats dengaerous";
//     let b = a.toUpperCase();
//     document.write(b);
// }

// -----string toLowerCase()----- 
// {
//     let a = "I LOVE cats. but Cats are very easy to love. Cats are very popular. but cats dengaerous";
//     let b = a.toLowerCase();
//     document.write(b);
// }

// -----string concat()----- 
// {
//     let str1 = "kishan";
//     let str2 = "bhalala";
//     let a = str1.concat(" ",str2);
//     let b = a.length;
//     document.write(a +  "<br>");
//     document.write("length = "+ b);
// }

// -----string trim()----- 
// {
//     let a = "       this is javascript      ";
//     let b = a.trim();
//     console.log(b);
// }

// -----string trimStart()----- 
//     {
//         let a = "       this is javascript                          ";
//         let b = a.trimStart();
//         console.log(b);
//     }


// -----string trimEnd()----- 
//     {
//         let a = "       this is javascript            ";
//         let b = a.trimEnd();
//         console.log(b);
//     }


// -----string padStart()----- 
// {
//     let a = "88888";
//     let b = a.padStart(10,"0");
//     document.write(b)
// }

// -----string padEnd()----- 
// {
//     let a = "88888";
//     let b = a.padEnd(10,"0");
//     document.write(b)
// }

// -----string charAt()----- 
// {
//     let a = "this is string values";
//         //   012345678901234567890
//     let b = a.charAt(15);
//     document.write(b);
// }

// -----string charCodeAt()----- 
// {
//     let a = "this is string values";
//         //   012345678901234567890
//     let b = a.charCodeAt(3);
//     document.write(b);
// }

// ----- string fromCharCode -----
// {
//     let a = String.fromCharCode(122);
//     document.write(a);
// }

// ----- string repeat() -----
// {
//     var str = "javascript is a great language..." + "<br>";
//     var a = str.repeat(3);
//     document.write(a);
// }

// -----string split()----- 
// {
//     let a = "kishan";
//     const arr = a.split("");

//     a = "";
//     for (let i = 0; i < arr.length; i++) {
//         a += arr[i] + "<br>"
//     }
//     document.write(a);
// }
// {
//     var str = "javascript is a great language";
//     var a = str.split("");
//     document.write(a);
// }


//***** JAVASCRIPT SEARCHING METHOD *****  8 method 

// String indexOf("w") = string ma words ky index pr che te search kri ne aape
     //   indexOf("o",12) =  index 12 sudhi ma ( "o" ) aavto hoi teni index search ny kre --teni pchi no first ("o") ni index search kre but 0 index thi search kre  
// String lastIndexOf("m") = string ma savthi last charcter hoi teni index search kri ne aape (searching pelthi krse)
     //   lastindexOf("a",30) = up to 30 sudhi index ma last ( "a" ) aavto hoi teni index search kri ne aape
// String search() = index search kri ne aape
// String match() = charcter match kri ne teni index search kri ne aape
// String matchAll("very") = content ma jya very lkhyu hse te print krse (casesensitive), (/very/gi) = capital k small bdhu j print krse
// String includes() = string ma charcter hoi to true nkr false
// String startsWith("H") = string ma start words match thay to true nkr false
// String endsWith("") =  string ma end words match thay to true nkr false


// -----String indexOf()-----
// {
//     let fruits = "apple, mango, watermalon, strawbarry, lemon";
//     let part = fruits.indexOf("w");
//     document.write(part);
// }

// {
//     let fruits = "apple, mango, watermalon, strawbarry, lemon";
//     let part = fruits.indexOf("o",12);
//     console.log(part);
// }


// -----String lastIndexOf()-----
// {
//         let fruits = "apple, mango, watermalon, mango, strawbarry, lemon";                                                
//         let part = fruits.lastIndexOf("m");
//         console.log(part);
// }

// {
//     let fruits = "apple, mango, watermalon, mango, strawbarry, lemon";                                                
//     let part = fruits.lastIndexOf("a",30);
//     console.log(part);
// }

// -----String search()-----
// {
//     let fruits = "javascript is 'most' popular language";
//     let part = fruits.search("most");
//     console.log(part);
// }

// {
//     let fruits = "javascript is 'most' popular language";
//     let part = fruits.search(/Most/i);
//     console.log(part);
// }

// -----String match()-----
// {
//     let text = "this is javascript match method";
//     let part = text.match(/i/);
//     console.log(part);
// }

// -----String matchAll() reminder with array-----
// {
//     const regexp = /j/g;
//     const str = 'this is javascript';
//     const array = [...str.matchAll(regexp)];
//     console.log(array[0]);
//         // expected output : array["test1", "e", "st1", "1"]
//     console.log(array[1]);
//         // expected output : array["test2", "e", "st2", "2"]
// }

// {
//      let text = "I love cats. Cats are very easy to love. Cats are very popular.";
//      const iterator = text.matchAll("very");
//      document.getElementById("demo").innerHTML=Array.from(iterator);
// }

// -----String includes()----------
// {
//      let text = "Hello world, welcome to the universe.";
//      document.getElementById("demo1").innerHTML = text.includes("t");
// }

// ------String startsWith()-----
// {
//      let text = "Hello world, welcome to the universe.";
//      let part = text.startsWith("H");
//      console.log(part);
// }

// {
//      let text = "Hello world, Hello welcome to the universe.";
//      let part = text.startsWith("e", 1);
//      console.log(part);
// }

// -----String endsWith()-----
// {
//      let text = "Hello world, welcome to the universe";
//      let part = text.endsWith("e");
//      console.log(part);
// }

// {
//      let text = "Hello world, Hello welcome to the universe";
//      let part = text.endsWith("e",42);
//      console.log(part);
// }


// --------------------------------------------- //
// --------------------------------------------- //

// *****JAVASCRIPT TEMPLATE LITERLAS*****
 
// -----Back-Tics Syntax = back tick ma line break kri ne pn lkhi sko-----

// {
//      let text = `hello world!`
//      console.log(text);
// }

// -----Quotes Inside Strings-----
// {
//      let text = `He's often called "Johnny"`;
//      console.log(text);
// }

// -----Multiline Strings-----
// {
//      // not allow  
//      let text = "this
//      is infinite pages";
//      console.log(text);
// }

// {
//      // allow 
//       let text = `this
//           is infinite
//                page`;

//      console.log(text);
// }