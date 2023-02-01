import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h2 className={styles.logo}><span className={styles.span}>lw</span>webstudio</h2>
        <ul className={styles.list}>
          <li className={styles.item}>About Me</li>
          <li>My Services</li>
          <li>Previous Work</li>
          <li>Get in Touch</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
