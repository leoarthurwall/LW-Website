import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h2 className={styles.header}>
            What I do<span className={styles.accent}>.</span>
          </h2>
          <p className={styles.text}>
            {" "}
            I am a freelance web designer and front-end developer based in SW4
            London offering a wide variety of website design and development
            solutions for SMEs, local businesses and self-employed professionals
            including informational, promotional and eCommerce websites. Whether
            you’re looking for a brand new or wish to further develop an
            existing website, I would be happy to help you achieve your goal.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
