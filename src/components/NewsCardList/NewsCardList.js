import React from 'react';
import './NewsCardList.css';
import { useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
function NewsCardList({ articles, handleSaved, handleDelete, handleForm, quantityCards, loadingCards }) {
  const location = useLocation();
  const isSaved = (location.pathname==="/saved-news");

  return (
    <section className="news">
      {(isSaved) ? '' : <h2 className="news__title">Результаты поиска</h2>}
      <ul className="news__cards">
        {articles && articles.map((card, i) => (
          (i<=quantityCards || isSaved) ? <NewsCard key={i} card={card} handleSaved={handleSaved} handleDelete={handleDelete} handleForm={handleForm} /> : null
        ))}
      </ul>
        {(isSaved || quantityCards>=articles.length) ? null : <button onClick={loadingCards} type="button" className="news__load">Показать еще</button>}
    </section>
  );
}

export default NewsCardList;