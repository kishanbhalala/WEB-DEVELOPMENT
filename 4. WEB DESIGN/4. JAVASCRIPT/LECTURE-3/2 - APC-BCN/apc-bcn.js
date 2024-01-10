//*** (APC) *** 
//  functions to internet with the user : alert, prompt and confirm.

// 1. alert() - shows a message.

// 2. prompt() - shows a message, input text. it returns the text on ok or, if cancel button or
//               Esc is clicked ,Null.

// 3.confirm() - shows a message, confirm with "ok" or "cancel". it returns true for OK and false
//               for cancel/Esc.


//**  window alert() in javascript ** 
// {
//     window.alert("warning");
//     alert("this is javascript");
//     alert('pause!');
// }


//**  windows prompt() in javascript ** 
// {
//     var age = prompt('i am here');
//     var names = prompt("what is your name");
//     var input = prompt("and who are you");
// }
// {
//     let message = prompt("Age");
//     document.write(message);
// }

// **  windows confirm() in javascript ** 

// let message = confirm("this is javascript?");
// document.write(message);



//***  Break , continue, and nested loop  // (BCN) *** 

// break
// {
//     for(let a =1; a <= 10; a++)
//     {
//         if(a == 5)
//         {
//             break;
//         }
//         document.write(a);
//         document.write("<br>");
//     }
// }

// continue
// {
//     for(let a =1; a <= 10; a++)
//         {
//             if(a == 5)
//             {
//                 continue;
//             }
//             if(a == 8)
//             {
//                 continue;
//             }
//             document.write(a);
//             document.write("<br>");
//         }
// }

// nested loop
// {
//     link: for(let a=1; a<=10; a++)
//     {
//         document.write(a);
//         document.write("<br>");

//         for(let b=1; b<4; b++)
//         {
//             if (a == 5)
//             {
//                 break link;
//             }
//             document.write("kishan");
//             document.write("<br>");
//         }
//     }
// }