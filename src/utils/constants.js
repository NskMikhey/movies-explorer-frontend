// КОНСТАНТЫ ДЛЯ ПРОЕКТА
// API URL
export const BASE_URL_MAIN = 'https://api.nskmikhey.nomoredomainsicu.ru';
export const BASE_URL_MOVIE = 'https://api.nomoreparties.co';

// Имен в localStorage
export const LOCALSTORAGE_ISLOGGEDIN = 'isLoggedIn';
export const LOCALSTORAGE_JWT = 'jwt';
export const LOCALSTORAGE_SEARCH = 'search';
export const LOCALSTORAGE_MOVIES = 'movies';

// Роуты приложения
export const PATH_TO = {
  MAIN: '/',
  REGISTER: '/signup',
  LOGIN: '/signin',
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  PROFILE: '/profile',
  ANY_OTHER: '/*',
  USER_ME: '/users/me',
  BEATFILM: '/beatfilm-movies',
};

// ССылки на сторонние ресурсы
export const LINK_GITHUB = 'https://github.com/NskMikhey';
export const LINK_STATIC = 'https://github.com/NskMikhey/how-to-learn';
export const LINK_ADAPTIVE = 'https://github.com/NskMikhey/russian-travel';
export const LINK_APPLICATION =
  'https://github.com/NskMikhey/react-mesto-api-full-gha';

// Devices
export const DEVICE_PARAMETERS = {
  desktop: {
    device: 'desktop',
    maxMovies: 16,
    moreMovies: 4,
  },
  mobile: {
    device: 'mobile',
    maxSize: 920,
    maxMovies: 5,
    moreMovies: 2,
  },
  tablet: {
    device: 'tablet',
    maxSize: 767,
    maxMovies: 8,
    moreMovies: 2,
  },
};

// Timeouts and time
export const TIMEOUT = {
  preloader: 500,
  register: 2000,
  download: 1500,
  resize: 500,
};

export const REGX_NAME = /^[a-zA-Zа-яА-Я\s-]+$/;
export const REGX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const REGX_ALL = /^/;
export const DURATION_SHORT_MOVIES = 40;

// Message texts
export const MESSAGE_TEXT = {
  register: 'Вы успешно зарегистрировались!',
  login:'Добро пожаловть!',
  noEmail: 'Введен некоректный e-mail. Пример корректного ввода: pochta@yandex.ru',
  noName: 'Поле должно содержать только латиницу, кириллицу, пробел или дефис',
  noMovies: 'Ничего не найдено',
  // beforeSearching: 'Введите название фильма для начала поиска',
  saveProfile: 'Данные успешно изменены',
  emptyString: 'Нужно ввести ключевое слово',
  serverError:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};
