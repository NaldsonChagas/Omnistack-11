import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Logon() {

  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero!" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input placeholder="Sua Id" value={id}
            onChange={e => setId(e.target.value)} />
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