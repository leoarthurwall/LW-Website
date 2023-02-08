import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.textWrapper}>
            <h3 className={styles.header}>
              About<span className={styles.accent}>.</span>
            </h3>
            <p className={styles.text}>
              Making great ideas a reality on the web.
            </p>
          </div>
          <p className={styles.text}>© 2022 LW Web Studio.</p>
        </div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
};

export default Footer;
