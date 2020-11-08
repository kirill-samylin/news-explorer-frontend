import React from 'react';
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
function Navigation({ handleMenu, isOpen, handleForm, onSignOut }) {
  const location = useLocation();
  const user = React.useContext(CurrentUserContext);
  let linkTheme = '';
  let buttonTheme = '';
  let buttonIcon = 'exit-icon-white';
  if (location.pathname==="/saved-news" && !isOpen) {
    linkTheme = 'navigation__link_theme_black';
    buttonTheme = 'navigation__button_theme_black';
    buttonIcon = 'exit-icon';
  }
  function handleAuth() {
    handleForm();
    handleMenu();
  }

  return (
    <nav className={`navigation ${(isOpen) ? 'navigation_opened' : ''}`}>
      <NavLink onClick={handleMenu} className={`navigation__link ${linkTheme}`} activeClassName="navigation__link_active" to="/">Главная</NavLink>
      {(user.name) ?
        <>
          <NavLink onClick={handleMenu} className={`navigation__link ${linkTheme}`} activeClassName="navigation__link_active_black" to="/saved-news">Сохранённые статьи</NavLink>
          <button onClick={onSignOut} className={`navigation__button ${buttonTheme}`}>
            <p className="navigation__button-text">{user.name}</p>
            <i className={`navigation__exit ${buttonIcon}`}></i>
          </button>
        </>  :
        <button onClick={handleAuth} className={`navigation__button ${buttonTheme}`}>
          <p className="navigation__button-text">Авторизоваться</p>
        </button>
      }
    </nav>
  );
}

export default Navigation;