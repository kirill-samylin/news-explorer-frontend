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
          <NavLink className="footer__link" to="https://praktikum.yandex.ru/" target="_blank">Яндекс.Практикум</NavLink>
        </div>
        <div className="footer__icons">
          <NavLink className="footer__social github-icon" to="https://github.com/kirill-samylin" target="_blank" />
          <NavLink className="footer__social fb-icon" to="https://vk.com/samylin1992" target="_blank" />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;