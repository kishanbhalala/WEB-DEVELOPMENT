// what is useReducer :-

// The useReducer Hook is similar to theuseState Hook.
// useReducer is a built-in hook thatprovides an alternative way tomanage state in functionalcomponents.
// It is particularly useful when dealingwith complex state logic or when thestate transitions depend on previousstates. 
// The useReducer hook followsthe reducer pattern, similar to howRedux manages state using reducers.

// યુઝરેડ્યુસર હૂક યુઝસ્ટેટ હૂક જેવું જ છે.
// useReducer એ બિલ્ટ-ઇન હૂક છે જે કાર્યાત્મક ઘટકોમાં સ્થિતિનું સંચાલન કરવાની વૈકલ્પિક રીત પ્રદાન કરે છે.
// જટિલ રાજ્ય તર્ક સાથે કામ કરતી વખતે અથવા જ્યારે રાજ્યના સંક્રમણો અગાઉના રાજ્યો પર આધારિત હોય ત્યારે તે ખાસ કરીને ઉપયોગી છે.
// યુઝરેડ્યુસર હૂક રીડ્યુસર પેટર્નને અનુસરે છે, જે રીતે રેડ્યુક્સ રીડ્યુસરનો ઉપયોગ કરીને સ્થિતિનું સંચાલન કરે છે.


// syntax :- 

// useReducer(<reducer>, <initialState>)


// useReducer) | Returns :-

// const [state, dispatch] = useReducer

// The useReducer Hook returns the current state and a dispatch method.
// • state: The current state value returned by useReducer
// • સ્થિતિ: useReducer દ્વારા પરત કરાયેલ વર્તમાન સ્થિતિ મૂલ્ય

// • dispatch: A function that allows you to send actions to the reducer. It takes an action object as an argument and triggers the state update.
// • ડિસ્પેચ: એક કાર્ય કે જે તમને રીડ્યુસરને ક્રિયાઓ મોકલવા માટે પરવાનગી આપે છે. તે દલીલ તરીકે એક્શન ઑબ્જેક્ટ લે છે અને સ્ટેટ અપડેટને ટ્રિગર કરે છે.

// When you call dispatch, you pass an action object that describes the type of action to be performed along with any additional data needed to update the state. The reducer then processes the action and returns a new state based on the current state and the action.
// જ્યારે તમે ડિસ્પેચને કૉલ કરો છો, ત્યારે તમે એક ક્રિયા ઑબ્જેક્ટ પસાર કરો છો જે રાજ્યને અપડેટ કરવા માટે જરૂરી કોઈપણ વધારાના ડેટા સાથે કરવામાં આવનાર ક્રિયાના પ્રકારનું વર્ણન કરે છે. રીડ્યુસર પછી ક્રિયા પર પ્રક્રિયા કરે છે અને વર્તમાન સ્થિતિ અને ક્રિયાના આધારે નવી સ્થિતિ પરત કરે છે.


// Why useReducer ?

// • Complex state management with multiple variables and actions.
// • State transitions depend on previous states.
// • Centralized and predictable state updates using the reducer pattern.
// • Avoid prop drilling by dispatching actions from any component level.
// • Performance optimization with memoized reducers.
// • Handling middleware and side effects.
// • Better testability due to pure reducer functions.

// • બહુવિધ ચલો અને ક્રિયાઓ સાથે જટિલ રાજ્ય વ્યવસ્થાપન.
// • રાજ્ય સંક્રમણો અગાઉના રાજ્યો પર આધાર રાખે છે.
// • રીડ્યુસર પેટર્નનો ઉપયોગ કરીને કેન્દ્રિય અને અનુમાનિત રાજ્ય અપડેટ્સ.
// • કોઈપણ ઘટક સ્તરથી ક્રિયાઓ મોકલીને પ્રોપ ડ્રિલિંગ ટાળો.
// • મેમોઈઝ્ડ રીડ્યુસર સાથે પ્રદર્શન ઓપ્ટિમાઇઝેશન.
// • મિડલવેર અને આડ અસરોને સંભાળવી.
// • શુદ્ધ રીડ્યુસર કાર્યોને લીધે વધુ સારી પરીક્ષણક્ષમતા.


// function ni bahar state define kriye tyre error aave :-
/*  Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app */