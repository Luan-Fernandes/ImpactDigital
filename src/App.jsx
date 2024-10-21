import React from 'react'
import './App.css';

//components
import NavBar from './component/Header/NavBar';
import Home from './component/Home/Home'
import Sobre from './component/Sobre/Sobre'
import Servicos from './component/Serviços/Servicos'
import Footer from './component/Footer/Footer'

const App = () => {
  const id = ['home', 'sobre', 'servicos']
  return (
    <div className='Container-pai'>
      <NavBar id={id}></NavBar>
      <Home id={id}></Home>
      <Sobre id={id}></Sobre>
      <Servicos id={id}></Servicos>
      <Footer></Footer>
    </div>
  )
}

export default App
