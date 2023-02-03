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
          <div className={styles.gridItem}>
            <div className={styles.upper}>
              <div className={styles.circle}></div>
              <h3 className={styles.subHeader}>
                Web Development<span className={styles.accent}>.</span>{" "}
              </h3>
            </div>
            <div className={styles.lower}>
              <p className={styles.text}>
                My main area of expertise lies within front-end development but
                can also offer back-end development to deliver any web
                functionalities to suit all your project needs. This could be by
                building a brand new website or perhaps by adding extra features
                to an exiting one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
