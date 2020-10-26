import React from 'react';
import './NewsCard.css';
import photo from '../../images/photo.png';
function NewsCard({ isSaved }) {
  let warningMsg = 'Войдите, чтобы сохранять статьи';
  let buttonClass = 'icon-rectangle';
  if (isSaved) {
    warningMsg = 'Убрать из сохранённых';
    buttonClass = 'icon-delete';
  }
  return (
    <li className="news__card">
      <img className="news__photo" src={photo} alt="Картинка" />
      <p className="news__date">2 августа, 2019</p>
      <h3 className="news__name">Национальное достояние – парки</h3>
      <p className="news__paragraph">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
      <p className="news__portal">Лента.ру</p>
      {(isSaved) ? <button className="news__category">Парки</button> : ''}
      <button className={`news__button ${buttonClass}`} />
      <div className="news__warning">{warningMsg}</div>
    </li>
  );
}

export default NewsCard;