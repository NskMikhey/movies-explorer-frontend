import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movieCardList } from '../../utils/data';

const Movies = (props) => {
  return (
    <>
      <Header loggedIn={props.loggedIn}/>
      <main className='movies'>
        <SearchForm>
          <FilterCheckbox />
        </SearchForm>
        <MoviesCardList isMoviesPage={props.isMoviesPage} movies={movieCardList}/>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
