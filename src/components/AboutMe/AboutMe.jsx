import React from "react";
import styles from "../AboutMe/AboutMe.module.css";

export const AboutMe = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        <h1>
          <span className={styles.titleBackground}>HI, I'M </span> <br /> REUT
          MIHAI
        </h1>
        <h3>FULLSTACK DEVELOPER</h3>
        <p className={styles.aboutMe}>
          In a sunlit glade, a curious fox roamed among vibrant wildflowers. The
          gentle babble of a nearby brook harmonized with birdsong, creating a
          serene melody.
        </p>
      </div>
      <div className={styles["about-buttons"]}>
        <button>Download CV</button>
        <button>My work</button>
      </div>
    </section>
  );
};
