import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import VehicleDropDown from './components/NavbarDropdown/VehiclesDropDown'
import Home from './components/Home'
import Footer from './components/Footer'
import Model from './components/Model'

function App() {
   
  return (
    <>
      <div className='flex flex-col justify-between h-screen'>

        <div className='Navbar'>
          <Navbar/>
          <Model />
        </div>

        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
