import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  // Поиск фильмов
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit();
  };
// ToDo: добавить ToolTip для сообщения инфы по поиску
  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit} noValidate>
        <label className='search-form__input-group search-form__input-group_search'>
          <input
            className='search-form__input search-form__input_search'
            type='search'
            placeholder='Фильм'
            value={props.searchData.search}
            name='search'
            id='search'
            required
            onChange={props.onChange}
          />
        </label>
        {props.children}
        <button className='search-form__submit button-hover' type='submit'>
          Поиск
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
