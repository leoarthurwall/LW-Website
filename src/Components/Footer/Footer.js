import React from "react";
import Logo from "../../Parts/Logo/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.left}>
            <div className={styles.textWrapper}>
              <Logo fontSize={"28px"} color={"var(--secondary-color)"} />
              <p className={styles.text}>
                Here to bring your great ideas to life through quality web
                design and development.
              </p>
            </div>
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
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.lowerTextWrapper}>
            <p className={styles.lowerText}>Southsea, Hampshire, UK, PO4. </p>
          </div>
          <div className={styles.lowerTextWrapper}>
            <p className={styles.lowerText}>© 2023 LW Web Studio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
