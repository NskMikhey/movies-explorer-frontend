import React from 'react';
import './MoviesCard.css';
import { BASE_URL_MOVIE } from '../../utils/constants';

const MoviesCard = (props) => {
  // Деструктуризация данных фильма
  const {
    nameEN,
    nameRU,
    duration,
    image,
    country,
    director,
    year,
    description,
    trailerLink,
    id,
  } = props.card;

  // Определяем сохранен ли фильм
  const isLiked =
    props.isMoviesPage &&
    props.savedMovies.some((i) => i.movieId === props.card.id);

  // Нажатие на карточку фильма
  function handleClick() {
    window.open(trailerLink, '_blank', 'noopener noreferrer');
  }
  
  // Удаление фильма
  function handleDeleteClick() {
    const id = props.isMoviesPage
      ? props.savedMovies.find((item) => item.movieId === props.card.id)._id
      : props.card._id;
    props.onDelete(id);
  }

  // Добавление фильма в избранное
  function handleLikeClick() {
    // Данные сохраняемого фильма
    const movieAdded = {
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: BASE_URL_MOVIE + image.url,
      trailerLink: trailerLink,
      nameRU: nameRU,
      nameEN: nameEN,
      thumbnail: BASE_URL_MOVIE + image.formats.thumbnail.url,
      movieId: id,
    };
    props.onLike(movieAdded);
  }

  return (
    <article className='card'>
      <div className='card__info'>
        <h2 className='card__title'>{nameRU}</h2>
        <p className='card__duration'>
          {(duration / 60) | 0}ч {duration % 60}м
        </p>
      </div>
      <img
        src={props.isMoviesPage ? BASE_URL_MOVIE + image.url : image}
        alt={nameRU}
        className='card__image'
        onClick={handleClick}
      />
      {props.isMoviesPage ? (
        <button
          className={`card__like button-hover ${
            isLiked && 'card__like_active'
          }`}
          type='button'
          aria-label='Сохранить'
          onClick={!isLiked ? handleLikeClick : handleDeleteClick}
        >
          {!isLiked ? 'Сохранить' : ''}
        </button>
      ) : (
        <button
          className='card__like button-hover card__like_delete'
          type='button'
          aria-label='Удалить'
          onClick={handleDeleteClick}
        />
      )}
    </article>
  );
};

export default MoviesCard;
