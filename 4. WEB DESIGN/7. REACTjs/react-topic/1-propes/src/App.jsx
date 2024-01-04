import React from 'react'
import { Propes1 } from './Propes/Propes1'
import Propes2 from './Propes/Propes2'

function App() {
  // let myObj = {
  //   username: "jeegar",
  //   age: 25
  // }
  // let newArr = [1, 2, 3]

  return (
    <>

      {/* Propes1  */}
      {/* <Propes1 text="kishan bhalala" />
      <Propes1 text={{ name: "kishan" }} data="Web developement" /> */}



      {/* propes2 */}

      <div className='flex flex-wrap  h-screen w-full justify-center  items-center sm:w-full sm:flex-wrap md:flex md:w-full md:flex-wrap xl:flex xl:w-full'>

        <Propes2 username="Eagle" 
                 btnTaxt="click me"
                 img="https://images.pexels.com/photos/16453280/pexels-photo-16453280/free-photo-of-wild-eagle-sitting-on-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600" />


        <Propes2 username="Owl"
                 img="https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg?auto=compress&cs=tinysrgb&w=600" />


        <Propes2 username="Falcon"
                 btnTaxt="available"
                 img="https://images.pexels.com/photos/8765765/pexels-photo-8765765.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <Propes2 username="Perrot"
                  btnTaxt="here"
                  img="https://images.pexels.com/photos/14463757/pexels-photo-14463757.jpeg?auto=compress&cs=tinysrgb&w=600" />

      </div>

    </>
  )
}

export default App