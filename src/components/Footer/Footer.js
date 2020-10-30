import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__paragraph">© 2020 Supersite, Powered by News API</p>
      <nav className="footer__menu">
        <div className="footer__links">
          <NavLink className="footer__link" to="/">Главная</NavLink>
          <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
        </div>
        <div className="footer__icons">
          <a className="footer__social github-icon" href="https://github.com/kirill-samylin" target="_blank" rel="noopener noreferrer"> </a>
          <a className="footer__social fb-icon" href="https://vk.com/samylin1992" target="_blank" rel="noopener noreferrer"> </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;