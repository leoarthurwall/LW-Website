import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          Contact<span className={styles.accent}>.</span>
        </h2>
        <p className={styles.text}>
          As a freelance web developer, I'm committed to providing you with a
          high-quality service tailored to your personal needs. I am currently
          available to take on new work, so if you're interested in working
          together, please feel free to get in contact with by email or phone.
        </p>
      </div>
    </section>
  );
};

export default Contact;
