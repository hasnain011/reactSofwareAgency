import React from 'react'
import styled from 'styled-components'
import img1 from './imges/testimonial-1.jpg'
import img2 from './imges/testimonial-2.jpg'
import img3 from './imges/testimonial-3.jpg'
import img4 from './imges/testimonial-4.jpg'
import img5 from './imges/testimonial-5.jpg'
import img6 from './imges/testimonial-6.jpg'
import img7 from './imges/testimonial-7.jpg'
import img8 from './imges/testimonial-8.jpg'


const Testimonials = styled.div`
box-sizing: border-box;
margin: 90px 0;
`
const Container = styled.div`
`
const Row = styled.div`
`
const Col = styled.div`
`
const Tabs = styled.div`
`
const Content = styled.div`
`
const Inner = styled.div`
padding-bottom: 20px;
`
const P = styled.p`
    font-size: 17px;
    line-height: 30px;
    padding: 0;
    font-weight: 400;
`
const AurthorInfo = styled.div`
    margin-bottom: 30px;
`
const H6 = styled.h6`
`
const Span = styled.span`
`
const Ul = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 510px;
    margin: 0 auto -30px;
    outline: none;  
`
const List = styled.li`
    flex-basis: 25%;
    padding-left: 5px;
    margin-bottom: 15px;
`
const Image = styled.img`
border: 1px solid transparent;
border-radius: 8px;
transition: transform .4s;
    &:hover{
    cursor: pointer;
    opacity: 1;
    transform: scale(1.1)};
`

const Testimonial = () => {
  return (
    <Testimonials>
    <Container className='container'>
    <Row className='row'>
    <Col className='col-lg-12'>
    <Tabs>
    <Content className='text-center'>
        <Inner>
            <P>Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</P>
        </Inner>
        <AurthorInfo>
            <H6><Span>Aklima</Span> - COO, AMERIMAR ENTERPRISES, INC.</H6>
        </AurthorInfo>
        <Ul>
            <List><Image src={img1}></Image></List>
            <List><Image src={img2}></Image></List>
            <List><Image src={img3}></Image></List>
            <List><Image src={img4}></Image></List>
            <List><Image src={img5}></Image></List>
            <List><Image src={img6}></Image></List>
            <List><Image src={img7}></Image></List>
            <List><Image src={img8}></Image></List>
        </Ul>
    </Content>

    </Tabs>
    
     </Col>

    </Row>

    </Container>

      
    </Testimonials>
  )
}

export default Testimonial
