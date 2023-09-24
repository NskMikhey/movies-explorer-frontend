import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
  return (
    <main className='error-page'>
      <h1 className='error-page__title'>404</h1>
      <p className='error-page__subtitle'>Страница не найдена</p>
      <Link className='error-page__link' to={-1}>
        Назад
      </Link>
    </main>
  );
};

export default ErrorPage;
