import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
function SavedNews({ isSaved }) {
  return (
    <main className="saved">
      <SavedNewsHeader />
      <NewsCardList isSaved={isSaved} />
    </main>
  );
}

export default SavedNews;