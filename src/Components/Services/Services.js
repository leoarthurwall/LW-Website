import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          My services<span className={styles.accent}>.</span>
        </h2>
        <div className={styles.gridContainer}>
          <div className={styles.grid.item}>
            <div className={styles.upper}>
              <div className={styles.circle}></div>
              <div className={styles.subHeader}> </div>
            </div>
            <div className={styles.lower}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
