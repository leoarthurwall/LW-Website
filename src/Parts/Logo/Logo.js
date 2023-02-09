import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <h2 className={styles.logo}>
        <span className={styles.span}>LW</span>webstudio
        <span className={styles.accent}>.</span>
      </h2>
    </>
  );
};

export default Logo;
