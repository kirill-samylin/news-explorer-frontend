import React from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
function SavedNews({ articles, handleDelete }) {
  return (
    <main className="saved">
      <SavedNewsHeader articles={articles} />
      {(articles && articles.length) ?
        <NewsCardList articles={articles} handleDelete={handleDelete} />
      : null}
    </main>
  );
}

export default SavedNews;