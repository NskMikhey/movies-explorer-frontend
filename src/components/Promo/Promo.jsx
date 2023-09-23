import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';

const Promo = (props) => {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link className='promo__button' to='#about-project' reloadDocument>
          Узнать больше
        </Link>
      </div>
    </section>
  );
};

export default Promo;
