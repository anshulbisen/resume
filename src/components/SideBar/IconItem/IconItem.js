import React from "react";
import styles from "./IconItem.module.css";

function IconItem({
  icon,
  text,
  style = { fontSize: "0.9rem", whiteSpace: "normal" },
}) {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <div style={style}>{text}</div>
    </div>
  );
}

export default IconItem;
