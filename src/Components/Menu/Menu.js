import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ isOpen, handleMenuClick }) => {
  return (
    <div className={isOpen ? styles.containerOpen : styles.containerClosed}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#home" onClick={handleMenuClick}>
            About Me
          </a>
        </li>
        <li className={styles.item}>
          <a href="#about" onClick={handleMenuClick}>
            My Services
          </a>
        </li>
        <li className={styles.item}>
          <a href="#services" onClick={handleMenuClick}>
            Previous Work
          </a>
        </li>
        <li className={styles.item}>
          <a href="#contact" onClick={handleMenuClick}>
            Get In Touch
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;