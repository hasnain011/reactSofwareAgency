import React from 'react'
import styled from 'styled-components'
import { CounterFact } from '../data'
import CountUp from 'react-countup'

const Counter = styled.div`
box-sizing: border-box;
`

const Container = styled.div`
`

const Row = styled.div`
`

const Col = styled.div`
`
const Title = styled.div`

`
const H3 = styled.h3`
font-size: 36px;
font-weight: 500;
`
const CounterDiv = styled.h3`
text-align: center;
margin: 40px 0;


`


const P = styled.p`
    color: rgba(29,29,36,.75);
    font-size: 18px!important;
    line-height: 28px!important;
    padding: 0 20%;
    margin-top: 10px;

`
const CounterR = styled(CountUp)`
    font-size: 75px;
    line-height: 56px;
    color: #f9004d;
    margin-bottom: 10px;
    font-weight: 600;
    margin-top: 20px;
    


`







const CounterArea = () => {


  return (
    <>
    <Counter>
    <Container className='container'>
        <Row className='row'>
            <Col className='col-lg-12'>
            <Title className='text-center'>
                <H3>Our Fun Facts</H3>
            </Title>

            </Col>
        </Row>
        <Row className='row'>
        {CounterFact.map((item)=>(
        <CounterDiv className='col-lg-4 col-md-4 col-sm-6' key={item.id}>
        <CounterR end={item.counting} duration={2}/>
        <P>{item.paragraph}</P>
        </CounterDiv>
        ))}

        </Row>
    </Container>

      
    </Counter>
    </>
  )
}

export default CounterArea
