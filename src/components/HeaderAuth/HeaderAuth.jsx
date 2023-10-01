import React from 'react';
import './HeaderAuth.css';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

const HeaderAuth = (props) => {
  return (
    <section className='header-auth'>
      <Link className='header-auth__logo-link' to='/' title='Movies'>
        <img className='header-auth__logo' src={logo} alt='Логотип Movies' />
      </Link>
      <h1 className='header-auth__title'>{props.title}</h1>
    </section>
  );
};

export default HeaderAuth;
