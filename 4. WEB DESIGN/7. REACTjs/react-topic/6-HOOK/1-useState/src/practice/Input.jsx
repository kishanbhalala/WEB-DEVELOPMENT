
// input type text value set diffrent name <lable> 


// import React from 'react'
// import { useState } from 'react';

// const Input = () => {

//   const [inputValue, setInputValue] = useState('');
//   const [labels, setLabels] = useState([]);

//   const change = (e) => {
//     setInputValue(e.target.value);
//   };

//   const save = () => {
//     if (inputValue) {
//       const newLabels = [...labels, ` ${inputValue}`];
//       setLabels(newLabels);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <label>Input Value: </label>
//       <input type="text" value={inputValue} onChange={change} className='border border-gray-700 mr-2'/>
//       <button className='bg-gray-500 p-1' onClick={save}>Save Label</button>

//       <div>
//         <h2>Stored Labels:</h2>
//         <ul>
//           {labels.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Input






import React, { useState } from 'react'

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="myInput">enter value :- </label>
      <input type="text"  value={inputValue} onChange={handleInputChange} className='border border-gray-800'/>
      <p className='mt-5'>store the Lable: {inputValue}</p>
    </div>
  );
}

export default Input



