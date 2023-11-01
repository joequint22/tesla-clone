import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import VehicleDropDown from './components/NavbarDropdown/vehicles'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
   
  return (
    <>
      <div className='flex flex-col justify-between h-screen'>

        <div className='Navbar'>
        <Navbar/>
      
        


        <div className='tracking-wider text-white text-center'>
          <h2 className='text-[2.25rem] font-bold'>Model Y</h2>
          <h3 className='text-[1rem]'>Lease starting at $399/mo*</h3>
        </div>
        </div>

        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
