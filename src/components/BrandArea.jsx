import React from 'react'
import styled from 'styled-components'




const Brand = styled.div`
    position: relative;
    padding-bottom: 100px  0;
    padding-top: 60px;
    background: #fff;
    box-sizing: border-box;
`
const Container = styled.div`
`
const Row = styled.div`
`
const Col = styled.div`
`
const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
`
const List = styled.li`
list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 25px;
    flex-basis: 20%;
    text-align: center;
`

const Img = styled.img`
    max-width: 130px;
    vertical-align: middle;
    opacity: 0.7;
    transition: .3s;
    max-height: 110px;
    max-width: 150px;
    transition: transform .2s;
    &:hover{
    cursor: pointer;
    opacity: 1;
    transform: scale(1.1);
  }
`



const BrandArea = () => {
  return (
    <Brand className='brand-area brand-separation bg_color--5 ptb--120' >
      <Container className='container-fluid'>
        <Row>
            <Col className='col-lg-12 w-100'>

            <Ul>
                <List><Img src='./imges/brand-01.png'/></List>
                <List><Img src='./imges/brand-02.png'/></List>
                <List><Img src='./imges/brand-03.png'/></List>
                <List><Img src='./imges/brand-04.png'/></List>
                <List><Img src='./imges/brand-05.png'/></List>
                <List><Img src='./imges/brand-06.png'/></List>
                <List><Img src='./imges/brand-01.png'/></List>
                <List><Img src='./imges/brand-02.png'/></List>
                <List><Img src='./imges/brand-03.png'/></List>
                <List><Img src='./imges/brand-04.png'/></List>
            </Ul>
    
            

            </Col>
        </Row>
      </Container>
    </Brand>
  )
}

export default BrandArea
