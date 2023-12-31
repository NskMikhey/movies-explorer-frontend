import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

const Login = (props) => {
  // Стейты данных пользователя
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });

  return (
    <main className='form'>
      <HeaderAuth title='Рады видеть!' />
      <section className='form__container'>
        <Auth
          textButton='Войти'
          data={loginData}
          setData={setLoginData}
          setLoggedIn={props.setLoggedIn}
        />
        <div className='form__auth-group'>
          <p className='form__auth-text'>Ещё не зарегистрированы?&ensp;</p>
          <Link to='/signup' className='form__auth-link link-hover'>
            Регистрация
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
