import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { search } from '../../utils/NewsApi';
import * as api from '../../utils/MainApi';
import { loadStatus, notFoundStatus, errorStatus } from '../../utils/constants.js';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
function App() {
  const [popupWithForm, setPopupWithForm] = React.useState(false);
  const [preload, setPreload] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [isError, setIsError] = React.useState('');
  const [user, setUser] = React.useState({});
  const [isSuccess, setIsSuccess] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [quantityCards, setQuantityCards] = React.useState(2);
  function comparisonArt(one, two) {
    return one.text===two.text && one.title===two.title && one.date===two.date
  }
  function cleaningError() {
    setIsError('');
    setIsSuccess(false);
  }
  function handleForm() {
    cleaningError();
    setPopupWithForm(!popupWithForm);
  }
  function loadingCards() {
    if (cards.length>quantityCards) {
      setQuantityCards(quantityCards + 3);
    }
  }
  function saveLocalCards(data, articles = savedArticles) {
    const result = data.map((art) => {
      const card = articles.find((i) => comparisonArt(i, art));
      if (card && !art._id) {
        art._id = card._id;
      } else if (!card && art._id) {
        delete art._id;
      }
      return art;
    });
    setCards(result);
    localStorage.setItem('articles', JSON.stringify(result));
  }
  function handleSearch(words) {
    if (words.length===0) return;
    setLoading(true);
    saveLocalCards([]);
    setPreload(loadStatus);
    setQuantityCards(2);
    search(words)
      .then((data) => {
        if (data.status === 'ok' && data.totalResults) {
          const result = data.articles.map((art) => ({
            keyword: words,
            title: art.title,
            text: art.description,
            date: art.publishedAt,
            source: art.source?.name || art.author || '',
            link: art.url,
            image: art.urlToImage,
          }));
          saveLocalCards(result);
          setPreload({});
        } else {
          setPreload(notFoundStatus);
        }
      })
      .catch((err) => {
        setPreload(errorStatus);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }
  function handleSaved(article) {
    const token = localStorage.getItem('token');
    api.addArticles(token, article)
      .then((art) => {
        const result = [...savedArticles, art];
        setSavedArticles(result);
        saveLocalCards(cards, result);
      })
      .catch((err) => console.log(err));
  }
  function handleDelete(article) {
    const token = localStorage.getItem('token');
    api.deleteArticle(token, article._id)
      .then((art) => {
        const saved = savedArticles.filter((i) => (!comparisonArt(i, article)));
        setSavedArticles(saved);
        saveLocalCards(cards, saved);
        console.log(art);
      })
      .catch((err) => console.log(err))
  }
  function getUserInfo(token) {
    Promise.all([api.getUserInfo(token), api.getInitialArticles(token)])
      .then(([user, articles]) => {
        setUser(user);
        const localCards = JSON.parse(localStorage.getItem('articles') || []);
        setSavedArticles(articles);
        saveLocalCards(localCards, articles);
      })
      .catch((err) => console.log(err));
  }
  function handleRegist(data) {
    setLoading(true);
    api.register(data)
      .then((user) => {
        setIsSuccess(true);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      })
      .finally(() => setLoading(false));
  }
  function handleLogin(data) {
    setLoading(true);
    api.authorize(data)
      .then((data) => {
        handleForm();
        getUserInfo(data.token);
        localStorage.setItem('token', data.token);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => setLoading(false));
  }
  function onSignOut() {
    localStorage.removeItem('token');
    setUser({});
    setSavedArticles([]);
    saveLocalCards(cards, []);
  }
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserInfo(token);
    } else {
      const localCards = JSON.parse(localStorage.getItem('articles') || []);
      saveLocalCards(localCards);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CurrentUserContext.Provider value={user}>
      <Header handleForm={handleForm} isForm={popupWithForm} onSignOut={onSignOut} />
      <Switch>
        <ProtectedRoute path="/saved-news" articles={savedArticles} handleDelete={handleDelete} component={SavedNews} />
        <Route path="/">
          <Main
            isPreload={preload}
            articles={cards}
            handleSearch={handleSearch}
            handleSaved={handleSaved}
            handleDelete={handleDelete}
            handleForm={handleForm}
            loading={loading}
            quantityCards={quantityCards}
            loadingCards={loadingCards}
          />
          <PopupWithForm
            isOpen={popupWithForm}
            handleForm={handleForm}
            isSuccess={isSuccess}
            handleLogin={handleLogin}
            handleRegist={handleRegist}
            isError={isError}
            cleaning={cleaningError}
            loading={loading}
          />
        </Route>
      </Switch>
      <Footer />
    </CurrentUserContext.Provider>
  );
}
export default App;
