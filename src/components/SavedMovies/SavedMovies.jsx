import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useValidate } from '../../hooks/useValidate';
import { useSearch } from '../../hooks/useSearche';

const SavedMovies = (props) => {
  // Стейты данных пользователя, валидации всей формы, инпутов и сообщений ошибок валидации
  const [searchData, setSearchData] = React.useState({
    search: '',
    short: false,
  });
  
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
          onDelete={props.onDelete}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
