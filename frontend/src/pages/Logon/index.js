import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero!" />

        <form action="">
          <h1>Faça seu login</h1>

          <input placeholder="Sua Id" />
          <button type="submit" className="button">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}