import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';

function Main({ isPreload, articles, handleSearch, handleSaved, handleDelete, handleForm, loading, quantityCards, loadingCards }) {
  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch} loading={loading} />
      {(isPreload.visibility) ? <Preloader isPreload={isPreload} /> : null}
      {(articles && articles.length) ?
        <NewsCardList
          articles={articles}
          handleSaved={handleSaved}
          handleDelete={handleDelete}
          handleForm={handleForm}
          quantityCards={quantityCards}
          loadingCards={loadingCards}
        />
      : null}
      <About />
    </main>
  );
}

export default Main;