import React from 'react';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
    const menuItems = [
        {
            id: '1',
            name: 'HOME',
            path: '/',
        },

        {
            id: '2',
            name: 'MY WORK',
            path: 'projects',
        },

        {
            id: '3',
            name: 'CONTACT ME',
            path: 'contact',
        }
    ]
  return (
    <nav>
        <ul className={styles['nav-list']}>
            {menuItems.map(item => (
                <li key={item.id}>
                    <Link key={item.id} to={item.path} className={styles.items}>
                    {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
