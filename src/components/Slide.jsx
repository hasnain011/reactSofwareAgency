import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background-color: grey;
position: relative;
width: 18rem; 
border: 2px solid red;
height: 300px;
`
const Data = styled.div`
position: absolute;
top: 0;
left: 5;
`

const Slide = () => {
  return (
    <Div class="card">
    
  <Data class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="card-link">Card link</a>
    <a href="/" class="card-link">Another link</a>
  </Data>
</Div>
  )
}

export default Slide
