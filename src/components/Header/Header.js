import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
function Header({ handleForm, isForm, onSignOut }) {
  const [headerWidth, setHeaderWidth] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const headerElement = React.createRef();
  const location = useLocation();
  const isSaved = (location.pathname==="/saved-news");
  const titleClass = (isSaved && !isMenuOpen) ? 'header__title_theme_black' : '';
  const buttonClass = (isSaved) ? 'icon-black' : 'icon-menu';
  function handleMenu() {
    if (headerWidth<=560) {
      setIsMenuOpen(!isMenuOpen);
    }
  }
  React.useEffect(() => {
    setHeaderWidth(headerElement.current.parentElement.clientWidth);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <header ref={headerElement} className="header">
      <div className="header__main">
        <NavLink className={`header__title ${titleClass}`} to="/">NewsExplorer</NavLink>
        {(!isForm ? <button onClick={handleMenu} className={`header__menu ${(isMenuOpen) ? 'icon-close' : buttonClass}`}></button> : '')}
        <Navigation handleMenu={handleMenu} isOpen={isMenuOpen} handleForm={handleForm} onSignOut={onSignOut} />
      </div>
      {(isMenuOpen) ? <div onClick={handleMenu} className="header__back" /> : ''}
    </header>
  );
}

export default Header;
