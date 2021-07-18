import React from "react";
import styles from "./Skill.module.css";
import IconItem from "../IconItem/IconItem";

function Skill({ icon, title, skills, noWrap = false }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconItem
          icon={icon}
          text={title}
          noWrap={noWrap}
          fontSize={"1.3rem"}
        />
      </div>
      <div className={styles.skills_container}>
        {skills.map((skill) => (
          <span className={styles.skill}>●&nbsp;&nbsp;{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
