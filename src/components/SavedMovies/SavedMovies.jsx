import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movieCardList } from '../../utils/data';

const SavedMovies = (props) => {
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className='movies'>
        <SearchForm>
          <FilterCheckbox />
        </SearchForm>
        <MoviesCardList
          isMoviesPage={props.isMoviesPage}
          movies={movieCardList.filter((movie) => movie.isLiked)}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
