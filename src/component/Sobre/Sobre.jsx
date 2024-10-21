import React from 'react'
import './Sobre.css';

//img
import imgSobre from '../img/imgSobre.png'
import imgMobile from '../img/imgmissaomobile.png'

//redes sociais
import { FaInstagram } from "react-icons/fa6"; //<FaInstagram />
import { FaFacebook } from "react-icons/fa"; //<FaFacebook />



const Sobre = ({ id }) => {
  return (
    <div id={id[1]} className='container-padrao sobre'>
      <div className='container-sobre'>
        <span className='con-span'>
          <p>Conheça um pouco</p>
          <h1>SOBRE NÓS</h1>
        </span>
        <section className='con-section'>
       
          <div className='con-desc'>
          <div className='imgSobreMobile'><img src={imgMobile} alt="" /></div>
            <h1>Olá, somos a <b>Impacto Digital</b></h1>
            
            <p>Somos uma empresa especializada em marketing e estratégia digital, com o objetivo de oferecer soluções completas e personalizadas para empresas que buscam melhorar sua presença online, gerar resultados e aumentar sua visibilidade no mercado.</p>

            <p>Nossa missão é impulsionar negócios por meio de estratégias digitais eficazes, proporcionando impacto real no crescimento das empresas. Buscamos inovação, criatividade e resultados mensuráveis, sempre focados nas necessidades e objetivos dos nossos clientes.</p>

          </div>
          <div className='img-desc'>
            <img src={imgSobre} alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sobre
