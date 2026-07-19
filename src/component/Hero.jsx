import styled from "styled-components";
import Dice from "../assets/dices 1.png";

function Hero({change}) {
  return (
    <>
    <Container>

        <div className="continer">

        <div className="img1">

     <img src={Dice} alt="Dice" />
     
     </div>
<div className="leftside">
     <div className="titel">
<h1>DICE GAME</h1> 
<div className="button">
<button onClick={change}>Play Now</button>
</div>
     </div>
</div></div>
    </Container>
</>
  );
}

export default Hero;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex; 
  align-items: center;

  justify-content : center;

.continer{
  height: 522px;
  width: 1128px;
     display: flex;
}
.img1 img {

    height:522px;
    width:649px;
}
    

.titel {

display: flex;
flex-direction: column;
align-items:center;

justify-content: center;
width:528px;
height:522px;
}

.titel h1{


font-size:90px;

}


button{

    width:220px;
    height:44px;
   
    color:white;
    border : none;
    border-radius: 40px;
    font-size: 15px;
    font-weight: bold;
     background-color:black;
    color:white;


   
}

.button{
    display: flex;
    justify-content: end;
    width:528px;
  

      
}

button:hover{
    
    background-color:transparent;
    color: #000000;
    border:2px solid black;
transition : 0.6s;
transform: scale(1.05);

}
`


;