import React from "react";
import styles from "./Skill.module.css";
import IconItem from "../IconItem/IconItem";
import { ACCENT_COLOR } from "../../../common/constants/colors";

function Skill({ icon, title, skills }) {
  const style = {
    whiteSpace: "noWrap",
    fontSize: "2rem",
    color: ACCENT_COLOR,
  };

  const Dot = () => {
    return <div className={styles.dot} />;
  };

  return (
    <div className={styles.container}>
      <IconItem icon={icon} text={title} style={style} />
      <div className={styles.skills_container}>
        {skills.map((skill) => (
          <span key={skill} className={styles.skill}>
            <Dot />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
