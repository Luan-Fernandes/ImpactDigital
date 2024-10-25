import React, { useState } from 'react'
import './App.css';

//components
import NavBar from './component/Header/NavBar';
import Home from './component/Home/Home'
import Sobre from './component/Sobre/Sobre'
import Servicos from './component/Serviços/Servicos'
import Footer from './component/Footer/Footer'
import Contato from './component/Fale Conosco/Contato';

const App = () => {
  const id = ['home', 'sobre', 'servicos','contato']
  const [step, setStep] = useState(1);

  //funcao de scrolar quando clicar
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    return id
  };
  return (
    <div className='Container-pai'>
      <NavBar scrollToSection={scrollToSection} id={id} setStep={setStep} step={step} ></NavBar>
      <Home id={id} setStep={setStep} step={step} scrollToSection={scrollToSection} ></Home>
      <Sobre id={id}></Sobre>
      <Servicos id={id}></Servicos>
      <Contato id={id}></Contato>
      <Footer></Footer>
    </div>
  )
}

export default App
