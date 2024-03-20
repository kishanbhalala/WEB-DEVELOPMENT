import React, { useState } from 'react'

const SelectGetValue = () => {

    const [isdata,setIsData] = useState()

  return (
    <div>
        <div>
            <select value={isdata} onChange={(e) => setIsData(e.target.value)}>
                <option>apple</option>
                <option>banana</option>
                <option>orange</option>
            </select>

            <h1>selection : {isdata}</h1>
        </div>
    </div>
  )
}

export default SelectGetValue

// import React, { useState } from "react";

// const SelectGetValue = () => {
//   const [isdata, setIsData] = useState();
//   return (
//     <div>
//       <select onChange={(e) => setIsData(e.target.value)}>
//         <option>red</option>
//         <option>blue</option>
//         <option>green</option>
//       </select> 

//       <h1 style={{backgroundColor:isdata,height:"100vh"}}></h1>
//     </div>
//   );
// };

// export default SelectGetValue;
