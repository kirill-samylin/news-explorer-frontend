import { newsUrl, apiKey, getDateAgo } from './constants.js';

export const search = (words) => {
  const dataNow = new Date();
  const dataPast = getDateAgo(dataNow, 7);

  return fetch(`${newsUrl}/everything?q=${words}&apiKey=${apiKey}&pageSize=100&from=${dataPast.toISOString()}&to=${dataNow.toISOString()}&language=ru`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiKey,
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject((400 === res.status) ? `${res.status} - Некорректно заполнено одно из полей` : `Что-то пошло не так: ${res.status}`);
  })
};