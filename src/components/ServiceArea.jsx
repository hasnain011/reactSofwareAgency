import React from 'react'
import styled from 'styled-components'
import { services } from '../data'

const ServiceContainer = styled.div`
background-color: lightgrey;
padding-top: 100px;
overflow-x: hidden;
`
const Container = styled.div`
padding: 50px 40px;



`
const Row = styled.div`
`
// Left Columb
const LeftColoumb = styled.div`
/* width: 350px;
max-width: 350px; */
`
const LeftContent = styled.div`
/* width: 100%; */
`
const Title = styled.h1`
font-size: 60px;
font-weight: 700;
padding: 10px 0;
`
const Para = styled.div`
font-size: 18px;
padding-bottom: 15px;
line-height: 30px;
color: rgba(29,29,36,.75);
`
const Btn = styled.div`
`

// Right columb

const RightColoumb = styled.div`
`
const RightRow = styled.div`
`





const Card = styled.div`
border-radius: 20px;
width: 42%;


&:hover{
background: linear-gradient(to right, #F71C0D, #F00B5E); 
color: white;
transform: translateY(-5px);
transition: 0.3s;
cursor: pointer;
box-shadow: -2px -2px 12px 18px rgba(0,0,0,0.06);
-webkit-box-shadow: -2px -2px 12px 18px rgba(0,0,0,0.06);
-moz-box-shadow: -2px -2px 12px 18px rgba(0,0,0,0.06);
.icon, .para , .heading{
  color: white;
}

  }
`
const Icon = styled.div`
color: #f9004d;
display: flex;
align-items: center;
font-size: 40px;
height: 100%;
/* max-height: 100%; */
`

const Services = styled.div`
`
const RightContent = styled.div`
margin-top: 15px;
`
const RightHeading = styled.h3`
font-size: 20px;
`
const RightPara = styled.p`
 font-size: 20px;
font-weight: 300;
color: #000;
`




const ServiceArea = () => {
  return (
    <ServiceContainer className='service-area'>
     <Container className='container-fluid '>
      <Row className='row'>

      {/* Service area left */}
      <LeftColoumb class="col-lg-12 col-md-12 col-sm-12">
      <LeftContent class="section-title m-5">
      <Title class="title">Services</Title>
      <Para>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</Para>

      <Btn class="service-btn mt-4">
      <a class=" btn btn-transparent btn-primary" href="/service">
      <span class="text">Request Custom Service</span></a>
      </Btn>
      </LeftContent>

      </LeftColoumb>

      {/* Service Area Right */}
      <RightColoumb className='col-lg-12 col-md-12 col-sm-12 mt-5'>
      <RightRow className='row service-one-wrapper'>
      {services.map((item)=>(
      <Card className='col-lg-6 col-md-12 col-sm-12 w-50'>
    
          <Services className="service p-3 w-100" key={item.id} >
        
            <Icon className='icon'>{item.icon}</Icon>

            <RightContent className='content pt-2'>
              <RightHeading className='heading'>{item.heading}</RightHeading>
              <RightPara className='para'>{item.paragraph}</RightPara>
            </RightContent>
          </Services>
       

      </Card>
      ))}

      </RightRow>

      </RightColoumb>

      </Row>
     </Container>

    </ServiceContainer>
  )
}

export default ServiceArea
