import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Bnavbar from '../components/Bnavbar'
import { NavLink } from 'react-router-dom'
import BrandArea from '../components/BrandArea'
import Footer from '../components/Footer'
import ContactTop from '../components/ContactTop'
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'


const Link = styled(NavLink)`
color: white;
text-decoration: none;
font-size: 16px;
&:active{
  color: #F9004D;
}

&:hover{
  color: #F9004D;
}

`


const Contact = (props) => {
  return (
   <>
    <Bnavbar/>
    <Header text="Contact" link= {<Link to='/contact' >Contact</Link>}/>
    <ContactTop/>
    <ContactForm/>
    <ContactMap/>
    <BrandArea/>
    <Footer/>
   </>
  )
}

export default Contact
