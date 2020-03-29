import React from 'react';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Heroes" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude a pessoas
            encontrarem os casos da sua ONG.</p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" /> Login
          </Link>
        </section>

        <form action="">
          <input type="text" placeholder="Nome da Ong" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="US" style={{width: 80}} />
          </div>
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}