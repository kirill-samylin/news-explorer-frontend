import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
function Navigation({ isClose, isOpen, isSaved, isLogin }) {
  let linkTheme = '';
  let buttonTheme = '';
  if (isSaved) {
    linkTheme = 'navigation__link_theme_black';
    buttonTheme = 'navigation__button_theme_black';
  }
  function handleAuth() {
    isLogin();
    isClose();
  }
  return (
    <nav className={`navigation ${(isOpen) ? 'navigation_opened' : ''}`}>
      <NavLink onClick={isClose} className={`navigation__link ${(isSaved && !isOpen) ? linkTheme : ''}`} activeClassName="navigation__link_active" to="/">Главная</NavLink>
      <NavLink onClick={isClose} className={`navigation__link ${(isSaved && !isOpen) ? linkTheme : ''}`} activeClassName="navigation__link_active_black" to="/saved-news">Сохранённые статьи</NavLink>
      {(isSaved) ?
        <button className={`navigation__button ${(isSaved && !isOpen) ? buttonTheme : ''}`}>
          <p className="navigation__button-text">Грета</p>
          <i className={`navigation__exit ${(isSaved && !isOpen) ? 'exit-icon' : 'exit-icon-white'}`}></i>
        </button> :
        <button onClick={handleAuth} className={`navigation__button ${(isSaved && !isOpen) ? buttonTheme : ''}`}>
          <p className="navigation__button-text">Авторизоваться</p>
        </button>
      }
    </nav>
  );
}

export default Navigation;