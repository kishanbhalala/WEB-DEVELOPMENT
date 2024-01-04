// 1..square star 
// {
//     for (let i = 1; i <= 5; i++) {

//         for (let j = 1; j <= 5; j++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// 2..hollow square 
// {
//     for (let i = 1; i <= 5; i++) {

//         for (let j = 1; j <= 5; j++) {

//             if (i==1 || i==5 || j == 1 || j == 5) {
//                 document.write("*");
//             }
//             else{
//                 document.write("&nbsp;&nbsp");
//             }
//         }
//         document.write("<br>");
//     }
// }

// 3.. right triangle
// {
//     for (let i = 1; i <= 5; i++) 
//     {
//         for (let k = 1; k <= 5-i; k++)  
//         {
//             document.write("<span class='red'>*</span>");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// 4.. left triangle
// {
//     for (let i = 1; i <= 5; i++) 
//     {
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// 5.. downward triangle
// {
//     for (let i = 1; i <= 5; i++) 
//     {
//         for (let j = 1; j <= 6-i; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// 6.. hollow triangle
// {
//     for (let i = 1; i <= 6; i++) 
//     {
//         for (let j = 1; j <= 6; j++) 
//         {
//             if (j == 1 || i == 6 || i == j) 
//             {
//                 document.write("*");
//             }
//             else
//             {
//                 document.write("&nbsp&nbsp");
//             }
//         }
//         document.write("<br>");
//     }
// }

// 7..pyramid 
// {
//     var sp=10;
//     {
//         for (let i = 1; i <= 10; i+=2) 
//         {
//             for(let k=1; k<=sp; k++)
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 1; j <= i; j++) 
//             {
//                 document.write("*");
//             }
//             sp--;
//             document.write("<br>");
//         }
//     }
// }

// 8..reversed pyramid 
// {
//     var sp=10;
//     {
//         for (let i = 1; i <= 10; i+=2) 
//         {
//             for(let k=1; k<=sp; k++)
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = i; j < 10; j++) 
//             {
//                 document.write("*");
//             }
//             sp++;
//             document.write("<br>");
//         }
//     }
// }

// 9.. hollow pyramid 
// {
//     var sp=10;
//     {
//         for (let i = 1; i <= 10; i+=2) 
//         {
//             for(let k=1; k<=sp; k++)
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 1; j <= i; j++) 
//             {
//                 if (j==1 || i==9 || i==j) 
//                 {
//                     document.write("*");
//                 }
//                 else
//                 {
//                     document.write("&nbsp&nbsp");
//                 }
//             }
//             sp--;
//             document.write("<br>");
//         }
//     }
// }

// 10..diamond 
// {
//         var sp=10;
//         {
//             for (let i = 1; i <= 8; i+=2) 
//             {
//                 for(let k=1; k<=sp; k++)
//                 {
//                     document.write("&nbsp&nbsp");
//                 }
//                 for (let j = 1; j <= i; j++) 
//                 {
//                     document.write("*");
//                 }
//                 sp--;
//                 document.write("<br>");
//             }
//             for (let i = 1; i < 10; i+=2) 
//             {
//                 for(let k=0; k<=sp; k++)
//                 {
//                     document.write("&nbsp&nbsp");
//                 }
//                 for (let j = i; j < 8; j++)
//                 {
//                     document.write("*");
//                 }
//                 sp++;
//                 document.write("<br>");
//             }
//         }
// }

// 11..hollow diamond
// {
//             var sp=10;
//             {
//                 for (let i = 1; i <= 10; i+=2) 
//                 {
//                     for(let k=1; k<=sp; k++)
//                     {
//                         document.write("&nbsp&nbsp");
//                     }
//                     for (let j = 1; j <= i; j++) 
//                     {
//                         if (j==1 || i==j) 
//                         {                          
//                             document.write("*");
//                         }
//                         else
//                         {
//                             document.write("&nbsp&nbsp");
//                         }
//                     }
//                     sp--;
//                     document.write("<br>");
//                 }
//                 for (let i = 1; i < 8; i+=2) 
//                 {
//                     for(let k=-1; k<=sp; k++)
//                     {
//                         document.write("&nbsp&nbsp");
//                     }
//                     for (let j = i; j < 8; j++)
//                     {
//                         if (j==1 || i==j || j==7) 
//                         {                          
//                             document.write("*");
//                         }
//                         else
//                         {
//                             document.write("&nbsp&nbsp");
//                         }
//                     }
//                     sp++;
//                     document.write("<br>");
//                 }
//             }
//     }

// 12..hourglass 
// {
//         var sp = 10;

//         for (let i = 1; i < 10; i += 2) 
//         {
//             for (let k = -1; k <= sp; k++) 
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = i; j < 10; j++) 
//             {
//                 document.write("*");
//             }
//             document.write("<br>");
//             sp++;
//         }
//         for (let i = 4; i <= 10; i += 2) 
//         {
//             for (let k = 1; k <= sp; k++) 
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 2; j <= i; j++) 
//             {
//                 document.write("*");
//             }
//             document.write("<br>");
//             sp--;
//         }
// }

// 13..right pascal 
// {

//         for (let i = 1; i <= 4; i ++) 
//         {
//             for (let j = 1; j <= i; j++) 
//             {
//                 document.write("*");
//             }
//             document.write("<br>");
//         }
//         for (let i = 1; i <= 4; i ++) 
//         {
//             for (let j = i; j <= 4; j++) 
//             {
//                 document.write("*");
//             }
//             document.write("<br>");
//         }
// }

// 14..left pascal 
// {
//         var sp = 15;

//         for (let i = 1; i <= 4; i ++) 
//         {
//             for (let k = 1; k <= sp; k++) 
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 1; j <= i; j++) 
//             {
//                 document.write("*");
//             }
//             document.write("<br>");
//             sp--;
//         }
//         for (let i = 1; i <= 4; i ++) 
//         {
//             for (let k = 0; k <= sp; k++) 
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = i; j <= 4; j++) 
//             {
//                 document.write("*");
//             }
//             document.write("<br>");
//             sp++;
//         }
// }

// 15..heart
// {
//     var n = 6;
//     sp = 6;
//     for (let i = 3; i < n; i += 2) 
//     {
//         // print first spaces
//         for (let k = 1; k < sp - i; k += 2) {
//             document.write('&nbsp&nbsp')
//         }
//         // print first stars
//         for (let j = 1; j <= i; j++) {  
//             document.write('*')
//         }
//         // print second spaces
//         for (let k = 1; k <= sp - i; k++) {
//             document.write('&nbsp&nbsp')
//         }
//         // print second stars
//         for (let j = 1; j <= i; j++) {
//             document.write('*')
//         }
//         document.write("<br>");
//     }
//     // lower part
//     // inverted pyramid
//     var sp = 0;
//     for (let i = 12; i > 0; i -= 2) 
//     {
//         for (let k = 0; k < sp; k++) {
//             document.write('&nbsp&nbsp')
//         }
//         for (let j = 1; j < i; j++) {
//             document.write('*')
//         }
//         document.write("<br>");
//         sp++;
//     }
// }



// javascript number pettern
// 1.. tringle 
// {
//     for(let i = 1; i<=5; i++)
//     {
//         for(let j = 1; j<=i; j++)
//         {
//             document.write(j);
//         }
//         document.write("<br>")
//     }
// }

// 2..tringle
// {
//     for(let i = 1; i<=5; i++)
//     {
//         for(let j = 1; j<=i; j++)
//         {
//             document.write(i);
//         }
//         document.write("<br>")
//     }
// }

// 3..tringle
// {
//     var a = 1;
//     for(let i = 1; i<=4; i++)
//     {
//         for(let j = 1; j<=i; j++)
//         {
//             document.write(a++);
//         }
//         document.write("<br>")
//     }
// }

// 4.. reverse 
// {
//         for(let i = 5; i>=1; i--)
//         {
//             for(let j = 1; j<=i; j++)
//             {
//                 document.write(j);
//             }
//             document.write("<br>")
//         }
// }

// 5..reverse
// {
//     for (let i = 1; i <= 5; i++) 
//     {
//         for (let j = 5; j >= i; j--) 
//         {
//             document.write(j);  
//         }
//         document.write("<br>");
//     }
// }

// 6..reverse 
// {
//     for (let i = 5; i >= 1; i--) 
//     {
//         for (let j = i; j >= 1; j--) 
//         {
//             document.write(j);  
//         }
//         document.write("<br>");
//     }
// }

// 7..number pyramid 
// { 
//     var sp=10;

//     for(let i=1;i<=10;i+=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for(let j=1;j<=i;j++)
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp--;
//     }
// }

// 8..numbr pyramid
// { 
//     var sp=10;
//     var a = 1;

//     for(let i=1;i<=5;i+=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for(let j=1;j<=i;j++)
//         {
//             document.write(a++);
//         }
//         document.write("<br>");
//         sp--;
//     }
// }

// 9..reverse pyramid
// { var sp=10;

//     for(let i=10;i>=1;i-=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for(let j=1; j < i; j++)
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// 10..diamond 
// {
//     var sp = 10;
//     for (let i = 1; i <= 7; i += 2) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp--;
//     }
//     for (let i = 5; i >= 1; i -= 2) 
//     {
//         for (let k = -1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// 11.. hourglass 
// {
//         var sp = 5;
//         for (let i = 8; i >= 1; i -= 2) 
//         {
//             for (let k = -1; k <= sp; k++)  
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 1; j < i; j++) 
//             {
//                 document.write(j);
//             }
//             document.write("<br>");
//             sp++;   
//         }
//         for (let i = 4; i <= 8; i += 2) 
//         {
//             for (let k = 1; k <= sp; k++) 
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 1; j < i; j++) 
//             {
//                 document.write(j);
//             }
//             document.write("<br>");
//             sp--;
//         }
//     }

// 12.. pascal 
// {
//     for (let i = 1; i <= 4; i ++) 
//     {
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//     }
//     for (let i = 3; i >= 1; i--) 
//     {
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");

//     }
// }

// string pettern javascript 
// {
//     var a = ["j","a","v","a","s","c","r","i","p","t"];
//     for(let i = 0; i<10; i++)
//     {
//         for(let j = 0; j<=i; j++)
//         {
//             document.write(a[j] + "&nbsp");
//         }
//         document.write("<br>");
//     }
// }

// find random number and max number pettern
// {
//     var b = 0;
//     for (let i = 1; i <= 5; i++) 
//     {
//         for (let j = 1; j <= i; j++) 
//         {
//             a = Math.floor(Math.random() * 100);
//             document.write(a + " &nbsp ")
//             if (b < a) 
//             {
//                 b = a;
//             }
//         }
//         document.write("<br>");
//     }
//     document.write("max number = " + b)
// }