import styled from 'styled-components';
import dmImg from '../assets/dmImg.png';
import mscott from '../assets/mscott.jpg';

export const AppStyle=styled.div`
text-align: center;
margin:0 auto;
min-height:100vh;
  
`
export const Title=styled.h1`
margin:0 auto;
margin-top:1%;
font-family: 'Trocchi', serif;

`
export const Title2=styled.h2`
margin:0 auto;
font-family: 'Special Elite', cursive;
`

export const Header =styled.header`
background-color: #282c34;
min-height: 33vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 3rem;
color: white;
background-color:lightBlue;
`

export const HomeCont=styled.div`
max-width:100%;
box-sizing:border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin:0 auto;
min-height:67vh;
background:url(${dmImg});
background-repeat:no-repeat; white;
background-size:auto;
background-position:top;
`

export const Intro=styled.div`

width:100%;
box-sizing:border-box;
margin-top:0;
height: 485px;
display:flex;
align-items: center;
align-content:center;
justify-content: space-between;
font-size:2.5rem;

`



export const ButtonDiv=styled.div`
margin-bottom:1%;
width:100%;
display:flex;
align-content:flex-end;
justify-content: center;


`

export const GoButton=styled.button`
border-radius:5%;
height:50px;
font-weight:bolder;
font-family: 'Arbutus Slab', serif;
font-size:1.2rem;
background-color:black;
color:grey;
border:none;


&:hover{
color:white;
transform: scale(1.5,1);

}


`
export const MainCont=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-content:center;
max-height:100%;
margin:0 auto;

`

export const QuizCont=styled.div`
display:flex;
justify-content:center;
align-content:center;
font-size:1.3rem;
font-family: 'Arbutus Slab', serif;
margin:0 auto;

`

export const ResultsCont=styled.div`
font-size:1.5rem;
width:100%;
`

export const Results=styled.div`
display:flex;
width:100%;
font-size:2rem;


`