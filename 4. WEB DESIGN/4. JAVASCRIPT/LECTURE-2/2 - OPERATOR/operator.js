// ***** javascriot oparators *****

// Operators are used to assign values, compare values, perform arithmetic operations, and more. 
// There are different types of JavaScript operators: Arithmetic Operators.

// 1. arthmetic op 
// 2. assignment op 
// 3. comparison (relational) op
// 4. logical op 
// 5. special op


// 1. arthmetic op 

//  + (addition)
//  - (subtraction)
//  * (multiplication)
//  / (division)
//  % (modulus)
//  ++ (increment)
//  -- (decrement)
//  ** (exponentiation)

// + addition
// {
//     var a = 20;
//     var b = 30;
//     var c = a + b;
//     console.log(c);
// }
// // - subtraction
// {
//     var a = 20;
//     var b = 30;
//     var c = a - b;
//     console.log(c);
// }
// // * multiplication
// {
//     var a = 20;
//     var b = 30;
//     var c = a * b;
//     console.log(c);
// }
// // / division
// {
//     var a = 20;
//     var b = 30;
//     var c = a / b;
//     console.log(c);
// }
// //   % modulus
// {
//     var a = 20;
//     var b = 3;
//     var c = a % b;
//     console.log(c);
// }
// //   ++ increment
// {
//     var a = 50;
//     console.log(--a);
// }
// //  -- decrement
// {
//     var a = 20;
//     console.log(--a);
// }
// // ** exponentiation
// {
//     var a = 3;
//     var b = 4;
//     var c = b ** a;
//     console.log(c);
//     {
//         var a = 2;
//         var b = 3;
//         document.getElementById("demo1").innerHTML = a ** b;
//     }
// }


//2. assignment op  

//  = (simple assignment)
//  ex: c = a + b will assign the value of a + b into c

//  += (addition and assignment)
//  ex: c += a is equivalent to c = c + a

//  -= (subtract and assignment)
//  ex: c -= a is equivalent to c = c - a

//  *= (multiply and assignment)
//  ex: c *= a is equivalent to c = c * a

//  /= (divide and assignment)
//  ex: c /= a is equivalent to c = c / a

//  %= (modules and assignment)
//  ex: c %= a is equivalent to c = c % a

//  **= (exponentiation and assignment)
//  ex: c **= a is equivalent to c = c ** a

// {
//     var a =2;
//     var b =3;
//     var c = b+=a;  // b=b+a  b=5
//     var c = b-=a;  // b=b-a  b=3
//     var c = b*=a;  // b=b*a  b=6
//     var c = a%=b;  // a=a%b  b=2
//     var c = a/=b;  // a=a/b 
//     var c = a**=b;  // a=a**b
//     // var linebreak = "<br />"
//     document.getElementById("demo2").innerHTML=(c);
// }



// 3. comparison op 

// == (equal)
// checks if the value of two operands are equal or not, if yes, 
// then the condition true. 
// ex: (a == b) is not true

// === (identical equel and same type)
// the strict equality (===) operator checks whether its two operands are 
// equal, returning a boolean result. unlike the equality operator, the strict 
// equality operator always considers operands of different types to be different.

// != (not equal)
// checks if the value of two operands are equal or not, the values are not 
// equal, then the condition becomes true. 
// ex: (a != b) is true.

// > (greater than)
// checks if the value of the left operand is greather than the value of the right 
// operand, if yes, then the condition becomes true. 
// ex: (a > b) is not true

// < (less than)
// checks if the value of the left operand is less than the value of the right 
// operand, if yes, then the condition becomes true. 
// ex: (a < b) is  true

// >= (greater than or equal to)
// checks if the value of the left operand is greather than or equal to the value
// of the right operand, if yes, then the condition becomes true. 
// ex: (a >= b) is not true.

// <= (less than or equal to)
// checks if the value of the left operand is less than or equal to the value
// of the right operand, if yes, then the condition becomes true. 
// ex: (a <= b) is true.

// {
    // var a = 12;
    // var b = 12;
    
    // var c = a == b;    //value same hoi to true nkr false
    // var c = a === b;   //value and datatype same hoi to j true nkr false
    // var c = a >= b;       //a ni value equal and enathi nani hoi to true nkr false
    // var c = a <= b;       //a nii value equal and enathi moti hoi to true nkr false
    // var c = a > b;       //a krta nani hoi to true nkr false
    // var c = a < b;       //a krta moti hoi to true nkr false
    // var c = a != b;       //value same na hoi to true nkr false

    // document.getElementById("demo4").innerHTML = c
// }



// 4. logical op

// && (AND op)
// if both the operands are non-zero, then the condition become true. 
// ex: (a && b) is true.

// || (OR op)
// if any of the two operands are non-zero, then the condition becomes true.
// ex: (a || b) is true

// ! (not op)
// reverses the logical state of its operand. if a condition is true, then
// the logical NOT operator will make it false.
// ex: ! (a && b) is false.

{
    // var a = false;
    // var b = true;

    // document.getElementById("demo5").innerHTML= a && b;
    // document.getElementById("demo5").innerHTML= a || b;
    // document.getElementById("demo5").innerHTML= ! (a && b);
}


// --- miscellaneous op ---

//    ? 
//    : (conditional)
//    if condition  is true? then value X : otherwise value Y

// ((a > b) ? 100 : 200) => 200
// ((a < b) ? 100 : 200) => 100


// --- javascript array method ---
{
    // const names = ['kishan','jeegar','sagar','anil'];
    // const names2 = {person1:'kishan',person2:'jeegar',person3:'sagar'};
    // console.log(names2.person1);
    // document.write=(names2.person1);
}

// {
//     let user;
//     user = kishan;
//     alert(user ?? "guest user")
// }


// ------------------------------------- //
// ------------------------------------- //

// ***** JavaScript Operator Precedence *****

//  Operator	             Description	                Example

//    ()	            Expression Grouping	          (100 + 50) * 3
//   	.               Member Of	                    person.name
//   	[]	            Member Of	                    person["name"]
//   	?.	            Optional Chaining ES2020	    x ?. y
//   	()	            Function Call	                myFunction()
//   	new	            New with Arguments	          new Date("June 5,2022")
//   	new	            New without Arguments	        new Date()