// what is responding events :- 

// React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.
// પ્રતિક્રિયા તમને તમારા JSX માં ઇવેન્ટ હેન્ડલર્સ ઉમેરવા દે છે. ઇવેન્ટ હેન્ડલર્સ તમારા પોતાના ફંક્શન્સ છે જે ક્રિયાપ્રતિક્રિયાઓના પ્રતિભાવમાં ટ્રિગર થશે જેમ કે ક્લિક કરવું, હોવર કરવું, ફોર્મ ઇનપુટ્સ પર ધ્યાન કેન્દ્રિત કરવું વગેરે.


// passing a function (correct) :-

{/* <button onClick={handleClick}> </button> */ }
{/* <button onClick={() => alert('...')}></button> */}


// calling a function (incorrect) :-

{/* <button onClick={handleClick()}> </button> */ } 
{/* <button onClick={alert('...')}></button> */}
