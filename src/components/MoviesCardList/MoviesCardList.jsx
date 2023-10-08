import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  return (
    <section className='movies-list'>
      <ul className='movies-list__list'>
        {props.movies.map((card) => (
          <li className='movies-list__item' key={card.id || card.movieId}>
            <MoviesCard
              card={card}
              onCardClick={() => {}}
              onDeleteCard={() => {}}
              isMoviesPage={props.isMoviesPage}
              savedMovies={props.savedMovies}
              onLike={props.onLike}
              onDelete={props.onDelete}
            />
          </li>
        ))}
      </ul>
      <div className='movies-list__more-button-container'>
        {props.isMoviesPage && (
          <button
            type='button'
            onClick={() => {}}
            className='movies-list__more-button button-hover'
          >
            Еще
          </button>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;
