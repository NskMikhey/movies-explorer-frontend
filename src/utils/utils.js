// Объект настроек для работы с API
import { getAllMoviesApi } from './MoviesApi';
import {
  BASE_URL_MAIN,
  BASE_URL_MOVIE,
  LOCALSTORAGE_MOVIES,
} from './constants';

export const apiSettings = {
  serverURL: BASE_URL_MAIN,
  serverURLMovies: BASE_URL_MOVIE,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

// Получение всех фильмов с сервера beatfilm-movies
export const getAllMovies = async () => {
  try {
    const movies = await getAllMoviesApi();
    localStorage.setItem(LOCALSTORAGE_MOVIES, JSON.stringify(movies));
    return movies;
  } catch (err) {
    err.then((res) => {});
  }
};

// export const SERVER_ERRORS = {
//   400: "Одно из полей не заполнено или не прошло валидацию.",
//   401: "Введен неверный email или пароль.",
//   409: "Пользователь с введенным email уже зарегистрирован.",
// }
