import React from 'react'
import './App.css';

//components
import NavBar from './component/Header/NavBar';
import Home from './component/Home/Home'
import Missao from './component/Missão/Missao'
import Servicos from './component/Serviços/Servicos'
import Footer from './component/Footer/Footer'

const App = () => {
  const id = ['home', 'missao', 'servicos']
  return (
    <div className='Container-pai'>
      <NavBar id={id}></NavBar>
      <Home id={id}></Home>
      <Missao id={id}></Missao>
      <Servicos id={id}></Servicos>
      <Footer></Footer>
    </div>
  )
}

export default App
