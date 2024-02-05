// What is Redux ? :-

// => library for state management.
// => redux is pradictable state container.
// => can share data in any component to any component.

// Redux is a predictable state container for JavaScript apps, most commonly used with libraries like React or Angular for building user interfaces.
// It provides a centralized state management system that helps manage the state of an application in a more predictable & scalable way.
// making it easier to debug & maintain complex state logic.

// Redux JavaScript એપ્લિકેશન્સ માટે અનુમાનિત રાજ્ય કન્ટેનર છે, જેનો ઉપયોગ વપરાશકર્તા ઇન્ટરફેસ બનાવવા માટે પ્રતિક્રિયા અથવા કોણીય જેવી લાઇબ્રેરીઓ સાથે સામાન્ય રીતે થાય છે.
// તે કેન્દ્રિય રાજ્ય વ્યવસ્થાપન સિસ્ટમ પ્રદાન કરે છે જે એપ્લિકેશનની સ્થિતિને વધુ અનુમાનિત અને માપી શકાય તેવી રીતે સંચાલિત કરવામાં મદદ કરે છે.
// જટિલ સ્થિતિ તર્કને ડિબગ અને જાળવવાનું સરળ બનાવે છે.



// Why Should I Use Redux? :-

// Redux can help simplify the state management process, especially when dealing with complex and interconnected components. Here are some reasons why you might want to use Redux in your application:
// Redux રાજ્ય વ્યવસ્થાપન પ્રક્રિયાને સરળ બનાવવામાં મદદ કરી શકે છે, ખાસ કરીને જ્યારે જટિલ અને એકબીજા સાથે જોડાયેલા ઘટકો સાથે કામ કરતી વખતે. અહીં કેટલાક કારણો છે કે તમે તમારી એપ્લિકેશનમાં Redux નો ઉપયોગ કેમ કરવા માંગો છો:

//1. Centralized state management :
// With Redux, you can maintain the state of your entire application in a single store, making it easier to manage and access data across components.
// Redux સાથે, તમે એક જ સ્ટોરમાં તમારી સમગ્ર એપ્લિકેશનની સ્થિતિ જાળવી શકો છો, જેનાથી સમગ્ર ઘટકોમાં ડેટાનું સંચાલન અને ઍક્સેસ કરવાનું સરળ બને છે.

//2. Predictable state updates:
// Redux has a clear flow of data, which means changes to the state can only happen when you create an action and send it through Redux. This makes it easy to understand how your application's data will change in response to user actions.
// Redux પાસે ડેટાનો સ્પષ્ટ પ્રવાહ છે, જેનો અર્થ છે કે રાજ્યમાં ફેરફારો ત્યારે જ થઈ શકે છે જ્યારે તમે કોઈ ક્રિયા બનાવો અને તેને Redux દ્વારા મોકલો. આનાથી તે સમજવું સરળ બને છે કે વપરાશકર્તાની ક્રિયાઓના પ્રતિભાવમાં તમારી એપ્લિકેશનનો ડેટા કેવી રીતે બદલાશે.

//3. Easier debugging:
// With Redux DevTools, you have a clear record of all the changes to your application's state. This makes locating and fixing issues in your code easier, saving you time and effort in the debugging process.
// Redux DevTools સાથે, તમારી પાસે તમારી એપ્લિકેશનની સ્થિતિમાં થયેલા તમામ ફેરફારોનો સ્પષ્ટ રેકોર્ડ છે. આ ડિબગીંગ પ્રક્રિયામાં તમારો સમય અને પ્રયત્ન બચાવીને, તમારા કોડમાં સમસ્યાઓ શોધવા અને ઠીક કરવાનું સરળ બનાવે છે.

//4. Better performance:
// By minimizing the number of state updates and reducing the need for prop drilling, Redux helps improve your application's performance.
// સ્ટેટ અપડેટ્સની સંખ્યા ઘટાડીને અને પ્રોપ ડ્રિલિંગની જરૂરિયાત ઘટાડીને, Redux તમારી એપ્લિકેશનના પ્રદર્શનને સુધારવામાં મદદ કરે છે.


// How Does Redux Work? :-

// As previously mentioned, Redux enables you to maintain a single centralized store that manages the state of your entire application. All components in your application can access this store and update or retrieve data from it as needed.
// અગાઉ ઉલ્લેખ કર્યો છે તેમ, Redux તમને એક કેન્દ્રીયકૃત સ્ટોર જાળવવા માટે સક્ષમ કરે છે જે તમારી સમગ્ર એપ્લિકેશનની સ્થિતિનું સંચાલન કરે છે. તમારી એપ્લિકેશનમાંના તમામ ઘટકો આ સ્ટોરને ઍક્સેસ કરી શકે છે અને જરૂરીયાત મુજબ તેમાંથી ડેટા અપડેટ અથવા પુનઃપ્રાપ્ત કરી શકે છે

// The key components that enable this centralized approach to state management are:

//1. Store
//2. Actions
//3. Dispatch
//4. Reducers


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// => first redux wrapper banavu..tema main file ma import react-redux mathi {Provider} create krii wrapper banavi devuu.
// => pchi store.jsx file banavi devi becuse aakhi application na data store ma rakhvana hoi che..te file ma import createStore 'redux' add kri devu.
// => action,reducer,store,Type ni file banavi devi.
// => application mathi Data action ma , action mathi data reducer ma , reducer mathi data store ma, store mathi data application ma jaay che.

// what is Action :-
// => actions are the plain functions.
// => action no use reactjs mathi redux ma Data send krva mate thay che.
// => action nu kam reactJs mathi data leva ane reducer ne data pass krva.
// => action and reducer ni ander Type key same hovi joie tyre j data share thy ske.

// what is Reducer :-
// => reducer store na Data hoi tene handle kre che.
// => rules :- atlest ek root reducer joie j.
// =>       :- har ek reducer ni ander return statement hovi jaruri che.. and initial data hova jaruri che.
// => aa thumb rule che aani vagr reducer kaam na kre.

// what is saga middleware :-
// => handle async data in redux like APIs Data.
// => here we can write Async oprations like time taking logics and API calls.
// => saga nu kaam async opration hoi jem ke API mathi data kyre aave te khbr na hoi..tena mate saga no use kri te data get kre and action ne retun mokle pchi j reducer ma jaay..