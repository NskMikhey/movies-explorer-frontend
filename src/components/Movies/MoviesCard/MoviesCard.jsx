import {useLocation} from "react-router-dom";
import './MoviesCard.css'
import {calculateDuration} from "../../../utils/utils";

export function MoviesCard({movieCard}) {
  const location = useLocation();
  const duration = calculateDuration(movieCard.duration);

  function getButtonType() {
    if (location.pathname === '/saved-movies') {
      return "delete"
    }
    if (movieCard.saved) {
      return "saved"
    }
    return "generic"
  }

  const buttonType = getButtonType();

  return (
    <li className="movies-card">
      <article className="movies-card__container">
        <img src={movieCard.image} alt={movieCard.nameRu} className="movies-card__image"/>
        <div className="movies-card__title-container">
          <h2 className="movies-card__title">{movieCard.nameRu}</h2>
          <p className="movies-card__duration">{duration}</p>
        </div>
        {{
          delete: <button type="button" className="movies-card__button-delete button-hover"/>,
          saved: <button type="button"
                         className="movies-card__save-button movies-card__save-button_saved button-hover">✓</button>,
          generic: <button type="button" className="movies-card__save-button button-hover">Сохранить</button>
        }[buttonType]}
      </article>
    </li>
  )
}