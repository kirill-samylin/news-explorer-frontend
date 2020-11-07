import React from 'react';
import './Preloader.css';
function Preloader({ isPreload }) {
  const iconClass = (isPreload.loading) ? 'icon-preloader' : 'icon-not';
  return (
    <section className="preloader">
      <i className={iconClass} />
      {(isPreload.title) ? <h3 className="preloader__title">{isPreload.title}</h3> : null}
      <p className="preloader__paragraph">{isPreload.message}</p>
    </section>
  );
}

export default Preloader;