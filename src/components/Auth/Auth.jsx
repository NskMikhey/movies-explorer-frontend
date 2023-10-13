import React from 'react';
import './Auth.css';
import { useLocation } from 'react-router-dom';
import { useValidate } from '../../hooks/useValidate';
import { PATH_TO } from '../../utils/constants';

const Auth = (props) => {
  // Навигация
  const { pathname } = useLocation();
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
  // Использование самописного хука валидации
  const { formValid, handleDataChange, formValidationMessages } = useValidate(
    props.data,
    props.setData
  );

  // Отправка формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit(props.data);
  };

  return (
    <form className='form__body' onSubmit={handleSubmit}>
      {pathname === '/signup' && (
        <label className='form__input-group' htmlFor='auth-name'>
          Имя
          <input
            required
            type='text'
            className={[
              'form__input',
              formValidationMessages.name && 'form__input_error',
            ].join(' ')}
            name='name'
            value={props.data.name}
            onChange={handleDataChange}
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
          className={[
            'form__input',
            formValidationMessages.email && 'form__input_error',
          ].join(' ')}
          name='email'
          onChange={handleDataChange}
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
          className={[
            'form__input',
            formValidationMessages.password && 'form__input_error',
          ].join(' ')}
          name='password'
          value={props.data.password}
          onChange={handleDataChange}
          placeholder='••••••••••••••'
          autoComplete='off'
          id='auth-password'
          minLength={6}
          maxLength={30}
        />
        <span className='form__error'>{formValidationMessages.password}</span>
      </label>
      <span className='form__error form__error_response'></span>
      <button
        type='submit'
        className='form__submit button-hover'
        disabled={!formValid}
      >
        {props.textButton}
      </button>
    </form>
  );
};

export default Auth;
