import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          My services<span className={styles.accent}>.</span>
        </h2>
        <div className={styles.gridContainer}></div>
      </div>
    </section>
  );
};

export default Services;
