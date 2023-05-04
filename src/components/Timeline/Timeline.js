import React from 'react';
import styles from './Timeline.module.css';
import { steps } from '../../utils/consts';

const Timeline = () => {
  const Step = (props) => {
    return (
      <>
        <div className={styles['step']}>
          <span className={styles['step-number']}>{props.number}</span>
          <h4>{props.year}</h4>
          <p>{props.text}</p>
        </div>
      </>
    );
  };
  return (
    <section className='section bg-white'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Timeline</h2>
          <div className='underline' />
        </div>
        <article className={styles['timeline']}>
          {steps.map((step) => {
            return (
              <Step
                key={step.year}
                year={step.year}
                text={step.text}
                number={step.number}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Timeline;
