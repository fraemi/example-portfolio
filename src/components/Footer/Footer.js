import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { socials } from '../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
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
      <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
