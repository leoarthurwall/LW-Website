import React from "react";
import Button from "../../Parts/Button/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          Contact<span className={styles.accent}>.</span>
        </h2>
        <p className={styles.text}>
          I'd love to hear from you and discuss your project! You can reach me
          via email or via phone.{" "}
        </p>
        <div className={styles.buttonWrapper}>
          <Button text={"Email"} />
          <Button text={"Phone"} />
        </div>
        <p className={styles.text}>
          Please feel free to share as much detail about your project as
          possible, and I'll get back to you promptly to discuss further. I look
          forward to hearing from you!
        </p>
        <div className={styles.buttonWrapper}>
          <Button text={"get in touch"} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
