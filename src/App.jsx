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
  return (
    <div className='Container-pai'>
      <NavBar id={id}></NavBar>
      <Home id={id}></Home>
      <Sobre id={id}></Sobre>
      <Servicos id={id}></Servicos>
      <Contato id={id}></Contato>
      <Footer></Footer>
    </div>
  )
}

export default App
