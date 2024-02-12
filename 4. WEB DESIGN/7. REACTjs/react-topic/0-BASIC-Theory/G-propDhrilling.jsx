//1. What is Prop Drilling?

// In React, "prop drilling" refers to the process of passing data from a high-level component down to a deep-level component through intermediate components that do not need the data themselves.
// This can happen when components in a component tree need access to shared data, but they are not direct descendants of each other.
// પ્રતિક્રિયામાં, "પ્રોપ ડ્રિલિંગ" એ ઉચ્ચ-સ્તરના ઘટકમાંથી ડેટાને મધ્યવર્તી ઘટકો દ્વારા ઊંડા-સ્તરના ઘટક સુધી પસાર કરવાની પ્રક્રિયાનો સંદર્ભ આપે છે જેને પોતાને ડેટાની જરૂર નથી.
// આ ત્યારે થઈ શકે છે જ્યારે ઘટક વૃક્ષના ઘટકોને વહેંચાયેલ ડેટાની ઍક્સેસની જરૂર હોય, પરંતુ તે એકબીજાના સીધા વંશજ નથી.


// Prop Drilling | Process :- 

// • App component has the data t GrandchildComponent needs.
// • App passes the data as a prop to ParentComponent.
// • ParentComponent passes the same data as a prop to ChildComponent.
// • ChildComponent finally passes the data as a prop to GrandchildComponent.


//2. Whats Is HOC? :- 

// In React, a Higher-Order Component (HOC) is a function that takes a component as an input and returns a new enhanced component as output.
// It's like a special function that can make your components more powerful and add extra functionality to them.
// રિએક્ટમાં, હાયર-ઓર્ડર કમ્પોનન્ટ (HOC) એ એક ફંક્શન છે જે એક ઘટકને ઇનપુટ તરીકે લે છે અને આઉટપુટ તરીકે નવા ઉન્નત ઘટક પરત કરે છે.
// તે એક વિશિષ્ટ કાર્ય જેવું છે જે તમારા ઘટકોને વધુ શક્તિશાળી બનાવી શકે છે અને તેમાં વધારાની કાર્યક્ષમતા ઉમેરી શકે છે.

// const EnhancedComponent = withExtraFunctionality(OriginalComponent);
// const IronMan = withSuit(TonyStark)