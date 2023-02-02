import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h1 className={styles.text}>Hi, I'm Leo..<span className={styles.accent}>.</span></h1>
          <h1 className={styles.text}>
            A freelance web developer <br /><span className={styles.accent}>&</span> designer in the UK
            <span className={styles.accent}>.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
