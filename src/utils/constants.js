export const mainUrl = 'https://www.api.samylin.students.nomoreparties.co';
export const newsUrl = 'https://nomoreparties.co/news/v2';
export const apiKey = 'd79757a07e4a4a60a437197db0e4348d';
export const pageSize = '100';
export const language = 'ru';
export const getDateAgo = (date, days) => {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy;
}
export const loadStatus = {
  visibility: true,
  loading: true,
  message: 'Идет поиск новостей...',
};
export const notFoundStatus = {
  visibility: true,
  loading: false,
  title: 'Ничего не найдено',
  message: 'К сожалению по вашему запросу ничего не найдено.',
};
export const errorStatus = {
  visibility: true,
  loading: false,
  message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
};