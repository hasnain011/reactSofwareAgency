import React from 'react'
import styled from 'styled-components'
// import BigLogo from './imges/big-logo.png'
import { NavLink } from 'react-router-dom'

const FooterArea = styled.footer`
box-sizing: border-box;

`
const Wrapper = styled.div`
`
const Row = styled.div`
`
// Left coloumb
const Col1 = styled.div`
background: linear-gradient(to bottom, #F71C0D, #F00B5E);
display: flex;
justify-content: center;
border: 1px solid transparent;
border-radius: 5px;

`
const Left = styled.div`
padding: 60px 30px;
color: white;

`

const Span = styled.span`
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 9px;
`
const H2 = styled.h2`
    font-weight: 900;
    font-size: 80px;
    margin-bottom: 20px;

`
const Btn = styled.button`
letter-spacing: 2px;
box-sizing: border-box;
border: 1px solid #fff;
text-decoration: none;
background-color:transparent;
padding: 12px 33px;
border-radius: 5px;
color: #fff;

   &:hover{
    transform: translateY(-5px);
    transition: 0.3s;
    background-color: #fff;
    cursor: pointer;
    .link{
      color: #CC1944;
    }
    }
`
const Link = styled(NavLink)`
letter-spacing: 2px;
box-sizing: border-box;
font-size: 16px;
text-decoration: none;
color: #fff;
cursor: pointer;
&:hover{
  color: #CC1944;
}

`

// Right Columb
const Col2 = styled.div`
background-color: #1D1E24;
`
const Right = styled.div`
padding: 30px 70px;
`
const RowRight = styled.div`
padding: 60px;

`
const RCol1 = styled.div`

`
const FooterLink = styled.div`
color: #999AA7;
text-align: start;

`
const H4 = styled.h4`
    color: #c6c9d8;
    font-weight: 500;
    margin-bottom: 30px;
    opacity: .75;

`
const Ul = styled.ul`
list-style: none;

line-height: 1.71429;
padding: 0;
margin: 0;

`
const Li= styled.li`




`


const RLink = styled(NavLink)`
cursor: pointer;
font-weight: 400;
font-size: 14px;
&:hover{
  color: #CC1944;
  cursor: pointer;
}

`
const RCol2 = styled.div`
margin-bottom: 70px;

`
const RCol3 = styled.div`


`
const CopyrightText = styled.div`
color: #999AA7;
`
const P = styled.p`
text-align: center;

`








const Footer = () => {
  return (
    <FooterArea>
    <Wrapper>
    <Row className='row align-items-end row--0'>
    <Col1 className='col-lg-6 d-flex flex-1 p-5'>
    <Left className='footer-left'>
    <Span>Ready To Do This</Span>
    <H2>Let's get <br/>to work</H2>
    <Btn><Link className='link' to='/'>CONTACT US</Link></Btn>
    </Left>
    </Col1>
    <Col2 className='col-lg-6'>
    <Right>
      <RowRight className='row'>
        <RCol1 className='col-lg-6 col-sm-6 col-12'>
          <FooterLink className="footer-link">
          <H4>Quick Links</H4>
          <Ul>
            <Li><Link to='/'> </Link>Work</Li>
            <Li><Link to='/'> </Link>About</Li>
            <Li><Link to='/'> </Link>Let's Talk</Li>
          </Ul>

          </FooterLink>
        </RCol1>
        <RCol2 className='col-lg-6 col-sm-6 col-12'>
        <FooterLink className="footer-link">
          <H4>Say Hello</H4>
          <Ul>
            <Li><RLink to='/'> </RLink>admin@example.com</Li>
            <Li><RLink to='/'> </RLink>hr@example.com</Li>
          </Ul>

          </FooterLink>
          </RCol2>
        <RCol3 className='col-lg-12'>
         <CopyrightText>
         <P>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</P>

         </CopyrightText>
        </RCol3>
      </RowRight>
    </Right>

    </Col2>



    </Row>

    </Wrapper>
      
    </FooterArea>
  )
}

export default Footer
