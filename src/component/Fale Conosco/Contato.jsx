import './Contato.css';

// hooks
import { useState } from 'react';

// icons
import { FaInstagram } from "react-icons/fa6"; 
import { FaLinkedin } from "react-icons/fa"; 
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowSync } from "react-icons/ti";

const Contato = ({ id }) => {
  const [loading, setLoading] = useState(false);

  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('https://formsubmit.co/ajax/impactodigitalmktpro@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          whatsapp,
          empresa,
          mensagem
        })
      });
      alert("Formulário enviado com sucesso!");
      setNome(''); // Limpa os campos após envio
      setEmail('');
      setWhatsapp('');
      setEmpresa('');
      setMensagem('');
    } catch (error) {
      alert("Erro ao enviar o formulário. Tente novamente.");
    } finally {
      
    }
  };

  return (
    <div id={id[3]} className="container-padrao contato">
      <span className="desc-servico desccontato">
        <label>Vamos conversar</label>
        <h1>Entre em Contato</h1>
      </span>
      <section className="contateme">
        <div className="contateme-desc">
          <div className="desc-interna">
            <h1>Pronto para levar sua presença digital a um novo patamar?</h1>
            <p>
              Estou aqui para ajudá-lo a otimizar suas campanhas de tráfego pago e desenvolver estratégias de marketing digital que realmente convertem. Vamos juntos criar soluções personalizadas que impulsionem o crescimento do seu negócio. Entre em contato e vamos discutir como podemos alcançar seus objetivos.
            </p>
            <span className="redes">
              <h2>Redes:</h2>
              <a href="#" className="insta"><FaInstagram /></a>
              <a href="#" className="link"><FaLinkedin /></a>
            </span>
          </div>
        </div>
        
        {/* Configurações do formulário para o FormSubmit */}
        <form action="https://formsubmit.co/mandara_luan@hotmail.com" method="POST" onSubmit={handleSubmit}>
          <h1>Contato</h1>
          <label>
            <span>Nome</span>
            <input 
              type="text" 
              name="nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              required 
            />
          </label>
          <label>
            <span>Email*</span>
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <label>
            <span>WhatsApp*</span>
            <input 
              type="text" 
              name="whatsapp" 
              value={whatsapp} 
              onChange={(e) => setWhatsapp(e.target.value)} 
              required 
            />
          </label>
          <label>
            <span>Empresa (Opcional)</span>
            <input 
              type="text" 
              name="empresa" 
              value={empresa} 
              onChange={(e) => setEmpresa(e.target.value)} 
            />
          </label>
          <label>
            <span>Mensagem*</span>
            <textarea 
              className="meu-textarea" 
              name="mensagem" 
              value={mensagem} 
              onChange={(e) => setMensagem(e.target.value)} 
              placeholder="..." 
              required
            ></textarea>
          </label>
         
          <button
            className="button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando" : "Enviar"} 
            <span>
              {!loading ? (
                <>
                  <p className='seta1'><IoIosArrowForward /></p>
                  <p className='seta2'><IoIosArrowForward /></p>
                  <p className='seta3'><IoIosArrowForward /></p>
                </>
              ) : (
                <span className='rotate'><TiArrowSync /></span>
              )}
            </span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contato;
