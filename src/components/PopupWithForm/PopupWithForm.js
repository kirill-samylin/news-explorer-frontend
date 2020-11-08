import React from 'react';
import './PopupWithForm.css';
import { useFormWithValidation } from '../../utils/formValidation';
function PopupWithForm({ isOpen, handleForm, isSuccess, handleLogin, handleRegist, isError, cleaning, loading }) {
  const validate = useFormWithValidation();
  const [isLogin, setIsLogin] = React.useState(true);

  let title = 'Регистрация';
  let link = 'Войти';
  let button = 'Зарегистрироваться';
  if (isLogin) {
    title = 'Вход';
    button = 'Войти';
    link = 'Зарегистрироваться';
  }
  if (isSuccess) {
    title = 'Пользователь успешно зарегистрирован!';
  }
  function onSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      handleLogin(validate.values);
    } else {
      handleRegist(validate.values);
    }
  };
  function onRegisg() {
    validate.resetForm();
    cleaning();
    setIsLogin(!isLogin);
  }
  function handleClose() {
    handleForm();
    validate.resetForm();
  }
  function handleBackgroundClose(e) {
    if (e.target.classList.contains('popup')) {
      handleClose();
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  return (
    <div onClick={handleBackgroundClose} className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <form onSubmit={onSubmit} className="popup__container" method="post" action="#">
        <button onClick={ handleClose } className="button-close popup__button-close" type="button"></button>
        <h2 className="popup__title">{title}</h2>
        {(isSuccess) ? <p onClick={onRegisg} className="popup__login">Войти</p> :
        <>
          <label className="popup__labal" htmlFor="email">Email</label>
          <input onChange={validate.handleChange} name="email" className="popup__input" type="email" placeholder="Введите почту" value={validate.values.email || ''} required/>
          <span className={`popup__span-error ${(validate.errors?.email) ? 'popup__span-error_active' : ''}`}>{validate.errors.email}</span>
          <label className="popup__labal" htmlFor="password">Пароль</label>
          <input onChange={validate.handleChange} name="password" className="popup__input" type="password" minLength="8" maxLength="30" value={validate.values.password || ''} placeholder="Введите пароль" required/>
          <span className={`popup__span-error ${(validate.errors?.password) ? 'popup__span-error_active' : ''}`}>{validate.errors.password}</span>
        </>
        }
        {(isLogin || isSuccess) ? null :
        <>
          <label className="popup__labal" htmlFor="name">Имя</label>
          <input onChange={validate.handleChange} name="name" className="popup__input" type="text" minLength="2" maxLength="30" pattern="[A-Za-zА-Яа-яЁё -]{2,30}" value={validate.values.name || ''} placeholder="Введите имя" required/>
          <span className={`popup__span-error ${(validate.errors?.name) ? 'popup__span-error_active' : ''}`}>{validate.errors.name}</span>
        </>
        }
        {(isSuccess) ? null :
        <>
          <span className={`popup__span-button ${(isError) ? 'popup__span-error_active' : ''}`}>{isError || ' '}</span>
          <button className={`popup__button-add ${!loading && validate.isValid ? 'popup__button-add_active' : ''}`} type="submit" disabled={loading || !validate.isValid}>{button}</button>
          <p className="popup__footer">или<span onClick={onRegisg} className="popup__link">{link}</span></p>
        </>
        }
      </form>
    </div>
  );
}

export default PopupWithForm;