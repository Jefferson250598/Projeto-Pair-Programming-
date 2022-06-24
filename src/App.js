import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Img from "./img/inicio.png"
import Logo from "./img/logo.png"
import Torta from "./img/torta.png"
import Pizza from "./img/pizza.png"
import Copo from "./img/copo.png"
import Colher from "./img/colher.png"
import Instagram from "./img/instagram.png"
import Twitter from "./img/twitter.png"
import Facebook from "./img/facebook.png"
import Pinterest from "./img/pinterest.png"

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



const CaixaColher = styled.div`
display: flex;
alingn-items: center;

`
const TextoAbout = styled.div`
padding: 30vh;
display: flex;
aling-items: center;
flex-direction: column;

`
const ParagrafoTexto = styled.div`
width: 30vw;
font-size: 15px;
font-family:  Hurme Geometric Sans 1;
text-align: left;
color: #373737;
`

const TituloAbout = styled.div`
display: flex;
justify-content:center;
height: 16vh;
font-family: Hurme Geometric Sans 1, SemiBold;
color: #373737;
font-size: 35px;
`

const BoxDigitar = styled.div`
margin-top: -1vh;
background-color: #DFE4DE;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 28vw;
`


const TextoPrimeiro = styled.div`

height: 5vh;
display: flex;
justify-content:center; 
align-items: center;
font-family: Hurme Geometric Sans 1, SemiBold;
font-size: 20px;
color: #373737;
`

const Subtitulo = styled.div`
height: 5vh;
display: flex;
aling-items: center;
justify-content: center;
font-family: Hurme Geometric Sans 1, Regular;
color: #373737;
`

const Imput = styled.div`
background-color: red;
display: flex;
aling-items: center;
justify-content: center;
width: 30vw;
input{width: 30vw;
height: 10vh;
}

`

const Botao = styled.div`
display: flex;
aling-items: center;
justify-content: center;
border-width: medium;
margin-top: 2vh;
width: 7vw;
border-style: solid;
border-color: #373737;
`

const CaixaRodape = styled.div`
  height: 32vh;
  list-style: none;
  display:flex;
  justify-content: space-between;
  aling-items: center;  
`


const ListaRodape = styled.div`
  height: 15vw;
  width: 30vw;
  align-items: center;
  display:flex;
  justify-content: space-evenly;

`
const Figuras = styled.div`
height: 15vw;
  width: 30vw;
  align-items: center;
  display:flex;
  justify-content: space-betteen;
  padding: 3em;
`
const Footer = styled.div`
height: 5vh;
background-color: #446061;
display: flex;
align-items: center;
justify-content: center;
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
              <img src={Pizza} height="320px" width="380px" />
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

      <CaixaColher>
        <div>
          <img src={Colher} width="780px" />
        </div>
        <TextoAbout>
          <TituloAbout>
            <h4>ABOUT</h4>
          </TituloAbout>
          <ParagrafoTexto>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
          </ParagrafoTexto>
        </TextoAbout>
      </CaixaColher>

      <BoxDigitar>
        <TextoPrimeiro>
          <h2>
            SUBSCRIBE
          </h2>
        </TextoPrimeiro>
        <Subtitulo>
          <h3>
            Sign up for newsletter
          </h3>
        </Subtitulo>
        <Imput>
          <input id="Pesquisa" placeholder="     Your Email" />
        </Imput>
        <Botao>
          <p>SUBMIT</p>
        </Botao>
      </BoxDigitar>


      <CaixaRodape>
        <Figuras>
          <div>
            < img src={Instagram} />
          </div>

          <div>
            < img src={Twitter} />
          </div>

          <div>
            < img src={Facebook} />
          </div>

          <div>
            < img src={Pinterest} />
          </div>
        </Figuras>

        <div>
          <ListaRodape>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </ListaRodape>
        </div>
      </CaixaRodape>

      <Footer>
        <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
      </Footer>

    </>
  );
}