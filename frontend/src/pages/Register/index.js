import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import api from '../../services/api';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(evt) {
    evt.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Id de acesso ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('erro no cadastro, tente novamente');
    }
  }

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

        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nome da Ong" value={name}
            onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="E-mail" value={email}
            onChange={e => setEmail(e.target.value)} />
          <input placeholder="Whatsapp" value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)} />
          <div className="input-group">
            <input placeholder="Cidade" value={city}
              onChange={e => setCity(e.target.value)} />
            <input placeholder="US" style={{ width: 80 }} value={uf}
              onChange={e => setUf(e.target.value)} />
          </div>
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}