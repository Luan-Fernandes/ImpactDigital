import React from 'react'
import './Home.css';

//img logo principal
import  logo from '../img/logoH.png';

//component button
import Button from '../button/Button';

//icons
import { CgArrowLongUp } from "react-icons/cg";

const Home = ({id,setStep,step,scrollToSection}) => {
  console.log(step)
  return (
    <div id={id[0]}  className='container-padrao home'>
      <div className='container-filho'>
      <h1 className='titulo'><b>IMPACTO</b> no seu negocio.</h1>
      <p className='text'>Seu Alcance com Gestão de Tráfego Pago de Alta Performance.</p>
      <div onClick={() => {setStep(4); scrollToSection('contato')}} className='container-button'><Button nome="Fale Conosco"></Button></div>
      </div>
    </div>
  )
}
export default Home
