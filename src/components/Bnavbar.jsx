
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from './imges/logo.png'
import {mobile} from '../responsive'

const Link = styled(NavLink)`
text-decoration: none;
font-size: 20px;
color: gray;

&:hover{
  color: #F9004D;
}




`
const Img = styled.img`
width: 100%;
${mobile({ width: "70%",})}

`
const BNav = styled(Navbar)`
position: absolute;
z-index: 10;
width: 100%;
left: 0;
top: 50px;
padding: 0 50px;

`





function Bnavbar() {
  return (
    <>
    {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <BNav key={expand} bg="md-dark" expand="lg" className="mb-3 d-sm-inline">
          <Container fluid>
            <Navbar.Brand><Link to='/'><Img src={logo}/></Link></Navbar.Brand>
            <Navbar.Toggle className='bg-dark toggel' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                  <Nav.Link><Link to='/service'>Service</Link></Nav.Link>
                  <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                  <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </BNav>
        ))}
    </>
  )
}

export default Bnavbar;
