import React from "react";
import Logo from "../../Parts/Logo/Logo";
import styles from "./Nav.module.css";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { useMediaQuery } from "react-responsive";

const Nav = ({ handleMenuClick, isOpen }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Logo fontSize={"36px"} color={"var(--black-color)"} />
        {isTablet ? (
          isOpen ? (
            <AiOutlineClose size={40} onClick={handleMenuClick} />
          ) : (
            <HiMenu size={32} onClick={handleMenuClick} />
          )
        ) : (
          <ul className={styles.list}>
            <li className={styles.item}>About Me</li>
            <li className={styles.item}>My Services</li>
            <li className={styles.item}>Previous Work</li>
            <li className={styles.item}>Get in Touch</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
