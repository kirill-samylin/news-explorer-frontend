import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';

function Main() {
  const [preload, SetPreload] = React.useState(true);
  const contentNews = true; //тестовая переменная для проверки блока
  React.useEffect(() => {
    SetPreload(false);
  }, [])
  return (
    <main className="main">
      <SearchForm />
      {(preload) ? <Preloader isContent={contentNews} /> : <NewsCardList />}
      <About />
    </main>
  );
}

export default Main;