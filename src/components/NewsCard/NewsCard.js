import React from 'react';
import './NewsCard.css';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
function NewsCard({ card, handleSaved, handleDelete, handleForm }) {
  const [line, setLine] = React.useState(0);
  const titleElement = React.createRef();
  const user = React.useContext(CurrentUserContext);
  const { keyword, title, text, date, source, link, image, _id } = card;
  const location = useLocation();
  const isSaved = (location.pathname==="/saved-news");
  const dataParse = new Date(date);
  const data = `${dataParse.toLocaleString("ru", { month: 'long', day: 'numeric' })}, ${dataParse.getFullYear()}`;
  let warningMsg = (isSaved || _id) ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи';
  let buttonClass = (_id) ? 'icon-active' : 'icon-rectangle';
  if (user.name && user.email && _id && isSaved) {
    warningMsg = 'Убрать из сохранённых';
    buttonClass = 'icon-delete';
  }
  const descriptionStyle = {
    WebkitLineClamp: line
  };

  function handleClick() {
    if (user.name && user.email) {
      if (!_id) {
        handleSaved(card);
      } else {
        handleDelete(card);
      }
    } else {
      handleForm();
    }
  }
  React.useEffect(() => {
    setLine(Math.floor((titleElement.current.parentElement.clientHeight-titleElement.current.clientHeight)/22));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <li className="news__card">
      <img className="news__photo" src={image} alt={keyword} />
      <p className="news__date">{data}</p>
      <div className="news__info">
        <h3 ref={titleElement} className="news__name">{title}</h3>
        <p className="news__paragraph" style={descriptionStyle}>{text}</p>
      </div>
      <a href={link} className="news__portal" target="_blank" rel="noopener noreferrer" >{source}</a>
      {(isSaved) ? <button className="news__category">{keyword}</button> : ''}
      <button onClick={handleClick} className={`news__button ${buttonClass}`} />
      {(!isSaved && user.name && user.email && !_id) ? null : <div className="news__warning">{warningMsg}</div>}
    </li>
  );
}

export default NewsCard;