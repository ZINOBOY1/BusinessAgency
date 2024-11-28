import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App