import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
function Header({ isSaved, isLogin, isForm }) {
  const headerElement = React.createRef();
  const [headerWidth, setHeaderWidth] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const title = (isSaved) ? 'header__title_theme_black' : '';

  function handleMenu() {
    if (headerWidth<=560) {
      setIsMenuOpen(!isMenuOpen);
    }
  }
  React.useEffect(() => {
    window.onresize = () => setHeaderWidth(headerElement.current.parentElement.clientWidth);
    setHeaderWidth(headerElement.current.parentElement.clientWidth);
  }, [headerElement]);
  return (
    <header ref={headerElement} className="header">
      <div className="header__main">
        <NavLink className={`header__title ${(isSaved && !isMenuOpen) ? title: ''}`} to="/">NewsExplorer</NavLink>
        {(!isForm ? <button onClick={handleMenu} className={`header__menu ${(isMenuOpen) ? 'icon-close' : (isSaved) ? 'icon-black' : 'icon-menu' }`}></button> : '')}
        <Navigation isClose={handleMenu} isOpen={isMenuOpen} isSaved={isSaved} isLogin={isLogin} />
      </div>
      {(isMenuOpen) ? <div onClick={handleMenu} className="header__back" /> : ''}
    </header>
  );
}

export default Header;
