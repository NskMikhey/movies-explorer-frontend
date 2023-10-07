import { PATH_TO } from './constants';
import { apiSettings } from './utils';

const {
  MAIN,
  REGISTER,
  LOGIN,
  MOVIES,
  SAVED_MOVIES,
  PROFILE,
  ANY_OTHER,
  USER_ME,
  BEATFILM,
} = PATH_TO;

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
    console.log(loginData);
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

  //Отправляет инфо о пользователе на сервер
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

  //   // Метот передачи данных пользователя на сервер
  //   setUserInfoApi(userData) {
  //     return this._request(`${this._baseUrl}${userPath}`, {
  //       method: patchFetch,
  //       headers: this._headers,
  //       credentials: CREDENTIALS,
  //       body: JSON.stringify({
  //         name: name,
  //         email: email
  //       })
  //     })
  //   }

  //  const setUserInfo = async ({ name, email }) => {
  //     const res = await fetch(`${BASE_URL_MAIN}${USER_PATH}`, {
  //       method: CHANGE_METHOD,
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem(KEYWORD_LOCALSTORAGE_JWT)}`,
  //       },
  //       body: JSON.stringify({ name, email })
  //     });
  //     const data = await isOk(res);
  //     return data;
  //   }

  // // РАБОТА С КАРТОЧКАМИ
  // //Получает карточки с сервера
  // getCards() {
  //   return fetch(`${this._serverURL}/cards`, {
  //     headers: {
  //       authorization: 'Bearer ' + localStorage.getItem('jwt'),
  //       ...this._headers,
  //     },
  //   }).then((res) => this._handlePromiseReturn(res));
  // }
  // //Отправляет данные о новой карточке на сервер
  // addNewCard(cardName, cardLink) {
  //   return fetch(`${this._serverURL}/cards`, {
  //     method: 'POST',
  //     headers: {
  //       authorization: 'Bearer ' + localStorage.getItem('jwt'),
  //       ...this._headers,
  //     },
  //     body: JSON.stringify({
  //       name: cardName,
  //       link: cardLink,
  //     }),
  //   }).then((res) => this._handlePromiseReturn(res));
  // }
  // // Ставит/удаляет лайк
  // changeLikeCardStatus(cardID, cardLiked) {
  //   return fetch(`${this._serverURL}/cards/${cardID}/likes`, {
  //     method: cardLiked ? 'DELETE' : 'PUT',
  //     headers: {
  //       authorization: 'Bearer ' + localStorage.getItem('jwt'),
  //       ...this._headers,
  //     },
  //   }).then((res) => this._handlePromiseReturn(res));
  // }

  // //Удаляет карточку с сервера
  // removeCard(cardID) {
  //   return fetch(`${this._serverURL}/cards/${cardID}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: 'Bearer ' + localStorage.getItem('jwt'),
  //       ...this._headers,
  //     },
  //   });
  // }
  // // Параллельное получение информации о пользователе и карточек

  // getAllData() {
  //   return Promise.all([this.getUserMe(), this.getCards()]);
  // }
}

//Экземпляр API
export const api = new Api(apiSettings);
