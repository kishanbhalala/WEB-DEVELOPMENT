//******** / JavaScript Math Object ********* //

// In JavaScript, Math is a built-in object that allows you to perform mathematical operations on the Number type. Math is not a constructor function.
// It's a property of the implicit global object.

// The syntax for Math any methods is : Math.method(number)

// examples:-
// Math.PI;
// The Math object is static.
// All methods and properties can be used without creating a Math object first.


// Math Properties (Constants) :-
// The syntax for any Math property is : Math.property.
// JavaScript provides 8 mathematical constants that can be accessed as Math properties:

// example :-

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E



// Math.PI = 3.14
// {
//     let a = Math.PI
//     console.log(a);
// }

// Math.round(x) Returns x rounded to its nearest integer
// {
//     let a = Math.round(4.5)          // 5
//     document.write(a + "<br>");
//     let b = Math.round(4.2)          //4
//     document.write(b);
// }

// Math.ceil(x)	    Returns x rounded up to its nearest integer
// {
//     let a = Math.ceil(4.5)           // 5
//     document.write(a + "<br>");
//     let b = Math.ceil(4.2)           // 5
//     document.write(b + "<br>");
//     let c = Math.ceil(-4.5)           // -4
//     document.write(c + "<br>");
// }

// Math.floor(x)	Returns x rounded down to its nearest integer
// {
//     let a = Math.floor(4.6)           // 4
//     document.write(a + "<br>");
//     let b = Math.floor(4.2)           // 4
//     document.write(b + "<br>");
//     let c = Math.floor(-4.4)           // -5
//     document.write(c + "<br>");
// }

// Math.trunc(x)	Returns the integer part of x (new in ES6)
// {
//     let a = Math.trunc(4.6)           // 4
//     document.write(a + "<br>");
//     let b = Math.trunc(3.2)           // 3
//     document.write(b + "<br>");
//     let c = Math.trunc(-4.5)           // -4
//     document.write(c + "<br>");
// }

// Math.sign(x)        returns if x is negative, null or positive:
// {
//     let a = Math.sign(0)           // 0
//     document.write(a + "<br>");
//     let b = Math.sign(3.2)           // 1
//     document.write(b + "<br>");
//     let c = Math.sign(-180)           // -1
//     document.write(c + "<br>");
// }

// Math.pow(x, y) returns the value of x to the power of y:
{
    let a = Math.pow(5,5);
    document.write(a);
}

// Math.sqrt(x) returns the square root of x:
// {
//     let a = Math.sqrt(64);
//     document.write(a);
// }

// Math.abs(x) returns the absolute (positive) value of x:
// {
//     let a = Math.abs(-64);
//     document.write(a);
// }

// Math.min() and Math.max()
// can be used to find the lowest or highest value in a list of arguments:
// {
//     let a = Math.min(4,55,33,76,2,77,90,2,10,32,-44);
//     document.write(a + "<br>");
// }
// {
//     let a = Math.max(4,55,33,76,2,77,90,2,10,32);
//     document.write(a);
// }

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
// {
//     let a = Math.floor(Math.random() * 100);
//     document.write(a);

// }

// OTP generate:-

// function generateOTP(length) {
//     let otp = '';
//     for (let i = 0; i < length; i++) {
//         otp += Math.floor(Math.random() * 10).toString();
//     }
//     return otp;
// }
// console.log(generateOTP(6));