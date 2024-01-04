import React from 'react'
import Navbar from '../Components/Navbar'


const Home = () => {
  return (
    <div>
      <div className='sticky top-0'>
        <Navbar />
      </div>

      <div className='container mx-auto '>

        <div>
          <video src="./src/assets/video.mp4" autoPlay loop></video>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt velit in esse praesentium eos quos aliquid mollitia recusandae alias error deserunt officia tenetur odio soluta laborum corporis facilis, tempora tempore? Possimus voluptatum, asperiores saepe nesciunt praesentium ipsa dolorum, aliquam iure illo voluptates, perferendis autem laborum ipsum obcaecati dolore officia distinctio. Quo ipsum consequatur iusto aut odit doloremque porro assumenda obcaecati odio animi similique consectetur corrupti excepturi et beatae minima consequuntur earum placeat aperiam sequi, qui incidunt voluptas! Dolore voluptatem consequuntur animi quaerat. Quae, laborum veritatis. Quaerat magni sed, quis assumenda corporis iusto cumque, ea error consequatur quod, suscipit alias.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt velit in esse praesentium eos quos aliquid mollitia recusandae alias error deserunt officia tenetur odio soluta laborum corporis facilis, tempora tempore? Possimus voluptatum, asperiores saepe nesciunt praesentium ipsa dolorum, aliquam iure illo voluptates, perferendis autem laborum ipsum obcaecati dolore officia distinctio. Quo ipsum consequatur iusto aut odit doloremque porro assumenda obcaecati odio animi similique consectetur corrupti excepturi et beatae minima consequuntur earum placeat aperiam sequi, qui incidunt voluptas! Dolore voluptatem consequuntur animi quaerat. Quae, laborum veritatis. Quaerat magni sed, quis assumenda corporis iusto cumque, ea error consequatur quod, suscipit alias.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
