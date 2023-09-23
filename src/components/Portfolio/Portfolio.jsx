import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__container'>
        <Link
          className='portfolio__link'
          to='https://github.com/NskMikhey/how-to-learn'
          target='_blank'
        >
          Статичный сайт
        </Link>
        <Link
          className='portfolio__link'
          to='https://github.com/NskMikhey/russian-travel'
          target='_blank'
        >
          Адаптивный сайт
        </Link>
        <Link
          className='portfolio__link'
          to='https://github.com/NskMikhey/react-mesto-api-full-gha'
          target='_blank'
        >
          Одностраничное приложение
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
