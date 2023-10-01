import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  return (
    <section className='movies-list'>
      <ul className='movies-list__list'>
        {props.movies.map((card) => (
          <li className='movies-list__item' key={card.id}>
            <MoviesCard
              card={card}
              onCardClick={() => {}}
              onCardLike={() => {}}
              onDeleteCard={() => {}}
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
