import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <section className='search'>
      <form className='search-form'>
        <label className='search-form__input-group search-form__input-group_search'>
          <input
            className='search-form__input search-form__input_search'
            type='search'
            placeholder='Фильм'
            // value={card.name || ''}
            name='search'
            id='search'
            required
            // onChange={handleCardChange}
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
