// ***** JavaScript Objects *****

//  object is a non-primitive data-type that allows you to store multiple collections of data.
//  An object is a collection of properties, and a property is an association between a name (or key) and a value.
//  A property's value can be a function, in which case the property is known as a method. 
//  Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.
//  The Object type represents one of JavaScript's data types. 
//  It is used to store various keyed collections and more complex entities. 
//  Objects can be created using the Object() constructor or the object initializer / literal syntax.

// ઑબ્જેક્ટ એ બિન-આદિમ ડેટા-પ્રકાર છે જે તમને ડેટાના બહુવિધ સંગ્રહને સંગ્રહિત કરવાની મંજૂરી આપે છે.
// ઑબ્જેક્ટ એ ગુણધર્મોનો સંગ્રહ છે, અને મિલકત એ નામ (અથવા કી) અને મૂલ્ય વચ્ચેનું જોડાણ છે.
// મિલકતનું મૂલ્ય એક કાર્ય હોઈ શકે છે, જે કિસ્સામાં મિલકતને પદ્ધતિ તરીકે ઓળખવામાં આવે છે.
// JavaScript માં ઑબ્જેક્ટ્સ, જેમ કે અન્ય ઘણી પ્રોગ્રામિંગ ભાષાઓમાં, વાસ્તવિક જીવનમાં ઑબ્જેક્ટ્સ સાથે સરખામણી કરી શકાય છે.
// ઑબ્જેક્ટ પ્રકાર JavaScript ના ડેટા પ્રકારોમાંથી એકનું પ્રતિનિધિત્વ કરે છે.
// તેનો ઉપયોગ વિવિધ કીડ સંગ્રહો અને વધુ જટિલ એકમોને સંગ્રહિત કરવા માટે થાય છે.
// ઑબ્જેક્ટ () કન્સ્ટ્રક્ટર અથવા ઑબ્જેક્ટ ઇનિશિયલાઈઝર / શાબ્દિક સિન્ટેક્સનો ઉપયોગ કરીને ઑબ્જેક્ટ બનાવી શકાય છે.


// object syntax :-


// object = {property1:value1,property2:value2.....propertyN:valueN}    

// --- Here is an example of a JavaScript object. --- 
{
//     const student = {
//         firstName: 'ram',
//         class: 10
//     };
// console.log(student.firstName);
// console.warn(student.class);
}

// --- JavaScript Object Declaration --- 

// {
//     const object_name = {
//         key1: "value1",
//         key2: "value2"
//     };
// console.log(object_name);
// }

// --- object creation --- 
{
    // const person = { 
    //     name: 'John',
    //     age: 20
    // };
    // console.log(typeof person); 
}


// ***** JavaScript Object Properties *****

// In JavaScript, "key: value" pairs are called properties. 
// For example :-

{
    // let person = { 
    //     name: 'John',
    //     age: 20
    // };
    // Here, name: 'John' and age: 20 are properties.
}

// --- Accessing Object Properties ---

// 1. Using dot Notation

// Here's the syntax of the dot notation.
{
    // objectName.key
}
// For example,
{
    // const person = { 
    //     name: 'John', 
    //     age: 20, 
    // };

    // // accessing property
    // console.log(person.age); 
}

// 2. Using bracket Notation

// Here is the syntax of the bracket notation.
{
    // objectName["propertyName"]
}
// for example 
{
    // const car = {
    //     innova: "30 lacs",
    //     bmw : "1 crore"
    // };
    //    // accessing property
    //    document.write(car["innova"] + "<br>" + car["bmw"]); 
}


// --- JavaScript Nested Objects ---

// An object can also contain another object. 
// For example :-

// {
//     const obj = {
//         name : "kishan",
//         age : 25,

//         cars : {
//             c1 : "innova",
//             c2 : "bmw",
//             c3 : "jaguar",

//             person :{
//                 n1 : "jeegar",
//                 n2 : "urvesh",
//                 n3 : "prashant",
//                 n4 : "jenish",
//             }
//         }
//     }

//      // //accessing property of obj object
//     console.log(obj.cars); 

//     // // accessing property of cars object
//     console.log(obj.cars.c3);

//     // // accessing property of person object
//     console.log(obj.cars.person.n2);
// }




// ***** JavaScript Object Methods *****

// JavaScript Object.assign()
// Javascript Object.create()
// JavaScript Object.entries()
// JavaScript Object.is()
// JavaScript Object.hasOwnProperty()
// JavaScript Object.freeze()
// JavaScript Object.getOwnPropertyNames()
// Javascript Object.setPrototypeOf()
// JavaScript Object.toString()
// JavaScript Object.valueOf()
// JavaScript Object.values()


//  1. ---JavaScript Object.assign()---

// Syntax:-
// Object.assign(target, ...sources) //parameter

// The assign() method takes in:

// target - the target object to which we will copy all the properties of the sources.
// sources - the source object(s) whose properties we want to copy.//  1. JavaScript Object.assign()

// {
//     const obj1 = { a: 1 };
//     const obj2 = { b: 2 };
//     const obj3 = { c: 3 };

//     // combine all the properties of
//     // obj1, obj2, obj3 into a single object 
//     const merge = Object.assign(obj2, obj1, obj3);

//     console.log(merge);
// }

// ---assign() Return Value---

// Javascript Object.assign() to Clone Objects
// {
//     //  create source object
//     const obj = {
//         name: "kishan bhalala",
//         age: 25,
//     };

//     //  create target object
//     let newObject = {};

//     // copy enumerable properties of obj to newObject
//     // newObject is returned and stored in copy object
//     const copy = Object.assign(newObject, obj);

//     // print the copy object
//     console.log(copy);

//     // print newObject
//     console.log(newObject);

//     // In the above example, we have used the assign() method to assign the contents of obj to newObject.
// }


// 2. --- Javascript Object.create() ---

// {
//     let student = {
//         name: "kishan",
//         age: 25,
//         mark:88.9,
//         display(){
//             console.log("name:",this.name);
//         }
//     };

//     // create object from Student prototype
//     let std1 = Object.create(student);
//     std1.name = "jeegar";
//     std1.display();
// }

// 3. --- JavaScript Object.entries() ---

// returns properties in key-value format:-
// {
//     const obj = { name: "kishan", age: 20, location: "india" };
//     console.log(Object.entries(obj)); 
// }

// keys are arranged randomly:-
// {
//     const obj = { 42: "a", 22: "b", 71: "c" };

//     // returns key-value pairs arranged
//     // in ascending order of keys

//     console.log(Object.entries(obj));
// }

// entries() to Iterate Through Key-Value Pairs:-
// {
//     const obj = {
//         name: "John", 
//         age: 27, 
//         location: "Nepal" 
//     };

//     for (const [key, value] of Object.entries(obj)) 
//     {
//         console.log(`${key}: ${value}`);
//     }
// }

// 4. --- JavaScript Object.is() ---

// The Object.is() method checks if two values are the same.
// {
//     let obj1 = {a: 1, b:2};

//     // // comparing the object with itself
//     console.log(Object.is(obj1,obj1));
// }


// // Javascript Object.is()
// {
//     // //objects with same values
//     console.log(Object.is("JavaScript", "JavaScript")); 

//     // objects with different values
//     console.log(Object.is("JavaScript", "javascript")); 

//     // compare null values
//     console.log(Object.is(null, null));
// }


// // is() With Custom Objects
// {
//     // create an object
//     let obj1 = { a: 1 };

//     // create another object
//     // with identical properties as obj1
//     let obj2 = { a: 1 };

//     // returns true because both arguments
//     // have the same reference
//     console.log(Object.is(obj1, obj1));

//     // returns false because obj1 and
//     // obj2 have different references
//     console.log(Object.is(obj1, obj2));
// }


// // is() With Special Cases
// {
//     console.log(Object.is([], []));  

//     console.log(Object.is(0, -0));  

//     console.log(Object.is(-0, -0)); 

//     console.log(Object.is(NaN, 0/0));  
// }



// 5. --- JavaScript Object.hasOwnProperty() --- 
// The Object.hasOwnProperty() method checks if the object possesses the given property.

// {
//     const obj = {};
//     obj.id = 42;
//     console.log(obj);

//      // check if id is present in obj or not
//     console.log(obj.hasOwnProperty("id"));
// }
// {
//     // create an object with property id
//     const obj = {id: 42 , toString:10};

//     // check if id exists in obj 
//     console.log(obj.hasOwnProperty("id")); 

//     // // check if name exists in obj 
//     console.log(obj.hasOwnProperty("name")); 

//     // // inherited properties return false
//     console.log(obj.hasOwnProperty("toString")); 
// }


// 6. --- JavaScript Object.freeze() ---
    // The Object.freeze() method freezes an object i.e. it prevents the object from being modified.

// {
//     let obj = {
//         foo: "bar",
//         new_foo: "one"
//     };
//       // freeze the obj object
//        Object.freeze(obj);

//       // changes will fail silently
//       obj.foo = "bar111";
//       console.log(obj.foo); 

//       // cannot add a new property 
//       obj.new_foo = "two";
//       console.log(obj.new_foo); 
// }


// 7. --- JavaScript Object.getOwnPropertyNames() ---
// The Object.getOwnPropertyNames() method returns an array of all the properties found in a given object.

// {
//      const obj = {
//          name: "kishan",
//          age: 32,
//          address: "",
//        };

//        // find out the properties present in obj
//        const propertyNames = Object.getOwnPropertyNames(obj);

//        console.log(propertyNames);
//  }


// 8. --- Javascript Object.setPrototypeOf() ---
// The Object.setPrototypeOf() method sets the prototype of the specified object to another object or null.
// {
//     // create an empty object
//     const obj = {};

//     // create a non-empty object parent
//     const parent = { foo: 'kishan', age: 25};

//     // set parent as the prototype of obj
//     Object.setPrototypeOf(obj, parent);

//     // print foo property of parent
//     // using the obj object
//     console.log(obj.foo);
// }


// 9. --- JavaScript Object.toString() --- 
// // The Object.toString() method returns the given object as a string.

// {
//     //create a number with value 10
//     let num = 10;

//     // check the type of num before
//     // using the toString() method
//     console.log(typeof num); 

//     // check the type of num after 
//     //using the toString() method
//     console.log(typeof num.toString()); 
// }


// 10. --- JavaScript Object.valueOf() --- 
// The Object.valueOf() method returns the primitive value of the specified object.

// {
//     // create a new Number object with value of 12
//     let num = new Number(12);
//     console.log(num);
//     console.log(num.valueOf());
// }


// 11. --- JavaScript Object.values() ---
//    // The Object.values() method returns an array containing the enumerable values of an object.

// {
//     // array-like object having integers as key
//     const obj = { 65: "A", 66: "B", 67: "C" };

//     // print the enumerable values of obj
//     console.log(Object.values(obj));
// }

// // values() With Object Having Random Key Ordering
// {
//     // object with random key ordering
//     const obj1 = { 42: "a", 22: "b", 71: "c" };

//     // print the enumerable values of obj1
//     console.log(Object.values(obj1));
// }

// JavaScript Object.values() With String
// {
//     const string = "code";

//     // values() with string returns an array of characters
//     console.log(Object.values(string));
// }




// ******************************************************************************* //
                                // practice  : - 
// ******************************************************************************* //


// --- for in loop ---
// {
//     var obj = {
//         fname : "kishan",
//         lname : "bhalala",
//         age : 25,
//         email : "kishanbhalala65@gmail.com"
//     };

//     for(var key in obj) {
//         document.write(obj[key] + "<br>");
//     }
// }


// ----- javascript object in create array and function ----- 
// keyword  =   this. 

// {
//     var a = {
//         fname : 'kishan',
//         lname : 'bhalala',
//         age : 25,
//         email : 'kishanbhalala65@gamil.com',

//         //create array
//         favmovie : ["RRR" , "KGF" , "PUSPA"],

//         //create function
//         fees : function() {
//             return 500;
//         },

//         fullname : function() {
//             return this.fname + " " + this.lname;
//         }
//     }
//     document.write(a.favmovie[1] + "<br>");
//     document.write(a.fees() + "<br>");
//     document.write(a.fullname());
// }