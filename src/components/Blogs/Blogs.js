import React from 'react';
import { blogs } from '../../utils/consts';
import { Link } from 'react-router-dom';
import styles from './Blogs.module.css';
import classNames from 'classnames';
import avatar from '../../assets/hero-img-small.jpeg';

const Blogs = () => {
  const BlogCard = (props) => {
    return (
      <>
        <div className={styles['blog-card']}>
          <div className={styles['card-img']}>
            <img src={props.img} alt='' />
          </div>
          <div className={styles['card-text']}>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            <div className={styles['card-footer']}>
              <img src={avatar} alt=''></img>
              <p>{props.read} min read</p>
            </div>
          </div>
          <div className={styles['card-overlay']}>
            <Link to={props.url} className='btn'>
              Read More
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <section
      className={classNames('section bg-gray', styles['blogs'])}
      id='blogs'
    >
      <div className='section-center'>
        <article className='section-title'>
          <h2>Blog</h2>
          <div className='underline' />
        </article>
        <article className={classNames(styles['blog-grid'], 'three-columns')}>
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.title}
                img={blog.getImageSrc()}
                title={blog.title}
                text={blog.text}
                read={blog.read}
                url='#'
              />
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Blogs;
