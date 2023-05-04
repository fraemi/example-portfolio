import React from 'react';
import styles from './LatestWorks.module.css';
import { projects } from '../../utils/consts';

const LatestWorks = () => {
  const Project = (props) => {
    return (
      <>
        <div className={styles['card']} style={{ gridArea: props.grid }}>
          <img src={props.img} alt='' />
          <div className={styles['card-overlay']}>
            <h4>{props.title}</h4>
            <p>{props.client}</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <section className='section bg-white' id='projects'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Latest works</h2>
          <div className='underline' />
          <p className={styles['project-p']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
            magnam, earum assumenda obcaecati cum quaerat facere ratione
            molestiae dignissimos aliquid blanditiis architecto voluptates
            delectus voluptate animi nulla! Autem explicabo perspiciatis officia
            ea.
          </p>
        </div>
        <article className={styles['projects-grid']}>
          {projects.map((project, index) => {
            return (
              <Project
                key={project.title}
                title={project.title}
                client={project.client}
                img={project.getImageSrc()}
                grid={'project-' + (index + 1)}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default LatestWorks;
