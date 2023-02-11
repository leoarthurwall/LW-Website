import React from "react";
import styles from "./Work.module.css";

const Work = () => {
  const workArray = [
    {
      title: "JM Exteriors",
      text: "Web Design, Development & SEO",
      bgImage: "images/Window.jpeg",
    },
    {
      title: "Inov-8",
      text: "Web Development",
      bgImage: "images/inov8.jpeg",
    },
    {
      title: "PearsonLloyd",
      text: "Web Development",
      bgImage: "images/PearsonLloyd.jpeg",
    },
  ];

  return (
    <section className={styles.work}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.header}>
            Featured Work<span className={styles.accent}>.</span>
          </h2>
        </div>
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
