import React from 'react';
import './SearchForm.css';
function SearchForm({ handleSearch, loading }) {
  const [words, setWords] = React.useState('');
  function handleInput(e) {
    setWords(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(words);
  }
  return (
    <section className="search">
      <h1 className="search__title ">Что творится в мире?</h1>
      <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form onSubmit={handleSubmit}  className="search__form" method="post" action="#">
        <input onChange={handleInput} type="text" className="search__input" placeholder="Введите тему новости" value={words || ''} required/>
        <button type="submit" className="search__button" disabled={loading}>Искать</button>
      </form>
    </section>
  );
}

export default SearchForm;