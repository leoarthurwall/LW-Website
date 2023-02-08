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
        <div className={styles.right}>
        <div className={styles.rightUpper}>
          <div className={styles.rightColumn}>
            <div className={styles.textWrapper}>
              <h3 className={styles.header}>
                Sitemap<span className={styles.accent}>.</span>
              </h3>
              <ul className={styles.list}>
                <li className={styles.item}>About Me</li>
                <li className={styles.item}>My services</li>
                <li className={styles.item}>Previous Work</li>
                <li className={styles.item}>Contact</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.textWrapper}>
              <h3 className={styles.header}>
                Say hello<span className={styles.accent}>.</span>
              </h3>
              <ul className={styles.list}>
                <li className={styles.item}>Phone</li>
                <li className={styles.item}>Email</li>
                <li className={styles.item}>Contact Form</li>
                <li className={styles.item}>Whatsapp</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.textWrapper}>
              <h3 className={styles.header}>
                Useful<span className={styles.accent}>.</span>
              </h3>
              <ul className={styles.list}>
                <li className={styles.item}>FAQs</li>
              </ul>
            </div>
          </div>
          </div>
          <p className={styles.text}>Southsea, Portsmouth, Hampshire, UK, PO4. </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
