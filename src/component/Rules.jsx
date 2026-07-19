import React from 'react'

import styled from 'styled-components'


const Rules = () => {
  return (
    <Rulescontiner>
        <div>
    <h1>How to play dice game</h1>

    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
    <p>if you get wrong guess then  2 point will be dedcuted </p>

</div>

    </Rulescontiner>
  )
}

export default Rules


const Rulescontiner = styled.div` width :500px ;
display:flex;
justify-content:end;


height : 200px ; 
div{
width: 400px;
background-color: #181818;
color:white;
height:200px;
display:flex;
border:5px solid black;
flex-direction:column;


}`


