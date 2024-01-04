import React from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {

  const navigate = useNavigate();

  const navTopage1 = () => {
    navigate('/product')
  }
  const navTopage2 = () => {
    navigate('/filter')
  }
  
  return (
    <div>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      <div className='my-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-3 gap-20'>
            <div>
              <img className='h-full object-cover' src="./src/assets/p1.jpg" alt="" />
            </div>
            <div>
              <img className='h-full object-cover ' src="./src/assets/p2.jpg" alt="" />
            </div>
            <div>
              <img className='h-full object-cover' src="./src/assets/p3.jpg" alt="" />
            </div>
          </div>

          <div>
            <p className='p-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt et beatae dicta dolore magnam maxime ratione modi accusamus vitae, numquam exercitationem ullam reiciendis ab nemo harum delectus eveniet? Nisi ratione repellat vero cupiditate deserunt voluptatum inventore minima? Sunt nostrum architecto beatae deleniti ad rerum aliquid pariatur cupiditate ut cum?</p>
          </div>

          <div>
            <ul>
              <li><Link className="link" to="/">Go to Home Page</Link></li>
            </ul>
          </div>

          <div>
            <ul>
              {/* <li><button className='link' onClick={() => navigate('/product')}>Product Pag</button></li>
              <li><button className='link' onClick={() => navigate('/filter')}>Filter Pag</button></li> */}

              <li><button className='link' onClick={() => navTopage1()}>Product Page</button></li>
              <li><button className='link' onClick={() => navTopage2()}>Filter Page</button></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
