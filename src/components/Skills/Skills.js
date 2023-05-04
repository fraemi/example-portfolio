import React from 'react';
import styles from './Skills.module.css';
import classNames from 'classnames';
import { frontend_skills, backend_skills } from '../../utils/consts';

const Skills = () => {
  const Skill = (props) => {
    return (
      <>
        <div className={styles['skill']}>
          <p>{props.name}</p>
          <div className={styles['skill-container']}>
            <div
              className={styles['skill-value']}
              style={{ width: props.value }}
            >
              <p className={styles['skill-label']}>{props.value}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <section className='section bg-dark-yellow' id='skills'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Skills</h2>
          <div className='underline' />
        </div>
        <div className={classNames('two-columns', styles['skills-grid'])}>
          <article className={styles['skills']}>
            <h3>Front End</h3>
            {frontend_skills.map((skill) => {
              return (
                <Skill key={skill.name} name={skill.name} value={skill.value} />
              );
            })}
          </article>
          <article className={styles['skills']}>
            <h3>Back End</h3>
            {backend_skills.map((skill) => {
              return (
                <Skill key={skill.name} name={skill.name} value={skill.value} />
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
