// Shallow Copy :-

// A shallow copy is a copy that only goes one level deep. In other words, it copies the object and all its properties, but any nested objects or arrays will still reference the same memory location as the original object. 
// It means that if you make changes to the nested object, it will also affect the original object, as well as the copied object.
// છીછરી નકલ એ એક નકલ છે જે માત્ર એક સ્તરની ઊંડી જાય છે. બીજા શબ્દોમાં કહીએ તો, તે ઑબ્જેક્ટ અને તેના તમામ ગુણધર્મોની નકલ કરે છે, પરંતુ કોઈપણ નેસ્ટેડ ઑબ્જેક્ટ અથવા એરે હજી પણ મૂળ ઑબ્જેક્ટ તરીકે સમાન મેમરી સ્થાનનો સંદર્ભ આપશે.
// તેનો અર્થ એ છે કે જો તમે નેસ્ટેડ ઑબ્જેક્ટમાં ફેરફાર કરો છો, તો તે મૂળ ઑબ્જેક્ટની સાથે કૉપિ કરેલા ઑબ્જેક્ટને પણ અસર કરશે.

// example :-
{
    const firstPerson = {
        name: "kishan",
        age: 25,
    }
    const secondPerson = firstPerson;

    secondPerson.age = 27;

    console.log(firstPerson.age);     // 27
    console.log(secondPerson.age);     // 27
}


// Deep Copy :-

// A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects or arrays. 
// It means that if you make changes to the copied object or any of its nested objects or arrays, it will not affect the original object.
// ડીપ કોપી એ એક નકલ છે જે તેના તમામ પ્રોપર્ટીઝ અને નેસ્ટેડ ઓબ્જેક્ટો અથવા એરે માટે નવા મેમરી સ્થાનો સાથે નવો ઑબ્જેક્ટ બનાવે છે.
// તેનો અર્થ એ છે કે જો તમે કૉપિ કરેલ ઑબ્જેક્ટ અથવા તેના કોઈપણ નેસ્ટેડ ઑબ્જેક્ટ અથવા એરેમાં ફેરફાર કરો છો, તો તે મૂળ ઑબ્જેક્ટને અસર કરશે નહીં.

// example :-
{
    const firstPerson = {
        name: "kishan",
        age: 25,
    }
    const secondPerson = { ...firstPerson };

    secondPerson.age = 27;

    console.log(firstPerson.age);    //  25
    console.log(secondPerson.age);    //  27
}