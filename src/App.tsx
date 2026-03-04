
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from './components/Page2Body'
import { HomeBody } from './components/HomeBody'
import { createContext, useEffect, useState } from 'react'
import { Vans } from './components/Vans'
import { VanDetails } from './components/VanDetails'
import { Dashboard } from './components/hosts/Dashboard'
import { Income } from './components/hosts/Income'
import { Reviews } from './components/hosts/Review'
import { HostNav } from './components/hosts/HostNav'
import { Layout } from './components/Layout/Layout'
import { HostedVans } from './components/hosts/ListedVans'
import { HostedVanDetails } from './components/hosts/HostVanDetails'
import { VanDescription } from './components/hosts/VanDescription'
// import { Description } from './components/hosts/Descri'

export type vansValue = {
  description:string
  id:string
  imageUrl:string
  name:string
  price:number
  type:string
  hostId: string
}

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
          <Routes>
            <Route path='/' element={<Layout />}>

              <Route index element={<HomeBody />} />
              <Route path='about' element={<AboutPage />} />

              <Route path='vans'>
                <Route index element={<Vans />} />
                <Route path=':id' element={<VanDetails />} />
              </Route>
              
              <Route path="host" element={<HostNav />} >
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="review" element={<Reviews />} />
                <Route path="vans" element={<HostedVans />} />

                <Route path="vans/:id" element={<HostedVanDetails />} >
                  <Route index element={<VanDescription />}/>
                  <Route path='images' element={<h2>images goes here</h2>} />
                  <Route path='price' element={<h2>pricing goes here</h2>} />
                </Route>
              
              </Route>
            </Route>

          </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
