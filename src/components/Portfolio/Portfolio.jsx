import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link link-hover'
            to='https://github.com/NskMikhey/how-to-learn'
            target='_blank'
          >
            Статичный сайт
          </Link>
        </li>
        <li className='portfolio__item link-hover'>
          <Link
            className='portfolio__link'
            to='https://github.com/NskMikhey/russian-travel'
            target='_blank'
          >
            Адаптивный сайт
          </Link>
        </li>
        <li className='portfolio__item link-hover'>
          <Link
            className='portfolio__link'
            to='https://github.com/NskMikhey/react-mesto-api-full-gha'
            target='_blank'
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
