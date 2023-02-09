import React from "react";
import styles from "./Services.module.css";
import { BiCodeAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiTestTubes } from "react-icons/gi";
import Button from "../../Parts/Button/Button";

const Services = () => {
  const servicesArray = [
    {
      title: "Web Development",
      icon: BiCodeAlt,
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
    },
    {
      title: "Web Design",
      icon: MdDesignServices,
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
    },
    {
      title: "Web Maintenance",
      icon: AiTwotoneSetting,
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
    },
    {
      title: "Web Optimisation",
      icon: GiTestTubes,
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
    },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          My services<span className={styles.accent}>.</span>
        </h2>
        <div className={styles.gridContainer}>
          {servicesArray.map((service, id) => {
            const Icon = service.icon;
            return (
              <div className={styles.gridItem}>
                <div className={styles.upper}>
                  <div className={styles.circle}>
                    <Icon size={32} />
                  </div>
                  <h3 className={styles.subHeader}>
                    {service.title}
                    <span className={styles.accent}>.</span>{" "}
                  </h3>
                </div>
                <div className={styles.lower}>
                  <p className={styles.text}>{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.buttonWrapper}>
          <Button text={"request a quote"} />
        </div>
      </div>
    </section>
  );
};

export default Services;
