import React from 'react';
import './AboutProject.css';

const AboutProject = (props) => {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__list'>
        <li className='about-project__item'>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__item'>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать,&nbsp;чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className='about-project__tracker'>
        <h3 className='about-project__tracker-title about-project__tracker-title_accent'>
          1 неделя
        </h3>
        <h3 className='about-project__tracker-title'>4 недели</h3>
        <p className='about-project__tracker-description'>Back-end</p>
        <p className='about-project__tracker-description'>Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
