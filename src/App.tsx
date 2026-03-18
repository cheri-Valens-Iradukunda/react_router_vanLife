
import { createBrowserRouter, createRoutesFromElements, Navigate, redirect, Route, RouterProvider } from 'react-router-dom'
import { AboutPage } from './components/Page2Body'
import { HomeBody } from './components/HomeBody'
import { loadFunction, Vans } from './components/Vans'
import { LoadVanDetails, VanDetails } from './components/VanDetails'
import { Dashboard } from './components/hosts/Dashboard'
import { Income } from './components/hosts/Income'
import { Reviews } from './components/hosts/Review'
import { HostNav, loader } from './components/hosts/HostNav'
import { Layout } from './components/Layout/Layout'
import { HostedVans, LoadHostedVans } from './components/hosts/ListedVans'
import { HostedVanDetails } from './components/hosts/HostVanDetails'
import { VanDescription } from './components/hosts/hostDetails/VanDescription'
import { Images } from './components/hosts/hostDetails/Images'
import { Prices } from './components/hosts/hostDetails/Prices'
import { PageNotFound } from './components/PageNotFound'
import { GetVans } from './components/Api'
import { Error } from './components/Error'
import { LoadLogin, Login } from './components/Login'
import { RequireAuth } from './components/Layout/utils'




export type vansValue = {
  description:string
  id:string
  imageUrl:string
  name:string
  price:number
  type:string
  hostId: string
}

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    // <Route path='/' element={<Layout />} errorElement={<Error />} >
    <Route path='/' element={<Layout />} >
      <Route index element={<HomeBody />} />
      <Route path='about' element={<AboutPage />} />

      <Route path='vans'>
        <Route 
        index 
        element={<Vans />} 
        loader={loadFunction} 
        
        />
        <Route 
        path=':id' 
        element={<VanDetails />} 
        loader={LoadVanDetails}
        />
      </Route>
      
      <Route path="host" element={<HostNav />}
        loader={RequireAuth}
        errorElement={<Navigate to="//login?message=you must log in to view this page" />}
         >
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="review" element={<Reviews />} />
        <Route 
        path="vans" 
        element={<HostedVans />} 
        loader={LoadHostedVans}
        />

        <Route 
        path="vans/:id" 
        element={<HostedVanDetails />} 
        loader={LoadVanDetails}
        >
          <Route index element={<VanDescription />}/>
          <Route path='images' element={<Images />} />
          <Route path='price' element={<Prices />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} loader={LoadLogin} />
      {/* <Route path='*' element={<PageNotFound /> } /> */}
    </Route>
  ))

  return (
    <div className='md:w-[50vw] max-sm:w-screen sm:w-[80vw] mx-auto bg-white'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
