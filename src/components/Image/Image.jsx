import React from 'react';
import styles from '../Image/Image.module.css';

export const Image = () => {
  return (
    <img className={styles['profile-photo']} src="./src/assets/profilePhoto.jpeg" />
  );
}
