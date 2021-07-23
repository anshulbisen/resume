import React from "react";
import styles from "./ProjectDescription.module.css";

function ProjectDescription({
  title,
  role,
  description,
  duration,
  technologies,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          {title}&nbsp;&nbsp;
          <div className={styles.role}>{role}</div>
        </div>
        <div className={styles.duration}>{duration}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>{description}</div>
      </div>
      {technologies && (
        <div className={styles.technologies}>
          {technologies.map((t) => (
            <div key={t} className={styles.technology}>
              {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectDescription;
