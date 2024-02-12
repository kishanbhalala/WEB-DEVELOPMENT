import React, { memo } from 'react'

const ChildCallback = ({Learning,count}) => {
    console.log("child callback");
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildCallback)
