import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import { Product0, Product1 } from './Pages/Product'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './Pages/Error404'
import User from './Pages/User'
import Contact from './Pages/Contact'
import C1 from './Pages/C1'
import C2 from './Pages/C2'
import C3 from './Pages/C3'
import Filter from './Pages/Filter'
import Login from './Pages/Login'
import ProtectedRoutes from './Pages/ProtectedRoutes'
// import Ragister from './Pages/Ragister'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<ProtectedRoutes Component={Home} />}></Route>
          <Route path='/about' element={<ProtectedRoutes Component={About} />}></Route>
          <Route path='/product' element={

            <div >
              <div className='sticky top-0'>
                <Product0 />
              </div>

              <div className='flex flex-wrap  h-screen w-full justify-center  items-center sm:w-full sm:flex-wrap md:flex md:w-full md:flex-wrap xl:flex xl:w-full'>

                <Product1 username="Eagle"
                  btnTaxt="click me"
                  img="https://images.pexels.com/photos/16453280/pexels-photo-16453280/free-photo-of-wild-eagle-sitting-on-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600" />

                <Product1 username="Owl"
                  img="https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg?auto=compress&cs=tinysrgb&w=600" />

                <Product1 username="Falcon"
                  btnTaxt="available"
                  img="https://images.pexels.com/photos/8765765/pexels-photo-8765765.jpeg?auto=compress&cs=tinysrgb&w=600" />

                <Product1 username="Perrot"
                  btnTaxt="here"
                  img="https://images.pexels.com/photos/14463757/pexels-photo-14463757.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </div>

            </div>
          }></Route>

          {/* useParams hook  */}
          <Route path="/user/:name" element={<User />}></Route>

          {/* useSearchParams hook  */}
          <Route path="/filter" element={<ProtectedRoutes Component={Filter} />}></Route>

          {/* nested routes  */}
          <Route path="/contact/" element={<ProtectedRoutes Component={Contact} />}>
            <Route path="c1" element={<C1 />}></Route>
            <Route path="c2" element={<C2 />}></Route>
            <Route path="c3" element={<C3 />}></Route>
          </Route>

          {/* error page  */}
          <Route path='/*' element={<Error404 />}></Route>

          {/* protected routes  */}
          <Route path='/login' element={<Login />} />

          {/* <Route path='/ragister' element={<Ragister />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
