import React from "react";
import styles from "./Skill.module.css";
import IconItem from "../IconItem/IconItem";
import { ACCENT_COLOR } from "../../../common/constants/colors";

function Skill({ icon, title, skills }) {
  const style = {
    whiteSpace: "noWrap",
    fontSize: "1.3rem",
    color: ACCENT_COLOR,
  };
  return (
    <div className={styles.container}>
      <IconItem icon={icon} text={title} style={style} />
      <div className={styles.skills_container}>
        {skills.map((skill) => (
          <span className={styles.skill}>●&nbsp;&nbsp;{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
