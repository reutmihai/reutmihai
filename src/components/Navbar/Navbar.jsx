import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav>
        <ul className={styles['nav-list']}>
            <li>
                <a href='#aboutme'>ABOUT ME</a>
            </li>
            <li>
                <a href="#projects">MY PROJECTS</a>
            </li>
            <li>
                <a href="#education">Education</a>
            </li>
            <li>
                <a href="#contactme">Contact me</a>
            </li>
        </ul>
    </nav>
  )
}
