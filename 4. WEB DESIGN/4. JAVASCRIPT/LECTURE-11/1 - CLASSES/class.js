// ***** JavaScript Classes *****

// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.
// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.
// વર્ગો JavaScript ના ES6 સંસ્કરણમાં રજૂ કરાયેલી એક વિશેષતા છે.
// વર્ગ એ ઑબ્જેક્ટ માટે બ્લુપ્રિન્ટ છે. તમે વર્ગમાંથી એક ઑબ્જેક્ટ બનાવી શકો છો.
// તમે વર્ગને ઘરના સ્કેચ (પ્રોટોટાઇપ) તરીકે વિચારી શકો છો. તેમાં ફ્લોર, દરવાજા, બારીઓ વગેરે વિશેની તમામ વિગતો છે. આ વર્ણનોના આધારે તમે ઘર બનાવો છો. ઘર એ પદાર્થ છે.


// --- Creating JavaScript Class ---

// Use the keyword class to create a class.
// Always add a method named constructor()

// {
//     // constructor function
//         function person () {
//         this.name = 'kishan',
//         this.age = 25
//     }

//     // create an object
//     const person1 = new person();
//     console.log(person1);
// }


// The class keyword is used to create a class. 
// The properties are assigned in a constructor function.

{
    // creating a class syntax :-
    // class ClassName {
    //     constructor() { ... }
    //   }

    // example :-
    // class person {
    //     constructor(name, year) {
    //         this.name = name;
    //         this.year = year;
    //     }
    // }
}

{
    // creating a class
    // class car {
    //     constructor(name, price) {
    //         this.n = name;
    //         this.p = price;
    //     } 
    // }

    // // creating an object
    // const a = new car('BMW',5000000);
    // const b = new car('farari',10000000);

    // console.log(a.n + " " + a.p);
    // console.log(b.n + " " + b.p);

    // a and b are objects of car class.
    // The constructor() method inside a class gets called automatically each time an object is created.
}


// --- Javascript Class Methods --- 

// Class methods are created with the same syntax as object methods.
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.

// While using constructor function 
// {
//     function person(name) {
//         this.name = name;

//         this.greet = function () {
//             return ("hello" + " " + this.name)
//         }
//     }
// }

// It is easy to define methods in the JavaScript class.
// You simply give the name of the method followed by ().

// {
//     class person {
//         constructor(name) {
//             this.name = name;
//         }
//         greet () {
//             console.log(`hello ${this.name}`);
//         }
//     }
//     let a = new person("kishan");

//     // accessing property
//     console.log(a.name);

//     // accessing metho
//     a.greet();
// }

// example :-

// {
//     class Car {
//         constructor(name, year) {
//             this.name = name;
//             this.year = year;

//         }
//         age() {
//             const date = new Date();
//             return date.getFullYear() - this.year;
//         }
//     }

//     const myCar = new Car("Ford", 2014);

//     document.getElementById("demo").innerHTML =
//         "My car is " + myCar.age() + " years old.";
// }



// --- Getters and Setters ---

// {
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }

//         // getter
//         get personName() {
//             return this.name;
//         }

//         // setter
//         set personName(x) {
//             this.name = x;
//         }
//     }

//     let person1 = new Person('Jack');
//     console.log(person1.name); // Jack

//     // changing the value of name property
//     person1.personName = 'Sarah';
//     console.log(person1.name); // Sarah
// }

// Hoisting

// {
//     // accessing class
//     const p = new Person(); // ReferenceError

//     // defining class
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//     }
// }