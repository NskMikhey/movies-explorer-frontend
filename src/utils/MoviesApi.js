import { PATH_TO } from "./constants";
import { apiSettings } from "./utils";

// Возвращает ответ / ошибку после выполнения промиса
function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

// Получает информацию о фильмах с сервера beatfilm-movies
export const getAllMoviesApi = (registerData) => {
  return fetch(`${apiSettings.serverURLMovies}${PATH_TO.BEATFILM}`, {
    headers: apiSettings.headers,
  })
    .then((res) => handleResponse(res))
}