import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'
import Banners from './components/Banners/Banners'
import Banners2 from './components/Banners/Banners2'
import Banners3 from './components/Banners/Banners3'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Menus />
        <Banners />
        <Banners2 />
        <Banners3 />
        <Footer />
      </main>
    </div>
  )
}

export default App
