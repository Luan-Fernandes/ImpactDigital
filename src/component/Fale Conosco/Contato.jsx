import './Contato.css'

//icon
import { FaInstagram } from "react-icons/fa6"; //<FaInstagram />
import { FaLinkedin } from "react-icons/fa"; //<FaLinkedin />

//component button
import Button from '../button/Button';

const Contato = ({ id }) => {
    return (
        <div id={id[3]} className='container-padrao contato'>
            <span className='desc-servico desccontato'>
                <label>Vamos conversar</label>
                <h1>Entre em Contato</h1>
            </span>
            <section className='contateme'>
                <div className='contateme-desc'>
                    <div className='desc-interna'>
                        <h1>Pronto para levar sua presença digital a um novo patamar?</h1>
                        <p>Estou aqui para ajudá-lo a otimizar suas campanhas de tráfego pago e desenvolver estratégias de marketing digital que realmente convertem. Vamos juntos criar soluções personalizadas que impulsionem o crescimento do seu negócio. Entre em contato e vamos discutir como podemos alcançar seu objetivos.</p>
                        <span className='redes'>
                            <h2>Redes:</h2>
                            <a href="#" className='insta'><FaInstagram /></a>
                            <a href="#" className='link'><FaLinkedin /></a>
                        </span>
                    </div>
                </div>
                <form action="https://formsubmit.co/mandara_luan@hotmail.com" method="POST">
                <h1>Contato</h1>
                    <label>
                        <span>Nome*</span>
                        <input type="text" name='nome' required  />
                    </label>
                    <label>
                        <span>Email*</span>
                        <input type="email" name='email' required  />
                    </label>
                    <label>
                        <span>WhatsApp*</span>
                        <input type="text" name='email' required />
                    </label>
                    <label>
                        <span>Empresa (Opcional)</span>
                        <input type="text" name='email'/>
                    </label>
                    <label>
                        <span>Menssagem*</span>
                        <textarea className='meu-textarea' name="menssagem" id="menssagem" placeholder='...'></textarea>
                    </label>
                    <Button nome="Enviar"></Button>
                </form>
            </section>
        </div>
    )
}

export default Contato
