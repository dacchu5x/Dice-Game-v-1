import styled from 'styled-components';
import { useState } from 'react';
import Reset from './Reset';


const Dice = ({dicestate ,setdicestate ,score , setcore , current , setcurrent , rule ,setrules  }) => {
  
  



    const rollDice = () => {

   if(!current){
    alert("Select an Number")
    return
   }
   

  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  setdicestate(randomNumber)

   if (current === randomNumber ) {
    setcore(score + current);
  } else {
    setcore(score - 2);
  }
 setcurrent(undefined)
};
 

 return (

 
  
    
    
    <Roll>

       
    
    
     
     <div className="img"    onClick={rollDice}>

        
    <img src={`dice_${dicestate}.png`}alt="" />

     
     <p>Click on Dice to roll </p></div>
    <div className='reset'>
    <Reset score = {score} setcore = {setcore}   rule = { rule} setrules = {setrules} />
   </div>
    

    </Roll>
  )
}

export default Dice




const Roll = styled .div`

width:380px;
display:flex;
justify-content: end;
flex-direction: column;
align-items:end;





p{

font-size:13px;
font-weight: bold ;
margin-right:30px;

}

.img{
width:200px;
height: 230px;
display:flex;
flex-direction:column;

align-items:end;


}
.img img{

width: 190px; 
height: 190px;
margin-right: ;

}
.reset{

margin-right:40px;
}

`