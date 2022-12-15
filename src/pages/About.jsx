import React from 'react'
import AboutArea from '../components/AboutArea'
import Header from '../components/Header'
import Bnavbar from '../components/Bnavbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import BrandArea from '../components/BrandArea'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import CounterArea from '../components/CounterArea'


const Link = styled(NavLink)`
color: white;
text-decoration: none;
font-size: 16px;

&:hover{
  color: #F9004D;
}
&:active{
  color: #F9004D;
}
`

const About = () => {
  return (
    <>
        <Bnavbar/>
        <Header text="About" link= {<Link to='/about' >About</Link>}/>
        <AboutArea/>
        <CounterArea/>
        <Testimonial/>
        <BrandArea/>
        
        <Footer/>
        


    </>
  )
}

export default About
