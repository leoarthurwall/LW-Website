import React from "react";
import Button from "../../Parts/Button/Button";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="images/about.png" alt="web development animation"></img>
        </div>
        <div className={styles.bottom}></div>
        <div className={styles.right}>
          <h2 className={styles.header}>
            What I do<span className={styles.accent}>.</span>
          </h2>
          <p className={styles.text}>
            {" "}
            As a front-end web developer and designer, I help businesses and
            individuals bring their online visions to life. I use my expertise
            in HTML, CSS, JavaScript, React, TypeScript, and WordPress to create
            custom websites and web applications that are designed to meet the
            specific needs and goals of each project. My goal is to deliver
            high-quality digital experiences that are both visually stunning and
            user-friendly, while driving results and maximizing the return on
            investment for my clients.{" "}
          </p>
          <div className={styles.buttonWrapper}>
            <Button text={"find out more"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
