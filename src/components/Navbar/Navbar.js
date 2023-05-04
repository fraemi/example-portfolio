import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.svg';
import scrollTo from '../../functions/scrollTo';
import { links } from '../../utils/consts';
import styles from './Navbar.module.css';
import classNames from 'classnames';

const Navbar = () => {
  // Change Navbar style after scrolling
  const [styleChange, setStyleChange] = useState(false);

  const changeNavbarStyle = () => {
    setStyleChange(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarStyle);

    return () => {
      window.removeEventListener('scroll', changeNavbarStyle);
    };
  }, []);

  // Open & close menu (small screens)
  const [openMenu, setOpenMenu] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(faBars);
  const buttonRef = useRef();

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);

    if (!openMenu) {
      setButtonIcon(faXmark);
      buttonRef.current.style.fontSize = '2rem';
    } else {
      setButtonIcon(faBars);
      buttonRef.current.style.fontSize = '1.5rem';
    }
  };

  // Refs to get navbar
  const navRef = useRef();

  // Refs to get links height & change container height
  const linksContainerRef = useRef();
  const linksRef = useRef(null);

  // Open menu smoothly by changing container height
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    navRef.current.style.height = openMenu ? '100vh' : 'auto';
    linksContainerRef.current.style.height = openMenu
      ? `${linksHeight + 32}px`
      : '0rem';
  }, [openMenu]);

  return (
    <nav
      className={
        styleChange
          ? classNames(styles['nav'], styles['nav-scroll'])
          : styles['nav']
      }
      ref={navRef}
      id='nav'
    >
      <div className={styles['nav-center']}>
        <div className={styles['nav-navbar']}>
          <Link to='/'>
            <img src={logo} className={styles['nav-logo']} alt='Logo' />
          </Link>
          <button
            className={styles['nav-btn']}
            id='nav-btn'
            onClick={toggleMenu}
            ref={buttonRef}
          >
            <FontAwesomeIcon icon={buttonIcon} />
          </button>
        </div>
        <div className={styles['nav-links-container']} ref={linksContainerRef}>
          <ul className={styles['nav-links']} ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link}>
                  <Link to={'#' + link} onClick={scrollTo(link)}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
