import React from "react";
import styles from "./Work.module.css";


const Work = () => {
  const workArray = [
    {
      title: "JM Exteriors",
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
      bgImage: "images/Window.jpeg",
    },
    {
      title: "Inov-8",
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
      bgImage: "images/inov8.jpeg",

    },
    {
      title: "Pearsons",
      text: "My main area of expertise lies within frontend development but can also offer backend development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one.",
      bgImage: "images/PearsonLloyd.jpeg",

    },
  ];

  return (
    <section className={styles.work}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          My Work<span className={styles.accent}>.</span>
        </h2>
        <div className={styles.gridContainer}>
          {workArray.map((work, index) => {
            return (
              <div className={styles.gridItem}>
              <img
                key={index}
                src={work.bgImage}
                alt={work.title}
                className={styles.image}
              ></img>
              <div className={styles.imageTextWrapper}>
                <h2 className={styles.itemHeader}>{work.title}</h2>
                <p className={styles.itemText}>{work.text}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
