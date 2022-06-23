import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Img from "./img/inicio.png"
import Logo from "./img/logo.png"
import Torta from "./img/torta.png"
import Pizza from "./img/pizza.png"
import Copo from "./img/copo.png"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }`

const Container = styled.div`
  padding:2em;
  `
const Home = styled.div`
    background-image: url(${Img});
    background-position: center;
    background-size:100%;
    height: 133vh;
    background-repeat: no-repeat;
    `

const Menu = styled.div`
  height: 10vh;
  padding-left: 2vw;
  list-style: none;
  display:flex;
  justify-content: space-between;
  aling-items: center;  
  `

const BoxImg = styled.div`
 display:flex;
 align-items:center;
 `
const Lista = styled.div`
  width: 30vw;
  align-items: center;
  display:flex;
  justify-content: space-evenly;
  font-size: Hurme Geometric Sans 1, Regular;
  `

const BoxTitle = styled.div`
  height: 78vh;
  display:flex;
  justify-content:center; 
  align-items: flex-end;  
  font-size: 4vw; 
  font-family: Hurme Geometric Sans 1, SemiBold;
  color: #373737;
  `


const TituloMeio = styled.div`
height: 25vh;
display:flex;
justify-content:center; 
align-items: flex-end;
`

const BoxMain = styled.div`
background-color: #DFE4DE;
padding:2em;
`

const CaixaImagem = styled.div`

  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  padding: 45px;

`

//  mechendo na caixa da torta //
const MaeTorta = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color: #fff;
height: 65vh;
width: 24vw;
`

const TituloTorta = styled.div`
height: 30vh;
display: flex;
justify-content:center; 
align-items: center;
font-family: Hurme Geometric Sans 1, Regular;
color: #373737;
`
// mechendo na caixa da torta //


// mechendo na caixa da pizza //
const MaePizza = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color: #fff;
height: 65vh;
width: 24vw;
`

const TituloPizza = styled.div`
height: 30vh;
display: flex;
justify-content:center; 
align-items: center;
font-family: Hurme Geometric Sans 1, Regular;
color: #373737;
`

// mechendo na caixa da copo //
const MaeCopo = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color: #fff;
height: 65vh;
width: 24vw;
`

const TituloCopo = styled.div`
height: 30vh;
display: flex;
justify-content:center; 
align-items: center;
font-family: Hurme Geometric Sans 1, Regular;
color: #373737;
`

const BordaLista = styled.li`
  border-width: medium;
  width: 7vw;
  border-style: solid;
  border-color: #373737;
`

export default function App() {


  return (
    <>
      <GlobalStyle />
      <Container>
        <Home>
          <Menu>
            <BoxImg>
              <img src={Logo} width="45" />
            </BoxImg>
            <Lista>
              <li>ABOUT</li>
              <li>RECIPES</li>
              <BordaLista>SUBSCRIBE</BordaLista>
            </Lista>
          </Menu>
          <BoxTitle>
            <h1>RECIPES</h1>
          </BoxTitle>
        </Home>
      </Container>
     <BoxMain>
     <TituloMeio>
      <h2>LASTEST RECIPES</h2>
     </TituloMeio>
  
     <CaixaImagem>

     <MaeTorta>
     <div>
      <img src={Torta} height="320px" width="380px" />
     </div>
     <TituloTorta>
      <h3>Red Revelt Cake</h3>
     </TituloTorta>
     </MaeTorta>
     

     <MaePizza>
     <div>
      <img src={Pizza} height="320px" width="380px"/>
     </div>
     <TituloPizza> 
      <h3>Margherita Pizza</h3>
     </TituloPizza>
     </MaePizza> 


     <MaeCopo>
      <div>
      <img src={Copo} height="320px" width="380px" />
      </div>
      <TituloCopo>
      <h3>Peanut Smoothie</h3>
      </TituloCopo>
     </MaeCopo>
     


     </CaixaImagem>
     </BoxMain>
    </>


  );
}