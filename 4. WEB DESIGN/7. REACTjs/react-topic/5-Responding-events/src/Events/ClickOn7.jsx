import React from "react"

const ButtonAlert = ({onReact , children}) => {
     return(
          <button className='button' onClick={onReact}>{children}</button>
     );
}


const ClickOn7 = () => {

     /* Naming event handler props  */

  return (
    <div>
      <h1 className='text-6xl'>Naming event handler props</h1>
      <ButtonAlert onReact={() => alert("Playing!!!!!")}>Play Games</ButtonAlert>
      
      <ButtonAlert onReact={() => alert("Uploding!!!!!")}>Upload Games</ButtonAlert>
    </div>
  )
}

export default ClickOn7