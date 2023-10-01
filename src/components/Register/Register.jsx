import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

const Register = (props) => {
  // Стейты данных пользователя
  const [registerData, setRegisterData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <main className='form'>
      <HeaderAuth title='Добро пожаловать!' />
      <section className='form__container'>
        <Auth
          data={registerData}
          textButton='Зарегистрироваться'
          setData={setRegisterData}
          setLoggedIn={props.setLoggedIn}
        />
        <div className='form__auth-group'>
          <p className='form__auth-text'>Уже зарегистрированы?&ensp;</p>
          <Link to='/signin' className='form__auth-link link-hover'>
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Register;
