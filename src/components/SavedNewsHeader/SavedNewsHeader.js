import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
function SavedNewsHeader({ articles }) {
  const user = React.useContext(CurrentUserContext);
  const keysCount = articles.reduce((obj, key) => {
    if (obj[key.keyword]) {
      obj[key.keyword] += 1;
    } else {
      obj[key.keyword] = 1;
    }
    return obj
  }, {});
  const keysArray = Object.entries(keysCount).sort((a, b) => b[1] - a[1]);
  const count = (keysArray.length<=3) ? keysArray.length : 2;
  const keysString = keysArray.reduce((str, arr, i) => {
    str+=`${(i<count) ? (arr[0].slice(0, 1).toUpperCase()+arr[0].slice(1)) : ''}${(i<count-1) ? ', ' : ''} `;
    return str;
  }, '');
  const keysText = (keysArray.length>3) ? ` и ${keysArray.length-2}-м другим` : '.';
  function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }
  const savedText = declOfNum(count, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);
  return (
    <section className="saved-header">
      <p className="saved-header__paragraph">Сохранённые статьи</p>
      <h1 className="saved-header__title">{`${user.name}, у вас ${count} ${savedText}`}</h1>
      {(count) ?
      <p className="saved-header__subtitle">По ключевым словам: <span className="saved-header__span">{keysString+keysText}</span></p>
      : null}
    </section>
  );
}

export default SavedNewsHeader;