import React, { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import styled from 'styled-components'
import {sliderItems} from '../data'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    position: relative;
    overflow-x: hidden;
`
const Arrow = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  z-index: 10;

  & .arr{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  opacity: 1;
  &:hover{
    color: #F9004D;
    opacity: 1;
  }

  }

    
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);

`
const Slide = styled.div`
width: 100vw;
display: flex;
align-items: center;
height: 100vh;
background-color: #ddd897;

`
const ImgContainer = styled.div`
height: 100%;
position: relative;
background-color: black;

`
const Image = styled.img`
height: 100%;
width: 100vw;
opacity: 0.3;
filter: brightness(60%);



`
const InfoContainer = styled.div`
text-align: center;
top: 220px;
left: 220px;
position: absolute;




`

const Title = styled.h1`
font-size: 100px;
font-weight: bold;
background: linear-gradient(to right, #F71C0D, #F00B5E); 
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;

  
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  letter-spacing: 3px;
`
const Button = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  &:hover{
    background-color: #F9004D;
    border: none;
  }
`

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);

  const handleClick = (direction) =>{
    if(direction=== "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }

  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick("left")}>
      <ArrowCircleLeftIcon className='arr'/>
       
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) =>(

          <Slide bg={item.bg} key={item.id}>
          <ImgContainer><Image src={item.img} />

          <InfoContainer>
     
            <Title className='theme-gradient'>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>CONTACT US</Button>
      
          </InfoContainer>
          </ImgContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
      <ArrowCircleRightIcon className='arr'/>

      </Arrow>

    </Container>
    
  )
}

export default Slider
