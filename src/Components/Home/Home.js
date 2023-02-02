import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textBox}>
        <h1 className={styles.name}>Hi, I'm Leo</h1>
        <h1 className={styles.role}>
          A freelance web developer in Hampshire, England
          <span className={styles.accent}>.</span>
        </h1>
      </div>
    </section>
  );
};

export default Home;
