import React, { useRef } from "react";
import styles from "../Homepage/Homepage.module.css";
import { InfoAboutMe } from "../InfoAboutMe/InfoAboutMe";
import ContactMe from "../ContactMe/ContactMe";

export const Homepage = () => {
  const infoRef = useRef(null);

  const scrollToInfo = () => {
    infoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className={styles["about-section"]}>
        <div className={styles["about-layer"]}>
          <div className={styles["about-container"]}>
            <h1>
              <span className={styles.titleColor}>HI, I'M </span> <br />{" "}
              REUT MIHAI
            </h1>
            <h3 className={styles.subtitle}>FULLSTACK DEVELOPER</h3>
            <p className={styles.aboutMe}>
              I'm passionate about IT and web development, with a strong
              foundation in Full Stack Development acquired through intensive
              GOIT courses and continuous self-learning.
            </p>
          </div>
          <div className={styles["about-buttons"]}>
            <button>Download CV</button>
            <button onClick={scrollToInfo}>About me</button>
          </div>
        </div>

        <div className={styles["about-photo"]}>
          <img src="./src/assets/profilePhoto.jpeg" alt="profile avatar" />
        </div>
      </section>

      <div ref={infoRef} className={styles["info-section"]}>
        <InfoAboutMe />
      </div>
      <div>
        <ContactMe />
      </div>
    </>
  );
};
