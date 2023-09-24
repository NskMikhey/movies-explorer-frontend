import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = (props) => {

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm>
          <FilterCheckbox />
        </SearchForm>
        <MoviesCardList isMoviesPage={props.isMoviesPage}/>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
