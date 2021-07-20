import React from "react";
import styles from "./IconItem.module.css";

function IconItem({
  icon,
  text,
  style = { fontSize: "0.9rem", whiteSpace: "normal" },
  link,
}) {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <div style={style}>
        {link ? (
          <a className={styles.link} href={link} target="_blank">
            {text}
          </a>
        ) : (
          text
        )}
      </div>
    </div>
  );
}

export default IconItem;
