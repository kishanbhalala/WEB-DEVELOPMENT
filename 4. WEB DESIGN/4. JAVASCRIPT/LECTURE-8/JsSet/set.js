// ***** JavaScript Sets method ***** 

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// => set ma single j value hoi ....koi pair naa hoi..
// => jya array no use thay tyaa j set no use thay che..



// new Set()	   Creates a new Set
// add()	       Adds a new element to the Set
// delete()	       Removes an element from a Set
// has()	       Returns true if a value exists in the Set
// forEach()	   Invokes a callback for each element in the Set
// values()	       Returns an iterator with all the values in a Set
// size	           Returns the number of elements in a Set


// new Set() method
// Pass an Array to the new Set() constructor:
// {
//     const x = new Set([10, 20, 30, 40]);
//     console.log(x.size);
// }


// {
//     // Create a Set
//     const letters = new Set();

//     // Add Values to the Set
//     letters.add("a");
//     letters.add("b");
//     letters.add("c");

//     console.log(letters);
// }


// add() method
// {
//     const letter = new Set();

//     const a = "a";
//     const b = "b";
//     const c = "c";
//     const d = 1;

//     letter.add(a);
//     letter.add(b);
//     letter.add(c);
//     letter.add(d);

//     console.log(letter.size);
// }


// delete() method 
// {
//     const x = new Set(["a","b","c"]);
//     x.delete("b");
//     console.log(x);
// }


// has() method 
// {
//     const x = new Set(["a","b","c"]);
//     let y = x.has("a");
//     console.log(y);
// }


// values() method 
// The values() method returns a new iterator object containing all the values in a Set:
// {
//     const x = new Set(["a","b","c"]);
//     let y = x.values();
//     console.log(y);
// }