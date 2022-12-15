import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Bnavbar from '../components/Bnavbar'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Digital from '../components/Digital'


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




const Service = () => {
  return (
    <>
    <Bnavbar/>
    <Header text="Service" link= {<Link to='/service' >Service</Link>}/>
    <Digital heading="Digital Marketing"/>
    <Digital heading="Strategy"/>
    <Digital heading="Creative Agency"/>
    <Digital heading="Development"/>
    <Footer/>
  
    
    </>
  )
}

export default Service
