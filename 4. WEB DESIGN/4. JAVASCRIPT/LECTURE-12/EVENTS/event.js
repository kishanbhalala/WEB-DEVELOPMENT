/*  JavaScript HTML DOM Events */

// DOM (Document Object Model) Events are a signal that something has occurred, or is occurring, and can be triggered by user interactions or by the browser.
// DOM (દસ્તાવેજ ઑબ્જેક્ટ મોડલ) ઇવેન્ટ્સ એ સંકેત છે કે કંઈક થયું છે, અથવા થઈ રહ્યું છે, અને વપરાશકર્તાની ક્રિયાપ્રતિક્રિયાઓ અથવા બ્રાઉઝર દ્વારા ટ્રિગર થઈ શકે છે.


// *** javascript Eventhandler *** :-/
// =>  js ma  function banavama aave che and html ma event call (onclick) karavi devama aave che tene eventhandler khe che.

// function message() {
//     alert("i am kishan bhalala")
// }
// function dateshow() {
//     document.getElementById("date").innerHTML = Date();
// }
// function uppercase() {
//     const change = document.getElementById("fname");
//     change.value = change.value.toUpperCase();
// }
// function red(one) {
//     one.style.color = "red";
// }

// {
//     function Down(obj) {
//         obj.style.backgroundColor = "yellow";
//         obj.innerHTML = "release me";
//     }

//     function Up(obj) {
//         obj.style.backgroundColor="blue";
//         obj.innerHTML="Thank You";
//       }
// }


/* ** JavaScript addEventListener() ** */
// =>  element capture kri... bdhu j javascript ma j krvama aave che... tene addEventListener khe che

// {
//     const x = document.getElementById("clickIT");
//     const y = document.getElementById("hoverPara");

//     x.addEventListener("click" , RespondClick);
//     y.addEventListener("mouseover",RespondMouseOver);
//     y.addEventListener("mouseout", RespondMouseOut);

//     function RespondMouseOver() {
//         document.getElementById("effect").innerHTML +=
//                    "MouseOver Event" + "<br>";
//     }

//     function RespondMouseOut() {
//         document.getElementById("effect").innerHTML +=
//                   "MouseOut Event" + "<br>";
//     }

//     function RespondClick() {
//         document.getElementById("effect").innerHTML +=
//                   "Click Event" + "<br>";
//     }
// }



//--------------------------------//
// PRACTICE //
//--------------------------------//

// --- event listener registration ---  :-

// {
//     const button = document.getElementById('myButton');
//     button.addEventListener('click', function () {
//         alert('You clicked the Button!')
//     })
// }

// --- event object --- :-

// {
//     const button = document.getElementById('myButton');
//     button.addEventListener('click', function(event) {
//         console.log('button clicked', event.target);
//     })
// }

// --- event Types ---  :-
// {
//     const element = document.getElementById('myButton');
//     element.addEventListener('mouseover',function(){
//         console.log('you are over me now');
//     })
// }

// {
//     let nameInput = document.getElementById('nameInput');

//     nameInput.addEventListener('keydown', (e) => {
//         console.log('key',e.key);
//     })
// }

// --- bubbling vs capture ---  :-
// {
//     const box1 = document.getElementById('box-1');
//     box1.addEventListener('click', () => {
//         console.log('click box-1');
//     })

//     const container = document.getElementById('container');
//     container.addEventListener('click', () => {
//         console.log("click container");
//     }, true)
// }



//--------------------------------//
// EVENTS //
//--------------------------------//

// Mouse events :-

// Event Performed   =  Event Performed   =    Description

// click	               onclick	          When mouse click on an element
// mouseover	           onmouseover	      When the cursor of the mouse comes over the element
// mouseout	               onmouseout	      When the cursor of the mouse leaves an element
// mousedown	           onmousedown	      When the mouse button is pressed over the element
// mouseup	               onmouseup	      When the mouse button is released over the element
// mousemove	           onmousemove	      When the mouse movement takes place.



// Keyboard events :-

// Keydown & Keyup	         onkeydown & onkeyup	   When the user press and then release the key



// Form events :-

// focus	                onfocus	         When the user focuses on an element
// submit	                onsubmit	     When the user submits the form
// blur	                    onblur	         When the focus is away from a form element
// change	                ochange	         When the user modifies or changes the value of a form element


// Window/Document events :-

// load	                  onload	         When the browser finishes the loading of the page
// unload	              onunload	         When the visitor leaves the current webpage, the browser unloads it
// resize	              onresize	         When the visitor resizes the window of the browser