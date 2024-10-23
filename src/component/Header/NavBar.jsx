import React, { useState, useEffect } from 'react';
import './NavBar.css';

// Icons
import { FaHouse } from "react-icons/fa6"; // home <FaHouse />
import { HiMiniUserGroup } from "react-icons/hi2"; // sobre <LuTarget />
import { FaGear } from "react-icons/fa6"; // serviços <FaGear />
import { FaAddressBook } from "react-icons/fa"; // contato <FaAddressBook />

// img logo
import logo from '../img/logo.png';

const NavBar = ({step,setStep,scrollToSection}) => {
  const [navbar, setNavBar] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
 

  const animationNavBar = () => {
    switch (step) {
      case 1:
        return <FaHouse />;
      case 2:
        return <HiMiniUserGroup />;
      case 3:
        return <FaGear />;
      case 4:
        return <FaAddressBook />;
      default:
        return null;
    }
  };

  const iconPosition = () => {
    switch (step) {
      case 1:
        return "icon-navbar-home";
      case 2:
        return "icon-navbar-sobre";
      case 3:
        return "icon-navbar-servicos";
      case 4:
        return "icon-navbar-contato";
      default:
        return "";
    }
  };

 

  const handleScroll = () => {
    if (!navbar) {
      setBgColor(window.scrollY > 250 ? 'rgba(0, 0, 0, 0.8)' : 'transparent');
    }
  
    const scrollY = window.scrollY;
    let newStep;
  
    if (scrollY < 520) {
      newStep = 1;
    } else if (scrollY < 1190) {
      newStep = 2;
    } else if (scrollY < 2630) {
      newStep = 3;
    } else {
      newStep = 4;
    }
    if (newStep !== step) {
      setStep(newStep);
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [step]);

  useEffect(() => {
    if (navbar) {
      setBgColor('white');
    } else {
      setBgColor('transparent');
    }
  }, [navbar]);
  console.log(step)
  return (
    <nav
      id='cormenu'
      className='container-nav'
      style={{
        backgroundColor: bgColor,
        transition: 'background-color 0.5s ease',
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '1000',
      }}
    >
      <img className='logo' src={logo} alt="Logo" />
      <ul className={navbar ? "container-ul-active" : "container-ul"}>
        <div className={iconPosition()}>{animationNavBar()}</div>
        <li onClick={() => { setNavBar(false); scrollToSection('home'); setStep(1); }}>Home</li>
        <li onClick={() => { setNavBar(false); scrollToSection('sobre'); setStep(2); }}>Sobre</li>
        <li onClick={() => { setNavBar(false); scrollToSection('servicos'); setStep(3); }}>Serviços</li>
        <li onClick={() => { setNavBar(false); scrollToSection('contato'); setStep(4); }}>Fale Conosco</li>
      </ul>
      <div className='iconnav' onClick={() => setNavBar(!navbar)}>
        <div className={navbar ? "container-1Active" : "container-1"}></div>
        <div className={navbar ? "container-2Active" : "container-2"}></div>
        <div className={navbar ? "container-3Active" : "container-3"}></div>
      </div>
    </nav>
  );
};

export default NavBar;
