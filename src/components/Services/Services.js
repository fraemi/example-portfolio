import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { services } from '../../utils/consts';
import styles from './Services.module.css';
import classNames from 'classnames';

const Services = () => {
  const ServiceCard = (props) => {
    return (
      <>
        <div className={styles['service-card']}>
          <FontAwesomeIcon
            icon={props.icon}
            className={styles['service-icon']}
          />
          <h4>{props.title}</h4>
          <div className={classNames('underline', styles['underline'])}></div>
          <p className={styles['service-text']}>{props.text}</p>
        </div>
      </>
    );
  };
  return (
    <section className='section bg-gray' id='services'>
      <div className='section-center'>
        <article className='section-title'>
          <h2>Services</h2>
          <div className='underline' />
        </article>
        <article
          className={classNames('three-columns', styles['services-grid'])}
        >
          {services.map((service) => {
            return (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                text={service.text}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Services;
