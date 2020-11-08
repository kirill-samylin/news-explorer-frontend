import { mainUrl } from './constants.js';
export const register = (data) => {
  return fetch(`${mainUrl}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject((400 === res.status) ? `${res.status} - Некорректно заполнено одно из полей` : (409 === res.status) ? `Такой email уже используется!` : `Что-то пошло не так: ${res.status}`);
  })
};
export const authorize = (data) => {
  return fetch(`${mainUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject((400 === res.status) ? `${res.status} - Некорректно заполнено одно из полей` : (401 === res.status) ? `Не правильный email или пароль!` : `Что-то пошло не так: ${res.status}`);
  })
};
export const getUserInfo = (token) => {
  return fetch(`${mainUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject((401 === res.status) ? `${res.status} - Переданный токен некорректен` : `Что-то пошло не так: ${res.status}`);
  })
}
export const getInitialArticles = (token) => {
  return fetch(`${mainUrl}/articles`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject((401 === res.status) ? `${res.status} - Переданный токен некорректен` : `Что-то пошло не так: ${res.status}`);
    })
}
export const addArticles = (token, article) => {
  return fetch(`${mainUrl}/articles`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(article)
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject((401 === res.status) ? `${res.status} - Переданный токен некорректен` : `Что-то пошло не так: ${res.status}`);
    })
}
export const deleteArticle = (token, id) => {
  return fetch(`${mainUrl}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject((401 === res.status) ? `${res.status} - Переданный токен некорректен` : `Что-то пошло не так: ${res.status}`);
    })
}
