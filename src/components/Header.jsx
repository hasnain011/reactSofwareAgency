import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const MainHead = styled.div`
background-color: #1E1F25;
height: 75vh;
`
const Container = styled.div`
`
const Row = styled.div`
`
const Col = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 220px;

`
const Content = styled.div`
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;



`
const Heading = styled.h2`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 60px;
font-weight: bold;
background: linear-gradient(to right, #F71C0D, #F00B5E); 
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
`
const Ul = styled.ul`
padding: 0;
margin: 0;
display: flex;
align-items: center;
justify-content: center;
`
const List = styled.li`
list-style: none;
padding-left: 10px;
color: white;
display: flex;
`
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

const Header = (props) => {
  return (
    <MainHead>
    <Container>
        <Row>
            <Col className='col-lg-12'>
                <Content className="">
                    <Heading>{props.text}</Heading>
               
                    <Ul>
                    <List> <Link to='/' >Home</Link></List>
                    <List>/</List>
                    <List> {props.link}</List>
                    </Ul>
                  
                </Content>
            </Col>
        </Row>
    </Container>
      
    </MainHead>
  )
}

export default Header
