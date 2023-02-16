import React from "react";
import styles from "./Services.module.css";
import { BiCodeAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBrush } from "react-icons/bs";
import { GrOptimize } from "react-icons/gr";

import Button from "../../Parts/Button/Button";

const Services = () => {
  const servicesArray = [
    {
      title: "Web Development",
      icon: BiCodeAlt,
      text: "I offer custom website development services that are designed to meet the unique needs and goals of each project. My expertise in HTML, CSS, JavaScript, React, TypeScript, and WordPress allows me to create dynamic and responsive websites that deliver an exceptional user experience.",
    },
    {
      title: "Web Design",
      icon: BsBrush,
      text: "I provide professional website design services that focus on creating visually stunning websites that engage audiences and drive results. My goal is to create a design that accurately reflects your brand and enhances your online presence.",
    },
    {
      title: "Web Maintenance",
      icon: IoSettingsOutline,
      text: "I offer ongoing website maintenance services that ensure your website remains up-to-date and runs smoothly. I provide regular updates, backups, and troubleshooting services to keep your website performing at its best.",
    },
    {
      title: "Web Optimisation",
      icon: GrOptimize,
      text: "I optimize your website to improve its performance, speed, and search engine rankings. This includes optimizing website code, images, and content to ensure that your website delivers the best possible user experience and maximizes your online visibility.",
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
