import React from 'react'
import Login from './pages/Login'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Testimonials from './Components/Testimonials/Testimonials'
import Stats from './Components/Stats/Stats'
import Services from './Components/Services/Services'
import Pricing from './Components/Pricing/Pricing'
import FAQ from './Components/FAQ/FAQ'
import CTA from './Components/CTA/CTA'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Testimonials/>
      <Stats/>
      <Services/>
      <Pricing/>
      <FAQ/>
      <CTA/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
