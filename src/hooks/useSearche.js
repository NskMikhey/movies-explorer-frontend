import React from 'react';
import {
  DURATION_SHORT_MOVIES,
  LOCALSTORAGE_MOVIES,
  LOCALSTORAGE_SEARCH,
  MESSAGE_TEXT,
  PATH_TO,
} from '../utils/constants';
import { getAllMovies } from '../utils/utils';
import { useLocation } from 'react-router-dom';
import { SavedMoviesContext } from '../contexts/SavedMoviesContext';
import { logRoles } from '@testing-library/react';

export const useSearch = (values, setValues) => {
  // Подписка на контекст сохраненных фильмов
  const savedMovies = React.useContext(SavedMoviesContext);
  // Стейты данных пользователя, валидации всей формы, инпутов и сообщений ошибок валидации
  const [movies, setMovies] = React.useState([]);
  // Извлечение роута
  const { pathname } = useLocation();
  // Активация загрузки
  const [isLoading, setLoading] = React.useState(false);
  // Сообщения об ошибках поиска
  const [message, setMessage] = React.useState('');

  // Фильтрация фильмов
  const filterMovies = (values, moviesList) => {
    const flteredMovies = moviesList.filter(
      (movie) =>
        movie.nameRU
          .trim()
          .toLowerCase()
          .includes(values.search.trim().toLowerCase()) ||
        movie.nameEN
          .trim()
          .toLowerCase()
          .includes(values.search.trim().toLowerCase())
    );
    if (values.short) {
      return flteredMovies.filter(
        (movie) => movie.duration <= DURATION_SHORT_MOVIES
      );
    } else {
      return flteredMovies;
    }
  };

  // Данные для фильтрации
  let data = {};
  switch (pathname) {
    case PATH_TO.MOVIES:
      data = {
        moviesList: JSON.parse(localStorage.getItem(LOCALSTORAGE_MOVIES)) ?? [],
        installationEffect: () => {
          if (LOCALSTORAGE_MOVIES in localStorage) {
            setMovies(JSON.parse(localStorage.getItem(LOCALSTORAGE_MOVIES)));
            setValues(JSON.parse(localStorage.getItem(LOCALSTORAGE_SEARCH)));
            setMovies(flteredMovies);
          }
        },
        changeEffect: () => {},
        searchEffect: () => {
          localStorage.setItem(LOCALSTORAGE_SEARCH, JSON.stringify(values));
          setMovies(flteredMovies);
        },
      };
      break;
    case PATH_TO.SAVED_MOVIES:
      data = {
        moviesList: savedMovies,
        installationEffect: () => {
          setMovies(savedMovies);
        },
        changeEffect: () => {
          setMovies(savedMovies);
        },
        searchEffect: () => {
          setMovies(flteredMovies);
        },
      };
      break;
    default:
      break;
  }

  // Деструктуризация данных для фильтрации
  const { moviesList, installationEffect, changeEffect, searchEffect } = data;

  // Отфильтрованные фильмы
  const flteredMovies = filterMovies(values, moviesList);

  // Извлечение данных из локалстореджа и установка их
  React.useEffect(() => {
    installationEffect();
  }, []);

  // Обновление компонента при изменении сохраненных фильмов
  React.useEffect(() => {
    changeEffect();
  }, [savedMovies]);

  // Применение фильтрации чекбокса
  React.useEffect(() => {
    searchEffect();
  }, [values.short]);

  // Выставление сообщения поиска
  React.useEffect(() => {
    if (movies.length === 0 && LOCALSTORAGE_MOVIES in localStorage) {
      setMessage(MESSAGE_TEXT.noMovies);
    }
  }, [movies]);

  // Запуск фильтрации по сабмиту
  const handldeSearch = async () => {
    setMessage('');
    if (values.search.length === 0) {
      setMessage(MESSAGE_TEXT.emptyString);
      return;
    }
    if (!(LOCALSTORAGE_MOVIES in localStorage) && pathname === PATH_TO.MOVIES) {
      try {
        localStorage.setItem(LOCALSTORAGE_SEARCH, JSON.stringify(values));
        setLoading(true);
        const allMovies = await getAllMovies();
        setMovies(filterMovies(values, allMovies));
        setLoading(false);
        return;
      } catch (err) {
        setLoading(false);
        setMessage(MESSAGE_TEXT.serverError);
      }
    }
    searchEffect();
  };

  return { movies, handldeSearch, isLoading, message };
};
