import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useValidate } from '../../hooks/useValidate';
import ToolTip from '../ToolTip/ToolTip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = (props) => {
  // Подписываемся на контекст пользователя
  const currentUser = React.useContext(CurrentUserContext);

  // Стейты данных пользователя, валидации всей формы, инпутов и сообщений ошибок валидации
  const [profileData, setProfileData] = React.useState({
    name: currentUser.name ?? '',
    email: currentUser.email ?? '',
  });

  // Использование самописного хука валидации
  const { formValid, handleDataChange, formValidationMessages } = useValidate(
    profileData,
    setProfileData
  );

  // Сброс сообщений об ошибке / удаче
  React.useEffect(() => {
    props.setResponse({});
  }, []);

  // Установка данных пользователя
  React.useEffect(() => {
    setProfileData((values) => ({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    }));
  }, [currentUser]);

  // Отправка формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleUpdateUser(profileData);
  };

  // Активация формы профиля
  const handleFormActive = (evt) => {
    evt.preventDefault();
    props.setResponse({});
    props.setFormActive(true);
  };

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className='profile'>
        <section className='profile__container'>
          <h1 className='profile__title'>{`Привет, ${profileData.name}!`}</h1>
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
                onChange={handleDataChange}
                disabled={!props.isFormActive}
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
                onChange={handleDataChange}
                disabled={!props.isFormActive}
              />
              <ToolTip text={formValidationMessages.email} />
            </label>

            <span
              className={`profile__error ${props.response.type === 'success' && 'profile__error_success'
                }`}
            >
              {props.response.message}
            </span>

            <button
              type='submit'
              className={`profile__button-submit ${props.isFormActive
                  ? 'profile__button-submit_active button-hover'
                  : 'link-hover'
                }`}
              onClick={props.isFormActive ? handleSubmit : handleFormActive}
              disabled={
                (props.isFormActive &&
                  currentUser.name === profileData.name &&
                  currentUser.email === profileData.email) ||
                (props.isFormActive && !formValid)
              }
            >
              {props.isFormActive ? 'Сохранить' : 'Редактировать'}
            </button>
          </form>
          {!props.isFormActive && (
            <button
              type='button'
              className='profile__button-exit button-hover'
              onClick={props.signOut}
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
