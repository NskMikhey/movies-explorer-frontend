import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2023</p>

        <div className='footer__links'>
          <Link
            className='footer__link link-hover'
            to='https://practicum.yandex.ru/'
            target='_blank'
          >
            Яндекс.Практикум
          </Link>

          <Link
            className='footer__link link-hover'
            to='https://github.com/NskMikhey/movies-explorer-frontend'
            target='_blank'
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
