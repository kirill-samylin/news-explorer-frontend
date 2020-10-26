import React from 'react';
import './About.css';
import face from '../../images/face.png';
function About() {
  return (
    <section className="about">
      <img src={face} className="about__face" alt="Автор" />
      <ul className="about__list">
        <li className="about__item">
          <h2 className="about__title">Об авторе</h2>
        </li>
        <li className="about__item">
          <p className="about__paragraph">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
        </li>
        <li className="about__item">
          <p className="about__paragraph">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </li>
      </ul>
    </section>
  );
}

export default About;