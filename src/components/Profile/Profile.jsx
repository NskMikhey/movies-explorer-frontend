import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useValidate } from '../../hooks/useValidate';
import { useNavigate } from 'react-router-dom';
import ToolTip from '../ToolTip/ToolTip';

const Profile = (props) => {
  // Навигация
  const navigate = useNavigate();

  // Стейты данных пользователя, валидации всей формы, инпутов и сообщений ошибок валидации
  const [profileData, setProfileData] = React.useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  // Использование самописного хука валидации
  const { formValid, handledataChange, formValidationMessages } = useValidate(
    profileData,
    setProfileData
  );

  //Стейт активации формы
  const [isFormActive, setFormActive] = React.useState(false);

  // Отправка формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // props.registration(loginData);
    setFormActive(false);
  };

  // Активация формы профиля
  const handleFormActive = (evt) => {
    evt.preventDefault();
    setFormActive(true);
  };

  // Выход из профиля
  const handleExit = () => {
    props.setLoggedIn(false);
    navigate('/', { replace: true });
  };

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className='profile'>
        <section className='profile__container'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='form-profile' onSubmit={handleSubmit}>
            <label className='form-profile__input-group' htmlFor='profile_name'>
              Имя
              <input
                className='form-profile__input form-profile__input_profile_name'
                type='text'
                placeholder='Виталий'
                value={profileData.name || ''}
                name='name'
                id='profile_name'
                required
                minLength={2}
                maxLength={30}
                onChange={handledataChange}
              />
              <ToolTip text={formValidationMessages.name} />
            </label>
            <label
              className='form-profile__input-group'
              htmlFor='profile_email'
            >
              E-mail
              <input
                className='form-profile__input form-profile__input_profile_email'
                type='email'
                placeholder='pochta@yandex.ru'
                value={profileData.email || ''}
                name='email'
                id='profile_email'
                minLength={2}
                maxLength={30}
                required
                onChange={handledataChange}
              />
              <ToolTip text={formValidationMessages.email} />
            </label>
            {/* {isError && ( */}
            {isFormActive && (
              <span className='profile__error'>
                При обновлении профиля произошла ошибка.
              </span>
            )}
            {/* )} */}
            <button
              type='submit'
              className={`profile__button-submit ${
                isFormActive
                  ? 'profile__button-submit_active button-hover'
                  : 'link-hover'
              }`}
              onClick={isFormActive ? handleSubmit : handleFormActive}
            >
              {isFormActive ? 'Сохранить' : 'Редактировать'}
            </button>
          </form>
          {!isFormActive && (
            <button
              type='button'
              className='profile__button-exit button-hover'
              onClick={handleExit}
            >
              Выйти из аккаунта
            </button>
          )}
        </section>
      </main>
    </>
  );
};

export default Profile;
