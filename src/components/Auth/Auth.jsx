import React from 'react';
import './Auth.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useValidate } from '../../hooks/useValidate';

const Auth = (props) => {
  // Навигация
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Использование самописного хука валидации
  const { formValid, handledataChange, formValidationMessages } = useValidate(
    props.data,
    props.setData
  );

  // Отправка формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setLoggedIn(true);
    navigate('/movies', { replace: true });
    // props.registration(data);
  };

  return (
    <form className='form__body' onSubmit={handleSubmit}>
      {pathname === '/signup' && (
        <label className='form__input-group' htmlFor='auth-name'>
          Имя
          <input
            required
            type='text'
            className='form__input'
            name='name'
            value={props.data.name}
            onChange={handledataChange}
            placeholder='Виталий'
            autoComplete='off'
            id='auth-name'
            minLength={2}
            maxLength={30}
          />
          <span className='form__error'>{formValidationMessages.name}</span>
        </label>
      )}
      <label className='form__input-group' htmlFor='auth-email'>
        E-mail
        <input
          required
          type='email'
          className='form__input'
          name='email'
          onChange={handledataChange}
          value={props.data.email}
          placeholder='pochta@yandex.ru|'
          autoComplete='off'
          id='auth-email'
          minLength={2}
          maxLength={30}
        />
        <span className='form__error'>{formValidationMessages.email}</span>
      </label>
      <label className='form__input-group' htmlFor='auth-password'>
        Пароль
        <input
          required
          type='password'
          className='form__input'
          name='password'
          value={props.data.password}
          onChange={handledataChange}
          placeholder='••••••••••••••'
          autoComplete='off'
          id='auth-password'
          minLength={6}
          maxLength={30}
        />
        <span className='form__error'>{formValidationMessages.password}</span>
      </label>
      <span className='form__error form__error_response'></span>
      <button type='submit' className='form__submit button-hover' disabled={!formValid}>
        {props.textButton}
      </button>
    </form>
  );
};

export default Auth;
