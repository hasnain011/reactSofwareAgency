import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import LogoImg from './imges/logo.png'
import {mobile} from '../responsive'
import {Tablet} from '../responsive'



const Container = styled.div`
position: absolute;
color: white;
z-index: 10;
left: 0;
top: 50px;
display: flex;
justify-content: space-between;
width: 100vw;
`
const Left = styled.div`
margin-left: 70px;
display: flex;
align-items: center;
justify-content: center;

`
const Logo = styled.div`


`
const Img = styled.img`
max-width: 100%;

`
const Right = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 70px;
`
const NavItems = styled.nav`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
& #close{
  display: none;
${Tablet({
  display: 'block',
        position: 'absolute',
        top: '30px',
        left: '30px',
        color: '#222',
        fontSize: '24px',
})}

}

`
const Ul = styled.ul`
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;
${Tablet({
display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: '-300px',
        height: '100vh',
        width: '300px',
        backgroundColor: '#E3E6F3',
        boxShadow: '0 48px 60px rgba(0, 0, 0, 0.1)',
        padding: '80px 0 0 10px',
        transition: '0.3s',

        
})}

`
const List = styled.li`
list-style: none;
padding-left: 20px;
${Tablet({
     marginBottom: '25px'
})}

`
const Link = styled(NavLink)`
color: white;
text-decoration: none;
font-size: 20px;
&:hover{
  color: #F9004D;
}
${mobile({ color: 'yellow'})}

`
const Humburger = styled.div`
display: none;

& .bar{
  color: #1a1a1a;
  font-size: 24px;
  padding-left: 20px;
}
`


    



const Navbar = () => {
  return (
    <>
        <Container>
            <Left>
                <Logo><NavLink to='/'><Img src={LogoImg}/></NavLink></Logo>
            </Left>

            {/* Right Side of Navbar */}
            <Right>
              <NavItems>
              <Ul className='navbar'>
                <List> <Link to='/' >Home</Link></List>
                <List> <Link to='/service' >Service</Link></List>
                <List> <Link to='/about' >About</Link></List>
                <List> <Link to='/contact' >Contact</Link></List>
              </Ul>
              <Link to='/' id='close'><i className="far fa-times"/></Link>
              </NavItems>
          
            </Right>
            <Humburger id='humburger'>
            <i id="bar" className="fas fa-bars"></i>
            </Humburger>
        </Container>
    </>
    
  )
}

export default Navbar
