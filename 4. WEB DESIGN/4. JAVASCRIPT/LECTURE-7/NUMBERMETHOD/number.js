// ***** JavaScript Number Methods *****

// The JavaScript number object enables you to represent a numeric value. 
// It may be integer or floating-point. 
// JavaScript number object follows IEEE standard to represent the floating-point numbers.

// toString()	      Returns a number as a string
// toExponential()	  Returns a number written in exponential notation
// toFixed()	      Returns a number written with a number of decimals
// toPrecision()	  Returns a number written with a specified length
// ValueOf()	      Returns a number as a number


// ---toString()---
// {
//     const numbers = 150;
//     const n1 = numbers.toString();
//     const n2 =(25*25).toString();
//     const n3 =(25).toString();

//     console.log(n1);
//     console.log(n2);
//     console.log(n3);

//     console.log(typeof(n1));
//     console.log(typeof(n2));
//     console.log(typeof(n3));
// }	 

// ---toExponential()---	
// returns a string, with a number rounded and written using exponential notation.
// {
//     let number = 25000;
//     let a = number.toExponential();
//     let b = number.toExponential(2);
//     let c = number.toExponential(3);
//     let d = number.toExponential(4);

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }

// ---toFixed()---	 
// {
//     let fix = 5.2525;
//     let a = fix.toFixed(1);
//     let b = fix.toFixed(2);
//     let c = fix.toFixed(3);
//     let d = fix.toFixed(4);
//     let e = fix.toFixed(5);

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
// }

// ---toPrecision()--- 
// {
//     let pre = 10.45353;
//     let a1 = pre.toPrecision();
//     let a = pre.toPrecision(1);
//     let b = pre.toPrecision(2);
//     let c = pre.toPrecision(3);
//     let d = pre.toPrecision(4);
//     let e = pre.toPrecision(5);

//     console.log(a1);
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
// }

// ---ValueOf()--- 
// {
//     const numbers = 150;
//     const n1 = numbers.valueOf();
//     const n2 =(25*25).valueOf();
//     const n3 =(25).valueOf();

//     console.log(n1);
//     console.log(n2);
//     console.log(n3);

//     console.log(typeof(n1));
//     console.log(typeof(n2));
//     console.log(typeof(n3));
// }	



// **************************************************************** //
// **************************************************************** // 

// parseInt() = value point ma lkhye to pn integer ma j aavse 
// parseFloat() = value ma point pchi ni value pn print kre

// parseInt()
// {
//     var a = 10.11;
//     var num = parseInt(a);
//     document.write(num)
// }

// parseFloat() 
// {
//     var a = 55.44;
//     var num = parseFloat(a);
//     document.write(num)
// }