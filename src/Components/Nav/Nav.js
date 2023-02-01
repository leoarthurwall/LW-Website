import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h2 className={styles.logo}><span className={styles.span}>LW</span>webstudio<span className={styles.accent}>.</span></h2>
        <ul className={styles.list}>
          <li className={styles.item}>About Me</li>
          <li className={styles.item}>My Services</li>
          <li className={styles.item}>Previous Work</li>
          <li className={styles.item}>Get in Touch</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
