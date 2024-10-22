import React from 'react'
import './Servicos.css'

//icons
import { TbDeviceMobileMessage } from "react-icons/tb"; //<TbDeviceMobileMessage /> social media
import { FaAd } from "react-icons/fa"; //<FaAd /> trafego pago
import { MdOutlineSlowMotionVideo } from "react-icons/md"; //<MdOutlineSlowMotionVideo /> video make
import { FaFileCode } from "react-icons/fa"; //<FaFileCode /> frontEnd
import { GiPencilBrush } from "react-icons/gi"; //<GiPencilBrush /> designer
import { IoMdMegaphone } from "react-icons/io"; //<IoMdMegaphone /> marketing


const Servicos = ({ id }) => {
  const listaServicos = [
    { id: 1, icon: <TbDeviceMobileMessage />, servico: 'Social Media', desc: 'Criação e gestão de perfis em redes sociais. Produção de conteúdo relevante para engajamento e conversão. Planejamento de campanhas e estratégias específicas para diferentes plataformas (Instagram, Facebook, LinkedIn, etc.).' },

    { id: 2, icon: <FaAd />, servico: 'Tráfego Pago', desc: 'Gestão e otimização de anúncios em plataformas como Google Ads, Facebook Ads, Instagram Ads. Foco em maximizar o retorno sobre investimento (ROI) dos clientes. Estratégias de remarketing para aumentar conversões.' },

    { id: 3, icon: <IoMdMegaphone />, servico: 'Marketing Digital', desc: 'Criação de planos de marketing digital completos. Análise de mercado, público-alvo e concorrência. Implementação de táticas de crescimento orgânico e pago.' },

    { id: 4, icon: <MdOutlineSlowMotionVideo />, servico: 'Videomaker', desc: 'Produção de vídeos de alta qualidade para campanhas, redes sociais e promoções de produtos/serviços. Edição criativa e storytelling visual para aumentar o engajamento.' },

    { id: 5, icon: <FaFileCode />, servico: 'Criação de Sites', desc: 'Desenvolvimento de websites otimizados para conversão. Design responsivo, SEO otimizado e fácil navegação para usuários. Integração com plataformas de e-commerce e automação de marketing.' },

    { id: 6, icon: <GiPencilBrush />, servico: 'Design Gráfico', desc: 'Desenvolvimento de websites otimizados para conversão. Design responsivo, SEO otimizado e fácil navegação para usuários. Integração com plataformas de e-commerce e automação de marketing.' },

  ]
  return (
    <div id={id[2]} className='container-padrao servicos'>
      <div className='container-servicos'>
        <span className='desc-servico'>
          <label>Como posso te ajudar</label>
          <h1>Nossos serviços</h1>
        </span>
        <section className='containers'>

          {listaServicos.map(servico => (
    <div className='container-unicos card' key={servico.id}>
      <div className='container-interno'>
        <div className='icon'>{servico.icon}</div>
        <div className='desc-interna'>
          <h1>{servico.servico}</h1>
          <p>{servico.desc}</p>
        </div>
      </div>
    </div>
  ))}
        </section>
        <div className='desc-diferenciais'>
          <span className='desc-servico'>
            <label>Nossos</label>
          <h1>Diferenciais</h1>
          </span>
          <p>Equipe especializada e criativa, composta por videomaker, criador de sites e designer de artes, além da gestão de social media e tráfego pago.
Soluções customizadas de acordo com o perfil de cada cliente.
Foco em resultados: otimização constante para melhorar performance e maximizar ROI.</p>
</div>
      </div>
    </div>
  )
}

export default Servicos
