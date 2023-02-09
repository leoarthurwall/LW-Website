import React from "react";
import Logo from "../../Parts/Logo/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
      <Logo fontSize={"36px"} color={"var(--black-color)"}/>
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
