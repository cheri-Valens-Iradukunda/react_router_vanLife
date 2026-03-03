import { Footer } from './components/Footer'
// import { HomeBody } from './components/HomeBody'
import { Nav } from './components/nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from './components/Page2Body'
import { HomeBody } from './components/HomeBody'
import { createContext, useEffect, useState } from 'react'
import { Vans } from './components/Vans'
import { VanDetails } from './components/VanDetails'

// type vansValue = {
//   description:string
//   id:string
//   imageUrl:string
//   name:string
//   price:number
//   type:string
// }

export const Context = createContext([]);

function App() {
  const [vans,setVans] = useState([])

  async function fetchUsers(){
    await fetch("/api/vans").then(res=>res.json()).then(res=>setVans(res.vans))

  }

  useEffect(()=>{
    fetchUsers()

  },[])

  return (
    <div className='md:w-[50vw] max-sm:w-screen sm:w-[80vw] mx-auto bg-white'>
      <Context.Provider value={vans}>
      <BrowserRouter>
        <Nav />
          <Routes>
              <Route path='/' element={<HomeBody />} />
              <Route path='/vans' element={<Vans />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/vans/:id' element={<VanDetails />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
