// what is useRef ?

// The useRef Hook allows you to persist values between renders.
// યુઝરરેફ હૂક તમને રેન્ડરો વચ્ચેના મૂલ્યોને ચાલુ રાખવા માટે પરવાનગી આપે છે.

// It can be used to store a mutable value that does not cause a re-render when updated.
// તેનો ઉપયોગ પરિવર્તનશીલ મૂલ્યને સંગ્રહિત કરવા માટે થઈ શકે છે જે અપડેટ થવા પર ફરીથી રેન્ડર કરતું નથી.

// It can be used to access a DOM element directly.
// તેનો ઉપયોગ DOM ઘટકને સીધો ઍક્સેસ કરવા માટે થઈ શકે છે.

// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
// જો અમે યુઝસ્ટેટ હૂકનો ઉપયોગ કરીને અમારી એપ્લિકેશન કેટલી વખત રેન્ડર કરે છે તે ગણતરી કરવાનો પ્રયાસ કરીએ, તો અમે અનંત લૂપમાં ફસાઈ જઈશું કારણ કે આ હૂક પોતે જ ફરીથી રેન્ડર કરે છે. આને અવગણવા માટે, અમે યુઝરરેફ હૂકનો ઉપયોગ કરી શકીએ છીએ.

// useRef() only returns one item. It returns an Object called current.
// useRef() માત્ર એક આઇટમ પરત કરે છે. તે વર્તમાન કહેવાય પદાર્થ પરત કરે છે.

// When we initialize useRef we set the initial value: useRef(0).
// જ્યારે આપણે userRef ને પ્રારંભ કરીએ છીએ ત્યારે અમે પ્રારંભિક મૂલ્ય સેટ કરીએ છીએ: userRef(0).



// useRef() | Syntax :-

// // Create a useRef instance
// const myRef = useRef(initialValue);
// // Access and modify the reference
// myRef. current = newValue;

// • myRef is the object returned by the useRef hook.
// • myRef.current is the property you  can access and modify. This  property holds the value you  assigned to it.
// • You can read or modify myRef.current as needed within your component.


// Remember :- 
// Remember that changes to the current property of a useRef object do not trigger re-renders in your component.

// It's commonly used for :-
// • interactions with the DOM,
// • storing previous values, or
// • holding mutable values that don't impact the rendering of your component.




