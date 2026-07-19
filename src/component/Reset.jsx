import styled from "styled-components"

const Reset = ({score , setcore,setrules,rule}) => {
  return (
   <Btn>

    <button className ="btn1"  onClick={()=>(

     setcore(0)


    )}> Reset Score </button>

<button className="btn2" onClick={() => (setrules(prev => !prev))}>  { rule ? "Hide" : "Show"} Rules </button>
   </Btn>

  )
}

export default Reset


const Btn = styled.div` width:100px;

height:130px; 

border-radius:60px; 
display:flex;
flex-direction : column;
align-items:center;
justify-content:;
gap: 20px;
margin-top: 20px;

.btn1{
    background-color: #000000;
    color: white;
 width:190px;

height:40px; 
border-radius:60px; 
font-weight: bold;

}
.btn1:hover{
    background-color: #ffffff;
    color : #000000;
    transition:0.7s;
    transform : scale(1.05);
}

.btn2{
    width:190px;

height:40px; 
background-color: #fff;
border-radius:60px; 
font-weight: bold;
}

.btn2:hover{
    background-color: black;
    color : white;
    transition:0.7s;
    transform : scale(1.05);
}

`