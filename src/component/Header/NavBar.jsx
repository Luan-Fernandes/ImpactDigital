import React, { useState, useEffect } from 'react';
import './NavBar.css';

// Icons
import { FaHouse } from "react-icons/fa6"; // home <FaHouse />
import { HiMiniUserGroup } from "react-icons/hi2"; // sobre <LuTarget />
import { FaGear } from "react-icons/fa6"; // serviços <FaGear />
import { FaAddressBook } from "react-icons/fa"; // contato <FaAddressBook />

// img logo
import logo from '../img/logo.png';

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [step, setStep] = useState(1);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!navbar) {
      setBgColor(window.scrollY > 250 ? 'rgba(0, 0, 0, 0.8)' : 'transparent');
    }
    
    if (window.scrollY < 520) {
      setStep(1);
    } else if (window.scrollY >= 520 && window.scrollY < 1190) {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbar]);

  useEffect(() => {
    if (navbar) {
      setBgColor('white');
    } else {
      setBgColor('transparent');
    }
  }, [navbar]);

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
