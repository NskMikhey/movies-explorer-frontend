import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useSearch } from '../../hooks/useSearche';
import { useValidate } from '../../hooks/useValidate';
import { LOCALSTORAGE_SEARCH } from '../../utils/constants';

const Movies = (props) => {
  // Стейты данных пользователя, валидации всей формы, инпутов и сообщений ошибок валидации
  const [searchData, setSearchData] = React.useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_SEARCH)) ?? {}
  );

  // Использование самописного хука поиска
  const [movies, handldeSearch] = useSearch(searchData, setSearchData);

  // Использование самописного хука валидации
  const { handleDataChange, formValidationMessages } = useValidate(
    searchData,
    setSearchData
  );

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className='movies'>
        <SearchForm
          searchData={searchData}
          onSubmit={handldeSearch}
          onChange={handleDataChange}
        >
          <FilterCheckbox searchData={searchData} onChange={handleDataChange} />
        </SearchForm>
        <MoviesCardList
          isMoviesPage={props.isMoviesPage}
          movies={movies}
          savedMovies={props.savedMovies}
          onLike={props.onLike}
          onDelete={props.onDelete}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
