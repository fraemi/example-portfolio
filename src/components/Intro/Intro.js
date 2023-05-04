import React from 'react';
import img from '../../assets/hero-img.jpeg';
import { Link } from 'react-router-dom';
import scrollTo from '../../functions/scrollTo';
import styles from './Intro.module.css';
import classNames from 'classnames';
import { socials } from '../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Intro = () => {
  return (
    <section className={classNames('section bg-yellow', styles['intro'])}>
      <div className='section-center two-columns'>
        <article>
          <div className={classNames('underline', styles['underline'])} />
          <h1>I'm John</h1>
          <h4>Freelance Web & Mobile UI/UX Designer</h4>
          <Link
            to='#contact'
            onClick={scrollTo('contact')}
            className={classNames('btn', styles['btn'])}
          >
            Hire me
          </Link>
          <ul className={styles['socials']}>
            {socials.map((social) => {
              return (
                <li key={social.name}>
                  <Link to={social.url} target='_blank'>
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
        <article className='section-img'>
          <img src={img} alt='' />
        </article>
      </div>
    </section>
  );
};

export default Intro;
