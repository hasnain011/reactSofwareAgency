import React from 'react'
import AboutArea from '../components/AboutArea'
import Bnavbar from '../components/Bnavbar'
import BrandArea from '../components/BrandArea'
import Bslider from '../components/Bslider'
// import Clock from '../components/Clock'
import Footer from '../components/Footer'
import ServiceArea from '../components/ServiceArea'
import Testimonial from '../components/Testimonial'



const Home = () => {
  return (
   <> 

   {/* <Clock/> */}
      <Bnavbar/>
      {/* <Nav/> */}
      {/* <Navbar/> */}
      <Bslider/>
      <AboutArea/>
      <ServiceArea/>
      <BrandArea/>
      <Testimonial/>
      <Footer/>

  
 
     </>
 
  )
}

export default Home
