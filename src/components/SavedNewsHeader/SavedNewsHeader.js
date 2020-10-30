import React from 'react';
import './SavedNewsHeader.css';
function SavedNewsHeader() {
  return (
    <section className="saved-header">
      <p className="saved-header__paragraph">Сохранённые статьи</p>
      <h1 className="saved-header__title">Грета, у вас 5 сохранённых статей</h1>
      <p className="saved-header__subtitle">По ключевым словам: <span className="saved-header__span">Природа, Тайга и 2-м другим</span></p>
    </section>
  );
}

export default SavedNewsHeader;