import React from 'react';
import './MoviesCard.css';

const MoviesCard = (props) => {
  // Контекст currentUser
  // const currentUser = React.useContext(CurrentUserContext);
  const { nameRu, link, duration, isLiked } = props.card;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  // const isLiked = likes.some((i) => i === currentUser._id);

  // Нажатие на карточку
  function handleClick() {
    props.onCardClick(props.card);
  }
  // Удаление карточки
  function handleDeleteClick() {
    props.onDeleteCard(props.card);
  }
  // Лайк/дизлайк
  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
    <article className='card'>
      <div className='card__info'>
        <h2 className='card__title'>{nameRu}</h2>
        <p className='card__duration'>
          {(duration / 60) | 0}ч {duration % 60}м
        </p>
      </div>
      <img
        src={`${link}`}
        alt={nameRu}
        className='card__image'
        onClick={handleClick}
      />
      <button
        className={`card__like button-hover ${isLiked && 'card__like_active'}`}
        type='button'
        aria-label='Сохранить'
        onClick={props.isMoviesPage ? handleLikeClick : handleDeleteClick}
      >
        {!isLiked ? 'Сохранить' : ''}
      </button>
    </article>
  );
};

export default MoviesCard;
