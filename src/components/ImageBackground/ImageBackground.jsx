import React from 'react';
import styles from '../ImageBackground/ImageBackground.module.css';

export const ImageBackground = () => {
  return (
    <img className={styles['profile-photo']} src="./src/assets/profilePhoto.jpeg" />
  );
}
