import { PATH_TO } from './constants';
import { apiSettings } from './utils';

const { REGISTER, LOGIN, MOVIES, USER_ME } = PATH_TO;

class Api {
  constructor(options) {
    this._headers = options.headers;
    this._serverURL = options.serverURL;
    // возвращает ответ / ошибку после выполнения промиса
    this._handlePromiseReturn = (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.json().then((res) => res));
    };
  }

  // РАБОТА С ДАННЫМИ ПОЛЬЗОВАТЕЛЯ
  // Регистрируем пользователя на сервер
  register(registerData) {
    return fetch(`${this._serverURL}${REGISTER}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(registerData),
    }).then((res) => this._handlePromiseReturn(res));
  }

  // Авторизуем пользователя на сервер
  authorize(loginData) {
    return fetch(`${this._serverURL}${LOGIN}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    }).then((res) => this._handlePromiseReturn(res));
  }

  // Проверяем токен пользователя на сервере
  checkToken() {
    return fetch(`${this._serverURL}${USER_ME}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('jwt'),
        ...this._headers,
      },
    }).then((res) => this._handlePromiseReturn(res));
  }

  // Отправляет инфо о пользователе на сервер
  setUserData({ name, email }) {
    return fetch(`${this._serverURL}${USER_ME}`, {
      method: 'PATCH',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('jwt'),
        ...this._headers,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._handlePromiseReturn(res));
  }

  // РАБОТА С КАРТОЧКАМИ
  // Получает фильмы с сервера
  getMovies() {
    return fetch(`${this._serverURL}${MOVIES}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('jwt'),
        ...this._headers,
      },
    }).then((res) => this._handlePromiseReturn(res));
  }

  // Отправляет данные о новом фильме на сервер
  addNewMovie(movie) {
    return fetch(`${this._serverURL}${MOVIES}`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('jwt'),
        ...this._headers,
      },
      body: JSON.stringify(movie),
    }).then((res) => this._handlePromiseReturn(res));
  }

  // Удаляет данные о новом фильме на сервер
  removeMovie(id) {
    return fetch(`${this._serverURL}${MOVIES}/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('jwt'),
        ...this._headers,
      },
    }).then((res) => this._handlePromiseReturn(res));
  }

  // getAllData() {
  //   return Promise.all([this.getUserMe(), this.getCards()]);
  // }
}

//Экземпляр API
export const api = new Api(apiSettings);
