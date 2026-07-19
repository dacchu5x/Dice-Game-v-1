import styled from "styled-components";
import { Numberselector } from "./Numberselector";
import Dice from "./Dice";
import { useState } from "react";
import Rules from "./Rules";
function Start(){

     const [current , setcurrent] = useState()
   
    const [dicestate , setdicestate] = useState(1)
    
     const [score , setcore ]  = useState(0)

     const [rule , setrules ]  = useState(false)


    
   
    return(
      
   <div className="x">   

<Header>
    

<div className="score">             
    <h1> {score} </h1>
    <p>Total Score</p>

  </div>
      <Numberselector current = {current} setcurrent= {setcurrent}/>
       
     
        </Header> 
<Center> 
    <div className="dice">   
    <Dice dicestate=  {dicestate} setdicestate = {setdicestate}     score =  {score}    setcore = {setcore}  current = {current}  setcurrent = {setcurrent}   rule = {rule}  setrules = {setrules} />  
       </div>
        
    {rule ? <Rules /> : <div style={{ width: "500px" }}></div>}
       
       </Center></div>  
    
  
)
     
}

export default Start ;

const Header = styled.div`
height:200px;

display: flex;
justify-content:space-between;
align-items: center;
  max-width: 1300px;
   margin: 0 auto;

.score {

    width : 130px;
    height:200px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
.score h1{
    font-size:50px;
}
.score p{
    font-size:20px;
    font-weight: bold;
}

.header{


}


`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  margin-top: 50px;

  .dice{
    width: 700px;
    display:flex;

 
   justify-content:flex-end;
  
  }


`;