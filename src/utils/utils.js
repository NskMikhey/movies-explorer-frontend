// Объект настроек для работы с API
import { BASE_URL_MAIN, BASE_URL_MOVIE } from "./constants";

export const apiSettings = {
  serverURL: BASE_URL_MAIN,
  serverURLMovies: BASE_URL_MOVIE,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
};

// export const SERVER_ERRORS = {
//   400: "Одно из полей не заполнено или не прошло валидацию.",
//   401: "Введен неверный email или пароль.",
//   409: "Пользователь с введенным email уже зарегистрирован.",
// }