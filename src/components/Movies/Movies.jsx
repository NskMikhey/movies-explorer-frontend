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
import useScreenSize from '../../hooks/useScreenSize';

const Movies = (props) => {
  // Стейты данных пользователя, валидации всей формы, инпутов и сообщений ошибок валидации
  const [searchData, setSearchData] = React.useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_SEARCH)) ?? {
      search: '',
      short: false,
    }
  );

  // Стейт видимости кнопки Еще
  const [isButtonVisible, setButtonVisible] = React.useState(false);

  // Использование самописного хука поиска
  const { movies, handldeSearch, isLoading, message } = useSearch(
    searchData,
    setSearchData
  );
  // Использование самописного хука отслеживания ширины экрана
  const screenWidth = useScreenSize();

  // Стейт максимального количесвта фильмов при начале поиска
  const [maxMovies, setMaxMovies] = React.useState(0);

  // Стейт количества добавляемых к отображению фильмов
  const [moreMovies, setMoreMovies] = React.useState(0);

  // Использование самописного хука валидации
  const { handleDataChange } = useValidate(searchData, setSearchData);

  // Данные количества фильмов в зависимости от разрешения экрана
  let dataVisible;
  switch (true) {
    case screenWidth <= 768:
      dataVisible = {
        more: 2,
        max: 5,
      };
      break;
    case screenWidth <= 920:
      dataVisible = {
        more: 2,
        max: 8,
      };
      break;
    default:
      dataVisible = {
        more: 3,
        max: 12,
      };
      break;
  }

  // Добавление фильмов для отображения
  function handleClickMore() {
    setMaxMovies((maxMovies) => maxMovies + moreMovies);
  }

  // Установка количества фильмов в зависимости от ширины экрана
  React.useEffect(() => {
    setMaxMovies(dataVisible.max);
    setMoreMovies(dataVisible.more);
  }, [screenWidth, movies]);

  // Видимость кнопки Еще
  React.useEffect(() => {
    if (movies.length > maxMovies) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  }, [movies, maxMovies]);

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className='movies'>
        <SearchForm
          searchData={searchData}
          onSubmit={handldeSearch}
          onChange={handleDataChange}
          message={message}
        >
          <FilterCheckbox searchData={searchData} onChange={handleDataChange} />
        </SearchForm>
        <MoviesCardList
          isMoviesPage={props.isMoviesPage}
          movies={movies.slice(0, maxMovies)}
          savedMovies={props.savedMovies}
          onLike={props.onLike}
          onDelete={props.onDelete}
          isButtonVisible={isButtonVisible}
          handleClickMore={handleClickMore}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
