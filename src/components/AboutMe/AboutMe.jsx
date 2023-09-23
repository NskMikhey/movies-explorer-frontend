import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import me from '../../images/pic__COLOR_pic.jpg';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = (props) => {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__wrapper'>
          <h3 className='about-me__subtitle'>Виталий</h3>
          <p className='about-me__description'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className='about-me__link'
            to='https://github.com/NskMikhey'
            target='_blank'
          >
            Github
          </Link>
        </div>
        <img className='about-me__photo' src={me} alt='Фото студента' />
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
