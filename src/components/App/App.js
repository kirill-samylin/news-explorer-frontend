import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
function App() {
  const [popupWithForm, SetPopupWithForm] = React.useState(false);
  function handleLogin() {
    SetPopupWithForm(!popupWithForm);
  }

  return (
    <>
      <Switch>
        <Route path="/saved-news">
          <Header isSaved={true} isLogin={handleLogin} isForm={popupWithForm} />
          <SavedNews isSaved={true} />
        </Route>
        <Route path="/">
          <Header isLogin={handleLogin} isForm={popupWithForm} />
          <Main />
          <PopupWithForm isOpen={popupWithForm} isClose={handleLogin} isConfirm={false} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
