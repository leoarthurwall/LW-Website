import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const servicesArray = [
    {
      title: "Web Development",
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
    },
    {
      title: "Web Design",
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
    },
    {
      title: "Web Maintenance",
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
    },
    {
      title: "Web Optimisation",
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
            return (
              <div className={styles.gridItem}>
                <div className={styles.upper}>
                  <div className={styles.circle}></div>
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
      </div>
    </section>
  );
};

export default Services;
