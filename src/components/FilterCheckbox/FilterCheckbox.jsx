import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <>
      <input
        className='search-form__input search-form__input_checkbox'
        type='checkbox'
        // value={card.name || ''}
        name='short'
        id='short'
        // onChange={handleCardChange}
      />

      <label className='search-form__input-group search-form__input-group_checkbox' htmlFor='short' tabindex='0'>
        Короткометражки
      </label>
    </>
  );
};

export default FilterCheckbox;
