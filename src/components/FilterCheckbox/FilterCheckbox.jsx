import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <>
      <input
        className='search-form__input search-form__input_checkbox'
        type='checkbox'
        name='short'
        id='short'
        checked={props.searchData.short}
        onChange={props.onChange}
      />

      <label
        className='search-form__input-group search-form__input-group_checkbox'
        htmlFor='short'
        tabIndex='0'
      >
        Короткометражки
      </label>
    </>
  );
};

export default FilterCheckbox;
