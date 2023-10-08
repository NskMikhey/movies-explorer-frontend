import React from 'react';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

import { api } from '../../utils/MainApi';
import {
  LOCALSTORAGE_ISLOGGEDIN,
  LOCALSTORAGE_JWT,
  MESSAGE_TEXT,
  PATH_TO,
} from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  // Деструктурируем все переменные путей
  const { MAIN, REGISTER, LOGIN, MOVIES, SAVED_MOVIES, PROFILE, ANY_OTHER } =
    PATH_TO;

  // Состояние пользователя — вошёл он в систему или нет
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem(LOCALSTORAGE_ISLOGGEDIN)
  );

  //Стейт активации формы
  const [isFormActive, setFormActive] = React.useState(false);

  // Тип Popup Tooltip карточки
  const [infoTooltip, setInfoTooltip] = React.useState({});

  // Состояние Popup Tooltip карточки
  const [infoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  // История переходов страниц
  const navigate = useNavigate();

  // Состояние контекста пользователя
  const [currentUser, setCurrentUser] = React.useState({
    isLoggedIn: localStorage.getItem(LOCALSTORAGE_ISLOGGEDIN) ?? false,
    name: '',
    email: '',
  });

  // Состояние массива сохраненных фильмов с сервера
  const [savedMovies, setSavedMovies] = React.useState([]);

  // Состояние ответов сервера
  const [response, setResponse] = React.useState({});

  // Открывает Popup Tooltip
  function handleInfoTooltipPopupOpen() {
    setInfoTooltipOpen(true);
  }

  // Закрывает все Popups
  function closePopups() {
    setInfoTooltipOpen(false);
  }

  // Вход, запись и полученного токена
  const authorization = (inputValues) => {
    api
      .authorize(inputValues)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          navigate(MOVIES, { replace: true });
          setCurrentUser({ ...currentUser, isLoggedIn: true });
          localStorage.setItem(LOCALSTORAGE_JWT, res.token);
          localStorage.setItem(LOCALSTORAGE_ISLOGGEDIN, true);
        }
      })
      .catch((err) => {
        err.then((res) => {
          handleInfoTooltipPopupOpen();
          setInfoTooltip({ type: 'error', message: res.message });
        });
      });
  };

  // Регистрация
  const registration = (inputValues) => {
    api
      .register(inputValues)
      .then(() => {
        setInfoTooltip({ type: 'reg_success' });
        handleInfoTooltipPopupOpen();
        authorization(inputValues);
      })
      .catch((err) => {
        err.then((res) => {
          handleInfoTooltipPopupOpen();
          setInfoTooltip({ type: 'error', message: res.message });
        });
      });
  };

  // Получает данные пользователя по токену, проверка валидности токена
  const tokenCheck = () => {
    if (LOCALSTORAGE_JWT in localStorage) {
      api
        .checkToken()
        .then(({ data }) => {
          if (data) {
            setCurrentUser({
              name: data.name,
              email: data.email,
              isLoggedIn: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setCurrentUser({ isLoggedIn: false });
          localStorage.clear();
          navigate(MAIN, { replace: true });
        });
    }
  };

  // // Проверка токена
  // React.useEffect(() => {
  //   tokenCheck();
  // }, [loggedIn]);

  // Отправка данных пользователя, обновление стейта currentUser
  function handleUpdateUser(inputValues) {
    api
      .setUserData(inputValues)
      .then((user) => {
        console.log(user.data);
        setCurrentUser({
          name: user.data.name,
          email: user.data.email,
          isLoggedIn: true,
        });
        setFormActive(false);
        setResponse({ type: 'success', message: MESSAGE_TEXT.saveProfile });
      })
      .catch((err) => {
        err.then((res) => {
          setResponse({ type: 'error', message: res.message });
        });
      });
  }

  // Получение сохраненных фильмов
  React.useEffect(() => {
    tokenCheck();
    if (currentUser.isLoggedIn) {
      api
        .getMovies()
        .then((movies) => {
          setSavedMovies(movies.data);
        })
        .catch((err) => {
          err.then((res) => {
            setResponse({ type: 'error', message: res.message });
          });
        });
    }
  }, [currentUser.isLoggedIn]);

  // Добавления фильма в сохраненные
  function handleMovieLike(movie) {
    api
      .addNewMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie.data]);
      })
      .catch((err) => {
        err.then((res) => {
          setResponse({ type: 'error', message: res.message });
        });
      });
  }

  // Удаление фильма из сохраненных
  function handleDeletLike(movieId) {
    api
      .removeMovie(movieId)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((item) => item._id !== movieId)
        );
      })
      .catch((err) => {
        err.then((res) => {
          setResponse({ type: 'error', message: res.message });
        });
      });
  }

  // Выход, удаление токена
  const signOut = () => {
    localStorage.clear();
    setCurrentUser({});
    navigate(MAIN);
    setLoggedIn(false);
    setResponse({});
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <div className='App'>
          <Routes>
            <Route
              path={MAIN}
              element={<Main loggedIn={loggedIn} isLanding='true' />}
            />
            <Route
              path={MOVIES}
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  isLanding={false}
                  isMoviesPage={true}
                  savedMovies={savedMovies}
                  onLike={handleMovieLike}
                  onDelete={handleDeletLike}
                />
              }
            />
            <Route
              path={SAVED_MOVIES}
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  isLanding={false}
                  isMoviesPage={false}
                  savedMovies={savedMovies}
                  onDelete={handleDeletLike}
                />
              }
            />
            <Route
              path={PROFILE}
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  isLanding={false}
                  signOut={signOut}
                  handleUpdateUser={handleUpdateUser}
                  response={response}
                  isFormActive={isFormActive}
                  setFormActive={setFormActive}
                  setResponse={setResponse}
                />
              }
            />
            <Route
              path={REGISTER}
              element={
                loggedIn ? (
                  <Navigate to={MAIN} replace />
                ) : (
                  <Register
                    registration={registration}
                    InfoTooltip={infoTooltipOpen}
                  />
                )
              }
            />
            <Route
              path={LOGIN}
              element={
                loggedIn ? (
                  <Navigate to={MAIN} replace />
                ) : (
                  <Login authorization={authorization} />
                )
              }
            />
            <Route path={ANY_OTHER} element={<ErrorPage />} />
          </Routes>

          <InfoTooltip
            popupOpen={infoTooltipOpen}
            onClose={closePopups}
            infoTooltip={infoTooltip}
          />
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
