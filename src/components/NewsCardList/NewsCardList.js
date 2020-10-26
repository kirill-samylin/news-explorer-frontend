import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
function NewsCardList({ isSaved }) {
  const count = (isSaved) ? [1, 2, 3, 4, 5] : [1, 2, 3];
  return (
    <section className="news">
      {(isSaved) ? '' : <h2 className="news__title">Результаты поиска</h2>}
      <ul className="news__cards">
        {count && count.map((number) => (
          <NewsCard key={number} isSaved={isSaved} />
        ))}
      </ul>
        {(isSaved) ? '' : <button className="news__load">Показать еще</button>}
    </section>
  );
}

export default NewsCardList;