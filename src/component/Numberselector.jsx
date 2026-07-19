import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
export const Numberselector = ({current , setcurrent}) => {
  
  
  const arrnum = [1,2,3,4,5,6,]

  
  return (

   <Continer>

      <div className="boxes">

        

     {arrnum.map((value,i) => (
     <Box isvalue = {current=== value} onClick={() => {
     console.log(value)
      setcurrent(value)

     }}> {value} </Box>

     ))}




     
</div>

<p className='p'>Select Number</p>



   </Continer>
  )
}



const Continer = styled.div` 
max-width:650px;
display:flex;
flex-direction:column; 




.boxes{
    display:flex;
    gap:30px;
}

.p{
    font-size:25px;
    font-weight:bold;
    align-self:flex-end;
  }


`

const Box = styled.div`
 border:2px solid black;
    width:80px;
    height:80px;
    display:grid;
    place-items:center;

    background-color: ${(props)=> 
        props.isvalue ? "black":"white"};
        color:  ${(props)=> 
        props.isvalue ? "white":"black"};

`