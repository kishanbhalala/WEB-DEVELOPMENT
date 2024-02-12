// ******* javascript if---else statement *******

// The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. 

// ● Use if to specify a block of code to be executed, if a specified condition is true
// ● Use else to specify a block of code to be executed, if the same condition is false
// ● Use else if to specify a new condition to test, if the first condition is false
// ● Use switch to specify many alternative blocks of code to be executed.


{
    // if statement
    // if... else statement
    // if... else if statement
    // switch statement
}

// 1.. if statement
// {
//     if(expression){
//         statement(s) to be executed if expression is true
//     }
// }
// {
//     var age = "19";
//     if (age >= 18) {
//         document.write("<b>Qualifies for driving</b>");
//     }
// }

// 2.. if... else statement
// {
//     if (expression) {
//         statement(s) to be executed if expression is true
//     }
//     else{
//         statement(s) to be executed if expression is false
//     }
// }
// {
//     var age = "15";
//     if (age >= 18) {
//         document.write("<b>Qualifies for driving</b>");
//     }
//     else{
//         document.write("<b>Qualifies not for driving</b>");
//     }
// }

// 3.. if... else if statement
// the if... else if... statement is an advanced form of if else that allows
// javascript to make a correct decision out of several condition.
// {
//     if (expression 1) {
//         statement(s) to be executed if expression 1 is true
//     }
//     else if (expression 2) {
//         statement(s) to be executed if expression 2 is true
//     }
//     else if (expression 3) {
//         statement(s) to be executed if expression 3 is true
//     }
//     else {
//         statement(s) to be executed if no expression 1 is true
//     }
// }

// {
//     var book = "economics";
//     if (book == "history") {
//         document.write("<b>history book</b>")
//     }
//     else if (book == "maths") {
//         document.write("<b>maths book</b>")
//     }
//     else if (book == "economics") {
//         document.write("<b>eco book</b>")
//     }
//     else {
//         document.write("<b>unknown book</b>")
//     }
// }


//4.. switch statement :-

// ● The switch expression is evaluated once.
// ● The value of the expression is compared with the values of each case.
// ● If there is a match, the associated block of code is executed.
// ● If there is no match, the default code block is executed.

{
    let input = 1;

    switch (input) {
        case 1:
            document.write("continue 1..")
            break;
        case "y":
            document.write("continue y..")
            break;
        case "yes":
            document.write("continue yes..")
            break;
        case 0:
            document.write("continue 0..")
            break;
        case "n":
            document.write("continue n..")
            break;
        case "no":
            document.write("continue no..")
            break;
        default:
            document.write("wrong input..")
            break;
    }
}