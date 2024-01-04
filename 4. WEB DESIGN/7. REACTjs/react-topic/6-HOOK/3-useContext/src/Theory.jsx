// what is useContext :-  
// In React, the useContext hook is used to consume data from a React context. Context provides a way to share data between components without having to pass props manually at every level of the component tree.
// React માં, UseContext હૂકનો ઉપયોગ React સંદર્ભમાંથી ડેટાનો ઉપયોગ કરવા માટે થાય છે. સંદર્ભ ઘટક વૃક્ષના દરેક સ્તરે પ્રોપ્સને મેન્યુઅલી પસાર કર્યા વિના ઘટકો વચ્ચે ડેટા શેર કરવાની રીત પ્રદાન કરે છે.

// It allows you to create a global state that can be accessed by any component that needs it, regardless of where it is in the component hierarchy.
// તે તમને એક વૈશ્વિક રાજ્ય બનાવવાની મંજૂરી આપે છે જે કોઈપણ ઘટક દ્વારા ઍક્સેસ કરી શકાય છે જેને તેની જરૂર હોય, પછી ભલે તે ઘટક પદાનુક્રમમાં હોય.

// syntax :- 

// import React, { useContext } from 'react';
// const authContext = useContext(initialValue);

// Using useContext helps inkeeping your component treeclean and concise, as iteliminates the need to passprops through multiple levelsjust to reach a distant componentthat requires the data.It is a powerful tool for managingstate in your React applicationsand making data flow moreefficient.
// useContext નો ઉપયોગ કરવાથી તમારા ઘટકને સ્વચ્છ અને સંક્ષિપ્ત રાખવામાં મદદ મળે છે, કારણ કે ડેટાની જરૂર હોય તેવા દૂરના ઘટક સુધી પહોંચવા માટે બહુવિધ સ્તરોમાંથી પાસપ્રોપ્સની જરૂરિયાતને દૂર કરે છે. તે તમારી પ્રતિક્રિયા એપ્લિકેશનમાં રાજ્યનું સંચાલન કરવા અને ડેટા પ્રવાહને વધુ કાર્યક્ષમ બનાવવા માટે એક શક્તિશાળી સાધન છે.



// What is Prop Drilling ?
// In React, "prop drilling" refers to the process of passing data from a high-level component down to a deep-level component through intermediate components that do not need the data themselves.
// પ્રતિક્રિયામાં, "પ્રોપ ડ્રિલિંગ" એ ઉચ્ચ-સ્તરના ઘટકમાંથી ડેટાને મધ્યવર્તી ઘટકો દ્વારા ઊંડા-સ્તરના ઘટક સુધી પસાર કરવાની પ્રક્રિયાનો સંદર્ભ આપે છે જેને પોતાને ડેટાની જરૂર નથી.

// This can happen when components in a component tree need access to shared data, but they are not direct descendants of each other.
// આ ત્યારે થઈ શકે છે જ્યારે ઘટક વૃક્ષના ઘટકોને વહેંચાયેલ ડેટાની ઍક્સેસની જરૂર હોય, પરંતુ તે એકબીજાના સીધા વંશજ નથી


// Prop Drilling | Process :-

// • App component has the data that GrandchildComponent needs.
// • App passes the data as a prop to ParentComponent.
// • ParentComponent passes the same data as a prop to ChildComponent.
// • ChildComponent finally passes the data as a prop to GrandchildComponent.


