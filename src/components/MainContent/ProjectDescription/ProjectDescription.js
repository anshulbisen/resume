import React from "react";
import styles from "./ProjectDescription.module.css";

function ProjectDescription({ title, description, duration, technologies }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.dates}>{duration}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>{description}</div>
      </div>
      {technologies && (
        <div className={styles.technologies}>
          {technologies.map((t) => (
            <div className={styles.technology}>{t}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectDescription;
