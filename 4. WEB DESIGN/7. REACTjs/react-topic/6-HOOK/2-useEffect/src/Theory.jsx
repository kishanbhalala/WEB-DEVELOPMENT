// what is useEffect :-

// in react, useEffect is one of the most essential hooks used to manage side effects in functional components.
// પ્રતિક્રિયામાં, useEffect એ સૌથી આવશ્યક છે કાર્યાત્મક ઘટકોમાં આડઅસરોનું સંચાલન કરવા માટે ઉપયોગમાં લેવાતા હુક્સ.

// side effects are operations that occur outside of the components's render cycle, such as data fetching, subscriptions, or manually interacting with the DOM.
// આડ અસરો એ ઓપરેશન્સ છે જે ઘટકોના રેન્ડર ચક્રની બહાર થાય છે, જેમ કે ડેટા લાવવું, સબ્સ્ક્રિપ્શન્સ અથવા DOM સાથે મેન્યુઅલી ક્રિયાપ્રતિક્રિયા કરવી.

// the useEffect hook allows you to perform these side effects after the component has rendered.
// યુઝઇફેક્ટ હૂક તમને ઘટક રેન્ડર થયા પછી આ આડઅસરો કરવા માટે પરવાનગી આપે છે.


// syntax :-
// useEffect accepts two arguments. the second argument is optional.

// useEffect(<function>, <dependency>)

// -> the first argument - of useEffect is the effect function. this function is called after the component has rendered, and its where you place the code for your side effect.
//  પ્રથમ દલીલ - useEffect ની અસર ફંક્શન છે. આ ફંક્શનને કમ્પોનન્ટ રેન્ડર થયા પછી કહેવામાં આવે છે, અને જ્યાં તમે તમારી આડ અસર માટે કોડ મૂકો છો.
// -> it can be an asynchronous function,and you can perform any asynchronous operations like data fetching inside it.
// તે એક અસુમેળ કાર્ય હોઈ શકે છે, અને તમે તેની અંદર ડેટા લાવવા જેવી કોઈપણ અસુમેળ કામગીરી કરી શકો છો.

// -> the second argument - of useeffect is an array of dependencies. this array tells react when to re-run the effect. and its optuonal 
// બીજી દલીલ - ઉપયોગની અસર એ અવલંબનનો એરે છે. આ એરે અસરને ફરીથી ચલાવવા માટે ક્યારે પ્રતિક્રિયા આપે છે તે જણાવે છે.અને તે વૈકલ્પિક  છે.
// -> you can include to control when the effect should be executed.
// અસર ક્યારે અમલમાં મૂકવી જોઈએ તે નિયંત્રિત કરવા માટે તમે શામેલ કરી શકો છો.


// common use cases for useeffect :- 

// data fetching:
// DOM manipulation:
// subscriptions 
// timers and intervals:
// cleanup tasks


// useEffect Based on Dependency :-
//  -> if the dependency array is empty.([]), the effect will only run once, after the initial render.
//  જો ડિપેન્ડન્સી એરે ખાલી હોય.([]), અસર માત્ર એક જ વાર ચાલશે, પ્રારંભિક રેન્ડર પછી.

//  -> if the dependency array is not provided, the effect will run after every render of the component.
//  જો ડિપેન્ડન્સી એરે પૂરી પાડવામાં આવેલ નથી, તો અસર ઘટકના દરેક રેન્ડર પછી ચાલશે.

//  -> if the dependency array contains variables,  the effect will only be re-executed when any of those variables Change.
//  જો ડિપેન્ડન્સી એરેમાં વેરીએબલ હોય, તો અસર માત્ર ત્યારે જ ફરીથી એક્ઝિક્યુટ કરવામાં આવશે જ્યારે તેમાંથી કોઈપણ ચલ બદલાશે.



// useEffect Clean-up Function :-

// useEffect (<function>,<dependency>)
// Function Return

// The clean-up function is optional and  is used to perform any necessary clean-up or resource disposal when the component unmounts or before the next effect runs (depending on the dependencies specified in the dependency array).
// ક્લીન-અપ ફંક્શન વૈકલ્પિક છે અને જ્યારે ઘટક અનમાઉન્ટ થાય ત્યારે અથવા આગલી અસર ચાલે તે પહેલાં કોઈપણ જરૂરી ક્લીન-અપ અથવા સંસાધન નિકાલ કરવા માટે વપરાય છે (નિર્ભરતા એરેમાં ઉલ્લેખિત અવલંબન પર આધાર રાખીને).

// Example: for setinterval) function using clearinterval() to clear