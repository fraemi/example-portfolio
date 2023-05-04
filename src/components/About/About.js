import React from 'react';
import img from '../../assets/about-img.jpeg';
import styles from './About.module.css';
import classNames from 'classnames';

const About = () => {
  return (
    <section className='section about bg-white' id='about'>
      <div className='section-center two-columns'>
        <article className={classNames('section-img', styles['section-img'])}>
          <img src={img} alt='' />
        </article>
        <article>
          <div className={classNames('section-title', styles['section-title'])}>
            <h2>About</h2>
            <div className={classNames('underline', styles['underline'])} />
          </div>
          <p className='section-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
            reiciendis possimus rerum omnis recusandae molestias error
            consequuntur, doloribus inventore reprehenderit officiis. Dolore
            aut, repellendus eius fugiat numquam cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
            reiciendis possimus rerum omnis recusandae molestias error
            consequuntur, doloribus inventore reprehenderit officiis. Dolore
            aut, repellendus eius fugiat numquam cumque.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
