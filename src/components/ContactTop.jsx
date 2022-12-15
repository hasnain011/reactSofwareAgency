import React from 'react'
import styled from 'styled-components'
import { ContactInfo } from '../data'

const ContactArea = styled.div`

`
const Container = styled.div`

`
const Row = styled.div`

`
const Col = styled.div`

`
const Address = styled.div`
    margin-top: 30px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    background: #fff;
    padding: 54px 40px 50px;

`
const Icon = styled.div`
text-align: left;
.fa-solid{
    border: 1px solid #ebebeb;
    width: 78px;
    height: 78px;
    color: #f9004d;
    line-height: 73px;
    text-align: center;
    border-radius: 100%;
    background: #fff;
    font-size: 36px;
    margin-bottom: 10px;
  
}

`
const Inner = styled.div`

`
const H4 = styled.h4`
font-size: 18px;
    font-weight: 700;
    color: #1f1f25;

`
const P = styled.p`
margin: 0;

`

const ContactTop = () => {
  return (
    <ContactArea>
    <Container className='container'>
        <Row className='row'>
        {ContactInfo.map((item)=>(
        <Col className='col-lg-4 col-md-6 col-sm-6' key={item.id}>
       
        <Address >
            <Icon>{item.icon}</Icon>
            <Inner>
                <H4>{item.heading}</H4>
                <P>{item.p1}</P>
                <P>{item.p2}</P>
            </Inner>
        </Address>
        </Col>
        ))}

        </Row>
    </Container>
      
    </ContactArea>
  )
}

export default ContactTop
