import React from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
import {mobile} from '../responsive'


const Container = styled.div`
height: 100vh;
    width: 100vw;
    display: flex;
    position: relative;
    overflow-x: hidden;
`
const Div = styled.div`
height: 100%;
position: relative;
background-color: black;

.caption{
  top: 30%;

}

`
const Img = styled.img`
height: 100%;
width: 100vw;
opacity: 0.5;
filter: brightness(60%);

`
const Title = styled.h1`
font-size: 100px;
font-weight: bold;
background: linear-gradient(to right, #F71C0D, #F00B5E); 
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;

${mobile({ fontSize: "40px"})}

  
`
const Button = styled.button`
  width: 200px;
  padding: 13px 15px;
  text-align: center;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  &:hover{
    background-color: #F9004D;
    transform: translateY(-5px);
    transition: 0.3s;
    border: none;
  }
`

const Bslider = () => {
  return (
    <Container id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    {sliderItems.map((item) =>(
      <Div className="carousel-item active" key={item.id}>
        <Img src={item.img} className="w-100"  alt="..."/>
        <div className="carousel-caption caption">
        <Title>{item.title}</Title>
        <p className='mt-3'>{item.desc}</p>
        <Button className='mt-3'>CONTACT US</Button>
      </div>
      </Div>
      ))}
      {/* <div className="carousel-item">
        <img src="" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div> */}
    </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </Container>
  )
}

export default Bslider
