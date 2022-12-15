import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from './imges/logo.png'

const Link = styled(NavLink)`
color: white;
text-decoration: none;
font-size: 20px;

&:hover{
  color: #F9004D;
}
&:active{
    color: #F9004D;

}

`

const Img = styled.img`
width: 100%;

`
const Navbar = styled.nav`
position: absolute;
z-index: 10;
left: 0;
top: 0;

`

const Nav = () => {
  return (

    <Navbar className="navbar navbar-expand-lg bg-transparent pt-4 ps-5 pe-5 w-100">
  <div className="container-fluid">

    <Link className="navbar-brand " to='/'><Img src={logo}/></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/service'>Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
    
  </div>
</Navbar>



  )
}

export default Nav
