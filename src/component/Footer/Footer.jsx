import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6"; //<FaInstagram />
import { FaArrowUp } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa";

//logo footer
import logoH from '../img/logoH.png'
const Footer = () => {
  return (
    <div className='rodape'>
      <a href="https://www.instagram.com/lf.developer?igsh=Mm9vZHJhNXI3aDAw" target='_blank'><p className='fontsize'>lf.developer<FaInstagram /></p></a>
        <div className='seta'>
        <FaArrowUp />
        </div>
        <p className='fontsize'>Desenvolvido 2024<FaRegRegistered /></p>
    </div>
  )
}

export default Footer
