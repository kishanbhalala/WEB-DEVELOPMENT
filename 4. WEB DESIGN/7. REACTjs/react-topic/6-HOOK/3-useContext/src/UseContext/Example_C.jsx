import React from 'react'
import { UserContext } from '../App'

const Example_C = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
            user => {
                return <div>user context Exmple_c consumer value {user}</div>
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default Example_C
