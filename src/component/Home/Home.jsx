import React from 'react'
import './Home.css';


const Home = ({id}) => {
  
  return (
    <div id={id[0]}  className='container-padrao home'>
      <h1>Bem Vindo ao nosso Site</h1>
    </div>
  )
}

export default Home
