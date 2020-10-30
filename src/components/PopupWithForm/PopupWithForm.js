import React from 'react';
import './PopupWithForm.css';
function PopupWithForm({ isOpen, isClose, isConfirm }) {
  const [isLogin, SetIsLogin] = React.useState(true);
  let title = 'Регистрация';
  let link = 'Войти';
  let button = 'Зарегистрироваться';
  if (isLogin) {
    title = 'Вход';
    button = 'Войти';
    link = 'Зарегистрироваться';
  }
  if (isConfirm) {
    title = 'Пользователь успешно зарегистрирован!';
  }
  function onRegisg() {
    SetIsLogin(!isLogin);
  }
  function handleClose(e) {
    if (e.target.classList.contains('popup')) {
      isClose();
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        isClose();
      }
    });
  }, [isClose, isOpen]);
  return (
    <div onClick={handleClose} className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container" method="post" action="#">
        <button onClick={ isClose } className="button-close popup__button-close" type="button"></button>
        <h2 className="popup__title">{title}</h2>
        {(isConfirm) ? <p onClick={onRegisg} className="popup__login">Войти</p> :
        <>
          <label className="popup__labal" htmlFor="email">Email</label>
          <input id="email" className="popup__input" type="email" required placeholder="Введите почту" />
          <span className="popup__span-error popup__span-error_active">Неправильный формат email</span>
          <label className="popup__labal" htmlFor="password">Пароль</label>
          <input className="popup__input" id="password" type="password" minLength="8" maxLength="30" required  placeholder="Введите пароль"/>
          <span className="popup__span-error popup__span-error_active">Неправильный формат пароля</span>
        </>
        }
        {(isLogin && isConfirm) ? '' :
        <>
          <label className="popup__labal" htmlFor="name">Имя</label>
          <input className="popup__input" id="name" type="text" minLength="2" maxLength="30" pattern="[A-Za-zА-Яа-яЁё -]{2,30}" required placeholder="Введите имя" />
          <span className="popup__span-error popup__span-error_active">Неправильный формат имени</span>
        </>
        }
        {(isConfirm) ? '' :
        <>
          <span className="popup__span-button popup__span-error_active">Такой пользователь уже есть</span>
          <button className="popup__button-add popup__button-add_disabled" type="submit" disabled>{button}</button>
          <p className="popup__footer">или<span onClick={onRegisg} className="popup__link">{link}</span></p>
        </>
        }
      </form>
    </div>
  );
}

export default PopupWithForm;