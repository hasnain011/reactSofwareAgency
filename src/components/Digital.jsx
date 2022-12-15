import React from 'react'
import styled from 'styled-components'
import { DigitalMark } from '../data'

const DigitlArea = styled.div`
padding-top: 120px ;
`
const Container = styled.div`
`
const Row1 = styled.div`
`
const Col = styled.div`
`
const SectionTitle = styled.div`
margin-bottom: 30px;
`
const H2 = styled.h2`
font-weight: 700;
font-size: 54px;
line-height: 1.4074;
color: #1f1f25;
margin: 0 0 15px;
`
const P = styled.p`
font-size: 20px;
line-height: 30px;
color: rgba(29,29,36,.75);
`

// Row 2
const Row2 = styled.div`

`
const Col2 = styled.div`
padding: 30px 35px;
    z-index: 2;
    border-radius: 10px;

    &:hover{
background: linear-gradient(to right, #F71C0D, #F00B5E); 
color: white;
transform: translateY(-5px);
transition: 0.3s;
cursor: pointer;
.icon,.heading, .para{
        color: white;
    }
    }
    
`
const Content = styled.div`


`
const H3 = styled.h3`
margin-bottom: 19px;
    font-weight: 500;

`
const Icon = styled.h3`
    font-size: 54px;
    font-weight: 400;
    margin-bottom: 23px;
    display: inline-flex;
    color: #f9004d;

`
const Digital = (props) => {
  return (
    <DigitlArea>
    <Container className='container'>
        <Row1 className='row'>
        <Col className='col-lg-12'>
        <SectionTitle className='text-center'>
            <H2>{props.heading}</H2>
            <P>There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.</P>
        </SectionTitle>

        </Col>

        </Row1>
        <Row2 className='row'>
        {DigitalMark.map((item)=>(
        <Col2 className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12' key={item.id}>

        <Icon className='icon'>{item.icon}</Icon>
        <Content className='content'>
            <H3 className='heading'>{item.heading}</H3>
            <P className='para'>{item.paragraph}</P>
        </Content>
        </Col2>
        ))}

        </Row2>

    </Container>
      
    </DigitlArea>
  )
}

export default Digital
