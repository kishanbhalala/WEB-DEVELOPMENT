// What is Hooks? :-

// In React, "hooks" are functions that allow you to use state & other React features (life cycle methods) in functional components.
// They were introduced in React version 16.8 and provide a more concise and reusable way to manage state and side effects compared to class components.
// class components are generally no longer needed. (no plans to remove)

// પ્રતિક્રિયામાં, "હુક્સ" એ એવા કાર્યો છે જે તમને કાર્યાત્મક ઘટકોમાં રાજ્ય અને અન્ય પ્રતિક્રિયા સુવિધાઓ (જીવન ચક્ર પદ્ધતિઓ) નો ઉપયોગ કરવાની મંજૂરી આપે છે.
// તેઓ પ્રતિક્રિયા સંસ્કરણ 16.8 માં રજૂ કરવામાં આવ્યા હતા અને વર્ગ ઘટકોની તુલનામાં સ્થિતિ અને આડઅસરોનું સંચાલન કરવા માટે વધુ સંક્ષિપ્ત અને ફરીથી વાપરી શકાય તેવી રીત પ્રદાન કરે છે.
// વર્ગ ઘટકો સામાન્ય રીતે હવે જરૂરી નથી. (દૂર કરવાની કોઈ યોજના નથી)

// -> functional components ni ander direct State use naa kri sko...tena mate hooks ni jarur pde. 


// Hooks Rules :-

// • You must import Hooks from react.
// • Hooks can only be called inside React function components. (Not in class components)
// • Hooks can only be called at the top level of a component.
// • Hooks cannot be conditional.


// List Of React Hooks :-

// l. useState  :-  is used to add state to functional components in React. It returns an array with two elements: the current state value and a function that allows you to update it.
// પ્રતિક્રિયામાં કાર્યાત્મક ઘટકોમાં રાજ્ય ઉમેરવા માટે વપરાય છે. તે બે ઘટકો સાથે એરે આપે છે: વર્તમાન સ્થિતિ મૂલ્ય અને એક કાર્ય જે તમને તેને અપડેટ કરવાની મંજૂરી આપે છે.
// -> const [state, setState] = useState(initialState);


// 2. useEffect :- is used for side effects in functional components. It allows you to perform actions (like data fetching, subscriptions, manual DOM manipulations) after the component has rendered.
// કાર્યાત્મક ઘટકોમાં આડઅસરો માટે વપરાય છે. ઘટક રેન્ડર થયા પછી તે તમને ક્રિયાઓ (જેમ કે ડેટા ફેચિંગ, સબ્સ્ક્રિપ્શન્સ, મેન્યુઅલ DOM મેનિપ્યુલેશન્સ) કરવા દે છે.
// -> useEffect(() => {
//      return () => {
//   };
// }, [dependencies]);


// 3. useContext :-  is used to consume values from a React context. It allows you to subscribe to a context within a functional component.
// -> પ્રતિક્રિયા સંદર્ભમાંથી મૂલ્યોનો ઉપયોગ કરવા માટે વપરાય છે. તે તમને કાર્યાત્મક ઘટકની અંદરના સંદર્ભમાં સબ્સ્ક્રાઇબ કરવાની મંજૂરી આપે છે.
// -> const contextValue = useContext(MyContext);


// 4. useCallback :-  is used to memoize functions, preventing unnecessary re-renders in child components that receive these functions as props.
// -> વિધેયોને યાદ કરવા માટે વપરાય છે, બાળ ઘટકોમાં બિનજરૂરી પુનઃપ્રદર્શન અટકાવવા કે જે આ કાર્યોને પ્રોપ્સ તરીકે મેળવે છે.
// -> const memoizedCallback = useCallback(() => {
//    }, [dependencies]);


// 5. useMemo :- is used to memoize values, preventing unnecessary calculations or expensive operations on every render.
//  -> increse the performance of react App 
// -> દરેક રેન્ડર પર બિનજરૂરી ગણતરીઓ અથવા ખર્ચાળ કામગીરી અટકાવવા, મૂલ્યોને યાદ કરવા માટે વપરાય છે. 
// -> const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


// 6. useReducer :-  is an alternative to useState for managing more complex state logic. It takes a reducer function and an initial state and returns the current state and a dispatch function.
// -> વધુ જટિલ સ્થિતિના તર્કનું સંચાલન કરવા માટે રાજ્યનો ઉપયોગ કરવાનો વિકલ્પ છે. તે રીડ્યુસર ફંક્શન અને પ્રારંભિક સ્થિતિ લે છે અને વર્તમાન સ્થિતિ અને ડિસ્પેચ ફંક્શન પરત કરે છે.
// -> const [state, dispatch] = useReducer(reducer, initialState);



// 7. useRef :-  is used to create mutable object references that persist across renders. It's commonly used to access and interact with the DOM.
// -> મ્યુટેબલ ઑબ્જેક્ટ સંદર્ભો બનાવવા માટે વપરાય છે જે રેન્ડરોમાં ચાલુ રહે છે. તેનો ઉપયોગ સામાન્ય રીતે DOM ને ઍક્સેસ કરવા અને તેની સાથે ક્રિયાપ્રતિક્રિયા કરવા માટે થાય છે.
// -> const myRef = useRef(initialValue);

// 8. uselmperativeHandle :-  customizes the instance value that is exposed when using React.forwardRef. It allows you to expose specific functions or values from a child component's imperative API.
// -> React.forwardRef નો ઉપયોગ કરતી વખતે ખુલ્લી થયેલ દાખલાની કિંમતને કસ્ટમાઇઝ કરે છે. તે તમને બાળ ઘટકના અનિવાર્ય API માંથી ચોક્કસ કાર્યો અથવા મૂલ્યોને ઉજાગર કરવાની મંજૂરી આપે છે.
// -> useImperativeHandle(ref, () => ({
//     exposedFunction,
//   }), [dependencies]);


// 9. useDebugValue :-  is used to display a label for custom hooks in React DevTools. It doesn't affect the component itself but can provide helpful information during development.
// -> React DevTools માં કસ્ટમ હુક્સ માટે લેબલ પ્રદર્શિત કરવા માટે વપરાય છે. તે ઘટકને અસર કરતું નથી પરંતુ વિકાસ દરમિયાન મદદરૂપ માહિતી પ્રદાન કરી શકે છે.
// -> useDebugValue(value);


// 10. useLayoutEffect :-   is similar to useEffect, but it fires synchronously after all DOM mutations. It's often used for tasks that require accurate measurement of the DOM.
// -> ઇફેક્ટના ઉપયોગ જેવું જ છે, પરંતુ તે તમામ DOM પરિવર્તનો પછી સિંક્રનસ રીતે ફાયર થાય છે. તે ઘણીવાર એવા કાર્યો માટે ઉપયોગમાં લેવાય છે કે જેને DOM ના ચોક્કસ માપનની જરૂર હોય.
// -> useLayoutEffect(() => {
//     return () => {
//     };
//   }, [dependencies]);
  

//  useld
//  useSyncExternalStrore
//  useDeferredValue
//  uselnsertionEffect
//  useTransition§